import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({ asset }) => {
    const newContext = useContext(AssetContext);
    return (
        <div>
            <h3>Special</h3>
            <p>Asset: {asset}</p>
            <p>{newContext}</p>
        </div>
    );
};

export default Special;