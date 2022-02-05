import Cell from './Cell';


const Row = () =>{
    const cellRows = () =>{
        let row = [];
        for(let i = 0; i <4; i ++){
            row.push(<Cell key={i}/>)
        }
        return row;
    }
    return(
        <>
            {cellRows()}
        
        </>
    )
}

export default Row;
