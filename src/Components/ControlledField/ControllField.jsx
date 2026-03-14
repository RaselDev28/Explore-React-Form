import React, { useState } from 'react';

const ControllField = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setPasswordError('Password Must be Six Characters')
        }
        else {
            setPasswordError('')
        }

    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length < 6) {
            setPasswordError('Password Must be Six Characters')
        }
        else {
            setPasswordError('')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmailChange} defaultValue={email} name="email" id="" placeholder='email' required />
                <br />
                <input type="password" name="password" onChange={handlePasswordOnChange} defaultValue={password} id="" placeholder='Password' required />
                <br />
                <p style={{ color: 'red' }}><small>{passwordError}</small></p>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControllField;