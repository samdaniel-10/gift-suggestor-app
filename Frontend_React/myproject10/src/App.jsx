import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Birthday from './assets/app10/Birthday'
import Wedding from './assets/app10/Wedding'
import Homepage from './assets/app10/Homepage'
import ForgotPassword from './assets/app10/ForgotPassword'
import Login from './assets/app10/Login'
import Register from './assets/app10/Register'
import BirthdayGift from './assets/app10/BirthdayGift'
import WeddingGift from './assets/app10/WeddingGift'
import Housewarming from './assets/app10/Housewarming'
import HousewarmingGift from './assets/app10/HousewarmingGift'
import Anniversary from './assets/app10/Anniversary'
import AnniversaryGift from './assets/app10/AnniversaryGift'
import Babyshower from './assets/app10/Babyshower'
import BabyshowerGift from './assets/app10/BabyshowerGift'
import FarewellRetirement from './assets/app10/FarewellRetirement'
import FarewellRetirementGift from './assets/app10/FarewellRetirementGift'

const App = () =>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/login" replace />} />

          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/homepage' element={<Homepage/>} />

          <Route path='/birthday' element={<Birthday/>} />
          <Route path='/birthdaygift' element={<BirthdayGift/>}/>

          <Route path='/wedding' element={<Wedding/>}></Route>
          <Route path='/weddinggift' element={<WeddingGift/>}></Route>

          <Route path='/housewarming' element={<Housewarming/>}/>
          <Route path='/housewarminggift' element={<HousewarmingGift/>}></Route>

          <Route path='/anniversary' element={<Anniversary/>}/>
          <Route path='/anniversarygift' element={<AnniversaryGift/>}></Route>

          <Route path='/babyshower' element={<Babyshower/>}/>
          <Route path='/babyshowergift' element={<BabyshowerGift/>} />

          <Route path='/farewellretirement' element={<FarewellRetirement/>} />
          <Route path='/farewellretirementgift' element={<FarewellRetirementGift/>} />


        </Routes>
           
      </BrowserRouter> 
       

       

      

    </>
  )
}

export default App
