import PropTypes from 'prop-types'


const WantToCook = ({card,preparing}) => {
    
    const {recipe_name,preparing_time,calories} = card;
    
 


    return (
        <div className=" flex gap-14 items-center justify-around bg-gray-100 my-8 py-4  ">
                 <div> <p className=" opacity-70">{recipe_name}</p> </div>
                 <div> <p className=" opacity-70">{preparing_time}</p></div>
                 <div>  <p className=" opacity-70">{calories}</p></div>
                 <div>  <button onClick={() => preparing(card)} className="btn bg-green-400 rounded-full ">Preparing</button></div>
        </div>
    );
};

WantToCook.propTypes = {
    card : PropTypes.object,
    preparing:PropTypes.func
}

export default WantToCook;

