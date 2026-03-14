import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Rahim'></Cousin>
                <Cousin name='Karim'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;