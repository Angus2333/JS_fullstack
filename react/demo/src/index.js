import React from 'react';
import ReactDom from 'react-dom'; 
import App from './APP';

//render函数有两个参数，第一个是要渲染的组件，第二个参数是要去哪里渲染
ReactDom.render(<App/>,document.getElementById('root'))