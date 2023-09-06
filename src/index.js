import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { Gallery } from './componentt/Gallery';
import Jul24 from './componentt/Jul24';
import Demo22 from './componentt/Demo22';
import InlineCSS from './componentt/InlineCSS';
// import Product from './componentt/Product';
// import ProductClass from './componentt/ProductClas';
// import RouteConfig from './componentt/RouteConfig';
// import { Outlet } from 'react-router-dom';
// import CounterComp from './componentt/CounterComp';
// import LikeCopy from './componentt/LikeCopy';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <App /> */}
    {/* <FirstComponent/>
    <FirstComponent/>
    <demo />
    <FirstComponent/>
    <FirstComponent/> */}

    {/* <Gallery url={m[0]}/>
    <Gallery url={m[1]}/> */}

    <InlineCSS/>
    <Demo22/>
    <Jul24/>

  {/* <div className='container'>
    <div className='row'>
      <RouteConfig /> 
    </div>
    <Outlet/>
  </div> */}



  {/* <div>
    <CounterComp count="122" name="Mayank"/>
  </div>
 */}

{/* <div>
    <LikeCopy count ="101" />
  </div> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
