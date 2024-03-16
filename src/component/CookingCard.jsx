import CurrentlyCooking from "./CurrentlyCooking";
import WantToCook from "./WantToCook";


const CookingCard = () => {
    return (
        <div className="pt-6 border-2 rounded-3xl w-4/12" >

            <div>
                <h1 className="border-b-2 text-2xl font-semibold pb-4  text-center mb-6">Want to cook : 01</h1>
           
                <div className="flex gap-20 ml-6 opacity-60 text-lg">
                  <h1>Name</h1>
                  <h1>Time</h1>
                   <h1>Caloris</h1>
                </div>
                <WantToCook/>
                
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

export default CookingCard;