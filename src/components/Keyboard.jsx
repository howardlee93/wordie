
import Key from './Key';

const Keyboard = ()=>{


    return(
        <div>
            <div>
            <div className="flex justify-center mb-1">
                {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
                <Key
                    // value={key}
                    // key={key}
                    // onClick={onClick}
                    // status={charStatuses[key]}
                    // isRevealing={isRevealing}
                />
                ))}
            </div>
            <div className="flex justify-center mb-1">
                {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
                <Key
                    // value={key}
                    // key={key}
                    // onClick={onClick}
                    // status={charStatuses[key]}
                    // isRevealing={isRevealing}
                />
                ))}
            </div>
                <div className="flex justify-center">
                    <Key width={65.4} value="ENTER" onClick={onClick}>
                    {ENTER_TEXT}
                    </Key>
                    {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
                    <Key
                        // value={key}
                        // key={key}
                        // onClick={onClick}
                        // status={charStatuses[key]}
                        // isRevealing={isRevealing}
                    />
                    ))}
                    {/* <Key width={65.4} value="DELETE" onClick={onClick}> */}
                    {DELETE_TEXT}
                    </Key>
                </div>
            </div>
        </div>
    )

};


export default Keyboard;