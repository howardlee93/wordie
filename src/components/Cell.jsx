import {addLetter} from '../redux/wordSlice';
import { useDispatch } from 'react-redux';


const Cell = () =>{ 
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        console.log(e.target.value)
        dispatch(addLetter(e.target.value));

    };

    return(
        <input onKeyPress={handleSubmit}/>
    )
}

export default Cell;