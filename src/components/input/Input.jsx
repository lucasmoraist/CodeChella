import React from "react";

const Input = ({tipo}) => {
    return(
        <div>
            <input type={tipo} required/>
        </div>
    )
}

export default Input;