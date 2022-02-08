
import Key from './Key';


const Keyboard = ()=>{

    return(
        <div>
            <div>
            <div className="flex justify-center mb-1">
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                    // <p key={key}>{key}</p>
                    <Key key={key} letter={key}/>

                ))}
            </div>
            <div className="flex justify-center mb-1">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                    // <p key={key}>{key}</p>
                    <Key key={key} letter={key}/>

                ))} 
            </div>
             <div className="flex justify-center">
                {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    // <p key={key}>{key}</p>
                    <Key key={key} letter={key}/>
                ))}        
            </div>
            </div>
        </div>
    )

};


export default Keyboard;