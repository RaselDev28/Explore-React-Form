import React from 'react';
import Special from './special';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
           <section>
            <Special asset={asset}></Special>
           </section>
        </div>
    );
};

export default Myself;