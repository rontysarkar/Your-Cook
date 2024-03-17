
import { useEffect, useState } from 'react'
import './App.css'
import CookingCard from './component/CookingCard'
import NavBar from './component/NavBar'
import RecipeCard from './component/RecipeCard'

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
   
  const [recipeCard, setRecipeCard] = useState([])
  const [cards,setCards] = useState([])
  const [addCooking,setAddCooking] = useState([])

  useEffect(() =>{
    fetch('Items.json')
     .then(res=> res.json())
     .then(data=> setRecipeCard(data) )
  },[])


  // Want TO Cook function 


  const handleWantToCook = (card) =>{
  
    const remainingCard = cards.find(c => c['recipe_id'] == card['recipe_id'])
    
    if(!remainingCard){
      setCards([...cards,card])
      
    }
   else{
    toast.error( 'Already exist')
   }
  }

  const preparing = (card) =>{
    // remove card form want to cook section 

     const remainingCard =  cards.filter(c => c['recipe_id'] != card['recipe_id'] )
     setCards([...remainingCard])

    //  add card form currently cooking section 

    setAddCooking([...addCooking,card])

  }




  return (
    <>
      <header className='container mx-auto lg:px-32 lg:py-10'>
      <NavBar></NavBar>
      </header>
      <main className='container mx-auto lg:px32 py-10 '>
        <div className="bg-img h-40 md:h-80 lg:h-[550px] my-8 bg-no-repeat bg-center bg-contain flex flex-col justify-center items-center ">
            <h1 className='text-sm md:text-lg xl:text-4xl text-center font-bold  text-white w-1/2  '>Discover an exceptional cooking class tailored for you!</h1>
            <p className='text-sm w-1/2 mx-auto text-center py-4 text-gray-300 hidden lg:flex'>Embark on a culinary adventure designed just for you with our exceptional cooking class. Whether you re a novice or a seasoned chef, our expert instructors will tailor the experience to your specific interests, dietary requirements, and skill level</p>
            <div>
              <button className="btn rounded-full bg-green-400 border-none font-bold mr-4">Explore Now</button>
              <button className="btn rounded-full bg-transparent text-white lg:font-bold ">Our Feedback</button>
            </div>
        </div>

      </main>

      <main className='container mx-auto lg:32 '>
      <div className='text-center py-12 '>
          <h1 className="text-4xl font-bold ">Our Recipes</h1>
          <p className='w-1/2 mx-auto py-4 text-gray-600 hidden md:flex'>In our restaurant, recipes are the cornerstone of our culinary journey. Each dish on our menu is crafted with meticulous attention to detail,</p>

        </div>

      <div className='flex flex-col gap-6 lg:flex-row'>
          {/*  Recipe Card  */}

      <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-7/12 gap-4'>
        
        {
          recipeCard.map(card => <RecipeCard key={card['recipe_id']} card = {card} handleWantToCook={handleWantToCook} />)
        }
      </div>
          {/* cooking card  */}
      <CookingCard addCooking={addCooking} preparing= {preparing} cards={cards}/>
      </div>
      </main>
    </>
  )
}

export default App
