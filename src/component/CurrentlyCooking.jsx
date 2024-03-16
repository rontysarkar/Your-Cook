import PropTypes from 'prop-types'
import { useEffect } from 'react';

const CurrentlyCooking = ({card,setTime}) => {
    const {recipe_name,preparing_time,calories} = card; 

    useEffect(()=>{
        setTime(preparing_time,calories)
    },[])

    return (
        <div className=" flex gap-14 items-center justify-around bg-gray-100 my-8 py-6 rounded-full ">
            <div> <p className=" opacity-70">{recipe_name}</p> </div>
            <div> <p className=" opacity-70">{preparing_time}</p></div>
            <div>  <p className=" opacity-70">{calories}</p></div>
            
        </div>
    );
};

CurrentlyCooking.propTypes ={
    card:PropTypes.object,
    setTime:PropTypes.func
}

export default CurrentlyCooking;