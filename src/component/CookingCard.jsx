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
        <div className="pt-6 border-2 rounded-3xl w-11/12 mx-auto lg:w-5/12" >

            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Want to cook : {cards.length}</h1>
           
                <table className="mb-8">
                    <thead>
                        <tr className="text-xl opacity-60 ">
                             <th colSpan={2} className="px-4 xl:px-14">Name</th>
                             <th className="px-4 xl:px-14">Time</th>
                             <th className="px-4 xl:px-14">Calories</th>
                        </tr>
                    </thead>
                </table>

                {
                    cards.map((card,index)=>  <WantToCook  index={index} key={index} card={card} preparing={preparing} />  )
                }
            </div>
                  
            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Currently cooking: { addCooking.length}</h1>
           
                <section className="table-fixed">

                <table>
                    <thead>
                        <tr className="text-xl opacity-60 mb-8 ">
                             <th  className="px-7 xl:px-16">Name</th>
                             <th className="px-7 xl:px-16">Time</th>
                             <th className="px-7 xl:px-16">Calories</th>
                        </tr>
                    </thead>

                </table>

                <div>
                    {
                      addCooking.map((card,index)=> <CurrentlyCooking key={index} index={index}  card = {card} setTime={setTime} />  )
                    }

                    <div className="flex justify-evenly  opacity-70 py-10">
                        <h1 className="lg:text-xl">Total Time = {totalTime} min </h1>
                        <h1 className="lg:text-xl">Total Calories = {totalCalories} calories</h1>
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