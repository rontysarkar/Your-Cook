import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";
import PropTypes from 'prop-types'


const CookingCard = ({cards,preparing}) => {
   
    
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
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Currently cooking: 02</h1>
           
                <section className="table-fixed">
                    <div>
                        <div className="flex gap-28 ml-8 opacity-60 text-lg">
                            <h1>Name</h1>
                            <h1>Time</h1>
                            <h1>calories</h1>
                         </div>
                    </div>
               <div>
                    <CurrentlyCooking/>
   
               </div>
          </section>
            </div>
        </div>
    );
};

CookingCard.propTypes = {
    cards:PropTypes.array,
    preparing:PropTypes.func
}

export default CookingCard;