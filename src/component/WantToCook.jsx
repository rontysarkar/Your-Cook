import PropTypes from 'prop-types'


const WantToCook = ({card,preparing,index}) => {
    let count = 1 + index
    
    const {recipe_name,preparing_time,calories} = card;
    
 


    return (
        
        <table className='bg-gray-100 my-8 w-full'>
            <tbody>
                 <tr>
                   <td className='text-xl pl-4 py-8 font-semiboldbold'>{count}</td>
                   <td className='pl-4'>{recipe_name} </td>
                   <td className='pl-10'>{preparing_time}</td>
                   <td className='pl-8'>{calories}</td>
                   <td><button onClick={() => preparing(card)} className="btn bg-green-400 rounded-full ">Preparing</button></td>
                </tr>   
            </tbody>
        </table>
    );
};

WantToCook.propTypes = {
    card : PropTypes.object,
    preparing:PropTypes.func,
    index:PropTypes.number
}

export default WantToCook;

