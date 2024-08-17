import { useEffect, useState } from 'react'
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import './pages/home_page/background.jsx'
import Home from "./pages/home_page/Home_main.jsx"
import Explore from "./pages/explore/explore_main.jsx"
import Sell from "./pages/sell/sell_main.jsx"
import McLaren from './pages/new_cars/mclaren.jsx'
import About from './pages/about/about.jsx'
import Aston_Martin from './pages/new_cars/Aston_Martin.jsx'
import Bugatti from './pages/new_cars/Bugatti.jsx'
import Audi from './pages/new_cars/Audi.jsx'
import Bmw from './pages/new_cars/Bmw.jsx'
import Mercedes from './pages/new_cars/Mercedes_Benz.jsx'
import Jaguar from './pages/new_cars/Jaguar.jsx'
import Toyota from './pages/new_cars/Toyota.jsx'
import Land_rover from './pages/new_cars/Land_rover.jsx'
import Volvo from './pages/new_cars/Volvo.jsx'
import Lexus from './pages/new_cars/Lexus.jsx'
import Ferrari from './pages/new_cars/Ferrari.jsx'
import Lamborghini from './pages/new_cars/Lamborghini.jsx'
import Porsche from './pages/new_cars/Porsche.jsx'
import Rolls_royce from './pages/new_cars/Rolls_royce.jsx'
import Bentley from './pages/new_cars/Bentley.jsx'
import Maserati from './pages/new_cars/Maserati.jsx'
import Mini from './pages/new_cars/Mini.jsx'
import Jeep from './pages/new_cars/Jeep.jsx'
import Nissan from './pages/new_cars/Nissan.jsx'
import Pagani from './pages/new_cars/Pagani.jsx'
import Koenigsegg from './pages/new_cars/Koenigsegg.jsx'
import Gmc from './pages/new_cars/Gmc.jsx'
// import Signup from './component/signup_login/signup.jsx'
// import Login from './component/signup_login/login.jsx'
// import Forgot from './component/signup_login/forgot.jsx'
import Admin from './pages/admin/admin.jsx'
import Admin_User from './pages/admin/admin_user.jsx'
import Admin_Inquiry from './pages/admin/admin_inquiry.jsx'
import Admin_Selling_Car from './pages/admin/admin_sell_car.jsx'
import Admin_New_Car from './pages/admin/admin_new_car.jsx'
import Add_New_Car from './pages/admin/add_new_car.jsx'
import Admin_propular_car from './pages/admin/admin_propular_car.jsx'
import Add_propular_car from './pages/admin/add_popular_car.jsx'
import Car_Details from './component/details/car_details.jsx'
import Varius_car_main from './pages/varius_car/varius_car_main.jsx'
import Sedan_car_details from './component/details/sedan_car_details.jsx'
import Family_car_details from './component/details/family_car_details.jsx'
import Hatchback_car_details from './component/details/hatchback_car_details.jsx'
import Hybrid_car_details from './component/details/hybrid_car_details.jsx'
import Luxury_car_details from './component/details/Luxury_car_details.jsx'
import Offroad_car_details from './component/details/Offroad_car_details.jsx'
import Super_car_details from './component/details/super_car_details.jsx'
import Suv_car_details from './component/details/Suv_car_details.jsx'
import Popular_car_details from './component/details/popular_car_details.jsx'
import Po_car_details from './component/details/po_car_details.jsx'
import Admin_signup from './pages/admin_sign&log/signup.jsx'
import Admin_Login from './pages/admin_sign&log/login.jsx'
import Website_Login from './pages/signup_login_web/login_website.jsx'
import Website_sign from './pages/signup_login_web/signup_website.jsx'
import User_profile from './pages/user_profile/user_profile.jsx'
import Cart from './component/cart/cart.jsx'
import User_profile_details from './pages/user_profile/user_about.jsx'
import Buycar_saidbar from './component/details/buy_car_saidbar.jsx'
import User_buy_car from './pages/admin/user_buy_car.jsx'







