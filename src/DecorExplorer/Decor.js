import React from 'react';

function Decor({ data }) {
    return (
        <div className='decor'>
            <b>{data.name}</b>
            <Tags tagList={data.tags} />
            <br />
        </div>
    );
}

function Tags({ tagList }) {
    return (
        <div>
            {tagList.map((tagName, index) => (
                <i key={index}>#{tagName} </i>
            ))}
        </div>
    );
}

export default Decor
