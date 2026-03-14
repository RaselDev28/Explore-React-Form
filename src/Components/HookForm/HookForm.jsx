import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, nameOnchange] = useInputField('');
    const [email, emailChange] = useInputField('')
    const handleSubmit = e => {
        e.preventDefault();
        console.log('submited', name, email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnchange} />
                <br />
                <input defaultValue={email} type="email" name="email" onChange={emailChange} />
                <br />
                <input type="submit" value="Submited" />
            </form>
        </div>
    );
};

export default HookForm;