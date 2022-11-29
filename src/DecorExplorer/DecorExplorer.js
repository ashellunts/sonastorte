import React from 'react';
import Decor from './Decor';

function DecorsExplorer({ decorsList }) {
    return (
        <div>
            {decorsList.map((decor, index) => <Decor key={index} decor={decor} />)}
        </div>
    )
}

export default DecorsExplorer
