import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // 等待加载完成，以避免与web3注入时机的竞争条件。
    window.addEventListener("load", async () => {
      // 现代浏览器...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // 如果需要的话，申请Address访问
          await window.ethereum.enable();
          // 现在暴露的账户
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      //传统的浏览器...
      else if (window.web3) {
        // 使用MetaMask的 provider.
        const web3 = window.web3;
        console.log("Injected web3 detected.");
        resolve(web3);
      }
      // 后退到localhost；默认使用dev控制台端口...
      else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:7545"
        );
        const web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

//导出getWeb3
export default getWeb3;

/**
 * Promise 
 * Promise 对象用于表示一个异步操作的最终完成（或失败）及其结果值。
 * 或者如果由于超时、网络错误等原因未成功完成，则生成一个错误。
 * 成功的调用完成由resolve函数调用指示，错误由reject函数调用指示。
 * 
 * async function
 * async 函数是使用async关键字声明的函数。
 * async 函数是 AsyncFunction 构造函数的实例，并且其中允许使用 await 关键字。
 * await 表达式会暂停整个 async 函数的执行进程并出让其控制权，
 * 只有当其等待的基于 promise 的异步操作被兑现或被拒绝之后才会恢复进程。
 * 
 * then and catch
 * catch(failureCallback) 是 then(null, failureCallback) 的缩略形式
 */