function App() {

  // const navigate = useNavigate()
  // useEffect(() => {
  //   if (!localStorage.getItem('token_of_user')) {
  //     navigate('/Website_Login')
  //   }
  // }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/sell" element={<Sell />} />
        <Route path='/McLaren' element={<McLaren />} />
        <Route path='/About' element={<About />} />
        <Route path='/Aston_Martin' element={<Aston_Martin />} />
        <Route path='/Bugatti' element={<Bugatti />} />
        <Route path='/Audi' element={<Audi />} />
        <Route path='/Bmw' element={<Bmw />} />
        <Route path='/Mercedes' element={<Mercedes />} />
        <Route path='/Jaguar' element={<Jaguar />} />
        <Route path='/Toyota' element={<Toyota />} />
        <Route path='/Land_rover' element={<Land_rover />} />
        <Route path='/Volvo' element={<Volvo />} />
        <Route path='/Lexus' element={<Lexus />} />
        <Route path='/Ferrari' element={<Ferrari />} />
        <Route path='/Lamborghini' element={<Lamborghini />} />
        <Route path='/Porsche' element={<Porsche />} />
        <Route path='/Rolls_royce' element={<Rolls_royce />} />
        <Route path='/Bentley' element={<Bentley />} />
        <Route path='/Maserati' element={<Maserati />} />
        <Route path='/Mini' element={<Mini />} />
        <Route path='/Jeep' element={<Jeep />} />
        <Route path='/Nissan' element={<Nissan />} />
        <Route path='/Pagani' element={<Pagani />} />
        <Route path='/Koenigsegg' element={<Koenigsegg />} />
        <Route path='/Gmc' element={<Gmc />} />
        <Route path='/Car_Details/:id' element={<Car_Details />} />
        <Route path='/Popular_car_details/:id' element={<Popular_car_details />} />
        <Route path='/Varius_car_main' element={<Varius_car_main />} />
        <Route path='/Sedan_car_details' element={<Sedan_car_details />} />
        <Route path='/Family_car_details' element={<Family_car_details />} />
        <Route path='/Hatchback_car_details' element={<Hatchback_car_details />} />
        <Route path='/Hybrid_car_details' element={<Hybrid_car_details />} />
        <Route path='/Luxury_car_details' element={<Luxury_car_details />} />
        <Route path='/Offroad_car_details' element={<Offroad_car_details />} />
        <Route path='/Super_car_details' element={<Super_car_details />} />
        <Route path='/Suv_car_details' element={<Suv_car_details />} />
        <Route path='/Po_car_details' element={<Po_car_details />} />
        <Route path='/Website_Login' element={<Website_Login />} />
        <Route path='/Website_sign' element={<Website_sign />} />
        <Route path='/User_profile' element={<User_profile />} />
        <Route path='/User_profile_details' element={<User_profile_details />} />
        <Route path='/User_profile/:activepages' element={<User_profile />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Buycar_saidbar' element={<Buycar_saidbar />} />
        <Route path='/User_buy_car/:id' element={<User_buy_car />} />
        
        {/* <Route path='/Forgot_password' element={<Forgot />} /> */}
        {/* <Route path='/Admin_ex' element={<Admin_ex />} /> */}
        {/* <Route path='/signup_login' element={<signup_login />} /> */}
        <Route path='/signup' element={<Admin_signup />} />
        <Route path='/Admin_Login' element={<Admin_Login />} />
        <Route path='/Admin' element={<Admin />} />
        <Route path='/Admin_User' element={<Admin_User />} />
        <Route path='/Admin_Inquiry' element={<Admin_Inquiry />} />
        <Route path='/Admin_Selling_Car' element={<Admin_Selling_Car />} />
        <Route path='/Admin_New_Car' element={<Admin_New_Car />} />
        <Route path='/Add_New_Car' element={<Add_New_Car />} />
        <Route path='/Admin_propular_car' element={<Admin_propular_car />} />
        <Route path='/Add_propular_car' element={<Add_propular_car />} />
      </Routes>
    </>
  )
}



export default App
