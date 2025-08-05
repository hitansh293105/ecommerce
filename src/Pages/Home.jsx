import React from 'react'
import HomeBanner from '../component/HomeBanner'
import { useSelector } from 'react-redux'
import Footer from '../component/Footer';

const Home = () => {

  const isAuth = useSelector((state) =>state.auth.isLoggedIn);
  const res = useSelector((state)=> state.auth.auth);

  console.log(isAuth);
  console.log(res);

  return (
    <div>

        <HomeBanner/>
        <Footer/>

      
    </div>
  )
}

export default Home
