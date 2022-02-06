// import Cell from './Cell';
import Row from './Row';


const main = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    border: '1px',
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    margin: '1px'
}

const Grid =() =>{

    const createRows =()=> {
        let rows =[];
        for (let i = 0; i < 5; i++){
            rows.push(<Row/>)
        }
        return rows;
    };

    return(
        <div style={main}>
            {createRows()}
        </div>
    )
    
};

export default Grid;