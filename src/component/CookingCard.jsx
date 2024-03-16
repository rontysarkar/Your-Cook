import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";
import PropTypes from 'prop-types'


const CookingCard = ({cards}) => {
   

    
    return (
        <div className="pt-6 border-2 rounded-3xl w-4/12" >

            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Want to cook : {cards.length}</h1>
           
                <div className="flex gap-20 ml-6 opacity-60 text-lg mb-8">
                  <h1>Name</h1>
                  <h1>Time</h1>
                   <h1>Caloris</h1>
                </div>
                {
                    cards.map(card=> <WantToCook key={card['recipe_id']} /> )
                }

            </div>
             
                  
            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Currently cooking: 02</h1>
           
                <table className="table-fixed">
                    <thead>
                        <tr className="flex gap-28 ml-8 opacity-60 text-lg">
                            <th>Name</th>
                            <th>Time</th>
                            <th>calories</th>
                         </tr>
                    </thead>
               <tbody>
                    <CurrentlyCooking/>
   
               </tbody>
          </table>
            </div>
        </div>
    );
};

CookingCard.propTypes = {
    cards:PropTypes.array
}

export default CookingCard;