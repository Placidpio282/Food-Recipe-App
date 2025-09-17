import React from 'react'
import HomeFood from '../assets/HomeFood.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import RecipeItems from '../components/RecipeItems'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'




export default function Home() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const addRecipe = () => {
    let token = localStorage.getItem("token")
    if (token)
      navigate("/addRecipe")
    else {
      setIsOpen(true)
    }

  }


  return (
    <>

      <section className='home'>
        <div className='left'>
          <h1>Food Recipe</h1>
          <h5><big>D</big>iscover simple and tasty food recipes made for everyday cooking.We share easy step-by-step recipes with common ingredients found at home.From breakfast to dinner, you will find dishes that are quick, healthy, andfull of flavor. Our goal is to make cooking fun and simple for everyone.Try new recipes, enjoy homemade meals, and bring more happiness to your kitchen.</h5>
          <button onClick={addRecipe}>Share your recipes</button>
        </div>
        <div className='right'>
          <img src={HomeFood} width="350px" height="355px"></img>
        </div>
      </section>
      <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E23744" fillOpacity="1" d="M0,128L40,122.7C80,117,160,107,240,117.3C320,128,400,160,480,154.7C560,149,640,107,720,96C800,85,880,107,960,133.3C1040,160,1120,192,1200,208C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </div>
      {(isOpen) && <Modal onClose={() => setIsOpen(false)}><InputForm setIsOpen={() => setIsOpen(false)} /></Modal>}
      <div className='recipe'>
        <RecipeItems />
      </div>



    </>


  )
}


