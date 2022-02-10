import React from "react";

const Cell = ({letter}) =>{ 
    return(
        <div className="border-2 flex-row">
            <p>{letter}</p>
        </div>
    )
}

export default Cell;