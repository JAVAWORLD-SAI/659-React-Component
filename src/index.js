import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DataBindingNestedList } from './DataBindingNestedList/NestedList';
import { MenubarOngroup } from './DataBindingNestedList/MenubarOngroup';
import { Description } from './DataBindingNestedList/Description';
import { Summary } from './DataBindingNestedList/Summary';
import { Demo } from './StateConcepts/Demo';
import { Demo2 } from './StateConcepts/Demo2';
import { Demo3 } from './StateConcepts/Demo3';
import { Oneway } from './StateConcepts/onewaybinding state/Oneway';
import { Twoway } from './StateConcepts/onewaybinding state/Twoway';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataBindingNestedList/> */}
    {/* <MenubarOngroup/> */}
    {/* <Description/> */}
    {/* <Summary/> */}
    {/* <Demo/> */}
    {/* <Demo2/> */}
    {/* <Demo3/> */}
    {/* <Oneway/> */}
    <Twoway/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
