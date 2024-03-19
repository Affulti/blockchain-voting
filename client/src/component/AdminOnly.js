import React from "react";

const AdminOnly = (props) => {
  return (
    <div className="container-item attention" style={{ borderColor: "tomato" }}>
      <center>
        <div style={{ margin: "17px" }}>
          <h1>{props.page}</h1>
        </div>
        <p>仅限主持人访问.</p>
      </center>
    </div>
  );
};

export default AdminOnly;

/**
 * 给 setState 传递一个函数，而不是一个对象，就可以确保每次的调用都是使用最新版的 state。
 * 传递一个函数可以让你在函数内访问到当前的 state 的值。
 * 
 * props 正是 组件的唯一参数！ React 组件函数接受一个参数，一个 props 对象
 * 在声明 props 时， 不要忘记 ( 和 ) 之间的一对花括号 { 和 }  
 * function Avatar({ person, size }) {
 *    // ...
 * }
 */
