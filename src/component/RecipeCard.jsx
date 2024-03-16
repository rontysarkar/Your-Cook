import { FaFire } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import PropTypes from 'prop-types';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeCard = ({card,handleWantToCook}) => {

   
    const {calories,preparing_time,short_description,recipe_name,recipe_image,ingredients} = card;

    
    return (
        <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="opacity-50">{short_description}</p>


          <div>
            <hr className="py-2" />
            <h1 className="text-xl font-medium">Ingredients: 6</h1>
             <ul className="list-disc pl-6 py-4 space-y-2 opacity-60 ">
                {
                    ingredients.slice(0,3).map((ing) => <li key={ing}>{ing}</li>)
                }
               
             </ul>
             <hr className="py-2" />
             <div className="flex gap-6 opacity-60 ">
                
             <div className="flex items-center gap-2">
                <MdAccessTime/>
                <h1>{preparing_time}</h1>
                </div>
             <div className="flex items-center gap-2">
                 <FaFire/>
                <h1>{calories}</h1>
                </div>

             </div>

          </div>  

          <div className="card-actions py-2">
            <button onClick={()=>handleWantToCook(card)} className="btn bg-green-400 rounded-full">Want to Cook</button>
            <ToastContainer />
          </div>
        </div>
    </div>
    );
};

RecipeCard.propTypes = {
    card:PropTypes.object,
    handleWantToCook:PropTypes.func
}

export default RecipeCard;