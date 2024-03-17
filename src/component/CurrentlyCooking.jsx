import PropTypes from 'prop-types'
import { useEffect } from 'react';

const CurrentlyCooking = ({card,setTime,index}) => {
    let count = index + 1;
    const {recipe_name,preparing_time,calories} = card; 

    useEffect(()=>{
      return  setTime(preparing_time,calories)
    },[])



    return (
        
        <table className='bg-gray-100 my-8 w-full'>
            <tbody>
                 <tr>
                   <td className='text-xl pl-4 py-8 font-semibold'>{count}</td>
                   <td className='pl-4'>{recipe_name} </td>
                   <td className='pr-10'>{preparing_time}</td>
                   <td className='pl-8'>{calories}</td>
                   
                </tr>   
            </tbody>
        </table>
    );
};

CurrentlyCooking.propTypes ={
    card:PropTypes.object,
    setTime:PropTypes.func,
    index:PropTypes.number
}

export default CurrentlyCooking;