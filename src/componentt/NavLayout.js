import React from 'react'
import { Outlet } from 'react-router-dom';

export default function NavLayout() {
  return (
    <>
    <div className='row'>
        <Link to="product">Product</Link>
        <Link to="about">About Us</Link>
        <Outlet/>
    </div>
    </>
  );
}
