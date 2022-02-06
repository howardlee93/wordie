import Cell from './Cell';



const cell ={
    margin: '5px'
}
const Row = () =>{
    const cellRows = () =>{
        let row = [];
        for(let i = 0; i < 5; i ++){
            row.push(<Cell style={cell} key={i}/>)
        }
        return row;
    }
    return(
        <div>
            {cellRows()}
        </div>
    )
}

export default Row;
