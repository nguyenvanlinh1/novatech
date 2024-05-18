import React from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import SignIn from '../User/Auth/Signin'
import SignUp from '../User/Auth/Signup'
import HomePage from '../User/HomePage/HomePage'
import Cart from '../User/Cart/Cart'
import Order from '../User/Order/Order'
import DetailsProduct from '../User/Product/DetailsProduct'
import Profile from '../User/Profile/Profile'
import Navigation from '../User/Nav/Navigation'
import FilterProduct from '../User/Product/FilterProduct'
import AddressOrder from '../User/Order/AddressOrder'
import PaymentOrder from '../User/Order/PaymentOrder'

const UserRouters = () => {
  const location = useLocation();
  const shouldDisplayNavigation = () => {
    return !(location.pathname === '/auth/signin' || location.pathname === '/auth/signup');
  }
  return (
    <div>
        {shouldDisplayNavigation() && <Navigation/>}
        <Routes>
            <Route path='/auth/signin' element={<SignIn/>}></Route>
            <Route path='/auth/signup' element={<SignUp/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/order' element={<Order/>}></Route>
            <Route path='/delivery' element={<AddressOrder/>}></Route>
            <Route path='/payment' element={<PaymentOrder/>}></Route>
            <Route path='/product/:productId' element={<DetailsProduct/>}></Route>
            <Route path='/user' element={<Profile/>}></Route>
            <Route path='/:categoryName' element={<FilterProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRouters