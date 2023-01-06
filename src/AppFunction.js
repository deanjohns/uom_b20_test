import AppFunctionInput from "./AppFunctionInput";
import React, { useState, useEffect } from "react";

const AppFunction = () => {

    const [name, setName] = useState("");

    const changeName = (e) => {
        const value = e.target.value;
        setName(value)
    }

    useEffect(() => {
        setName("My default Function name");
    }, [])

    return (
        <div className='app_main'>
            <h1 className='app_header'>{name}</h1>
            <AppFunctionInput name={name} changeName={changeName} />
        </div>
    )
}

export default AppFunction;