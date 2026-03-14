import React, { useState } from 'react';

const ControllField = () => {

    const [password, setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }

    const handlePasswordOnChange=e=>{
        console.log(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" id="" placeholder='email' required />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange } defaultValue={password} id="" placeholder='Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControllField;