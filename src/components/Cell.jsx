import {addLetter, removeLetter} from '../redux/wordSlice';
import { useDispatch } from 'react-redux';


const Cell = () =>{ 
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        console.log(e.target.value)
        dispatch(addLetter(e.target.value));
        // if(e.target.value == ""){
        //     dispatch(removeLetter)
        // }
    };

    return(

        <div className="border-2">cell value</div>
    )
}

export default Cell;