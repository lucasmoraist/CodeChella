import React from "react";

const Input = ({tipo, value, setValue}) => {
    return(
        <div>
            <input type={tipo} value={value} onChange={(e) => {setValue(e.target.value)}} required/>
        </div>
    )
}

export default Input;