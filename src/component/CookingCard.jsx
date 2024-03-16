import { useState } from "react";
import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";
import PropTypes from 'prop-types'



const CookingCard = ({cards,preparing,addCooking}) => {

    const [totalTime,setTotalTime] = useState(0);
    const [totalCalories,setTotalCalories] = useState(0)

    const setTime = (time,calorie) =>{
        const [times] = time.split(' ')
        const [calories] = calorie.split(' ')

        setTotalTime( totalTime + parseInt(times))
        setTotalCalories( totalCalories + parseInt(calories))

        
        
    }
   
    
    return (
        <div className="pt-6 border-2 rounded-3xl w-5/12" >

            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Want to cook : {cards.length}</h1>
           
                <div className="flex gap-32 ml-14 opacity-60 text-lg mb-8">
                  <h1>Name</h1>
                  <h1>Time</h1>
                   <h1>Caloris</h1>
                </div>
                
                <ol className="list-decimal ml-8 ">
                {
                    cards.map(card=> <li key={card['recipe_id']} > <WantToCook  card={card} preparing={preparing} /> </li> )
                }
                </ol>
                

            </div>
             
                  
            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Currently cooking: { addCooking.length}</h1>
           
                <section className="table-fixed">
                    <div>
                        <div className="flex gap-28 ml-8 opacity-60 text-lg">
                            <h1>Name</h1>
                            <h1>Time</h1>
                            <h1>calories</h1>
                         </div>
                    </div>
               <div>
               <ol className="list-decimal ml-8 ">
                {
                    addCooking.map(card=> <li key={card['recipe_id']}> <CurrentlyCooking  card = {card} setTime={setTime} /> </li> )
                }
                </ol>
                <div className="flex justify-evenly  opacity-70 py-10">
                    <h1 className="text-xl">Total Time = {totalTime} min </h1>
                    <h1 className="text-xl">Total Calories = {totalCalories} calories</h1>
                </div>
               </div>
          </section>
            </div>
        </div>
    );
};

CookingCard.propTypes = {
    cards:PropTypes.array,
    preparing:PropTypes.func,
    addCooking:PropTypes.array
}

export default CookingCard;