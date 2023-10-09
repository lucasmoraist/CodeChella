import React from "react";

const DropIngresso = ({ value, setValue }) => {
    return (
        <div>
            <select value={value} onChange={(e) => { setValue(e.target.value) }}>
                <option selected disabled>Tipo de Ingresso</option>
                <option value="Pista comum">Pista comum</option>
                <option value="Pista premium">Pista premium</option>
                <option value="Cadeira inferior">Cadeira inferior</option>
                <option value="Cadeira superior">Cadeira superior</option>
            </select>
        </div>
    )
}

const DropDiaFestival = ({ value, setValue }) => {
    return (
        <div>
            <select value={value} onChange={(e) => { setValue(e.target.value) }}>
                <option selected disabled>Escolha seu dia</option>
                <option value="11/03">11/03</option>
                <option value="12/03">12/03</option>
            </select>
        </div>
    )
}

export { DropDiaFestival, DropIngresso };