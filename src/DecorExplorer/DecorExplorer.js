import React from 'react';

function DecorsExplorer({ decorsList }) {
    return (
        <div>
            {decorsList.map((decor, index) => (
                <div key={index}>
                    <b>{decor.name}</b>
                    <Tags tagList={decor.tags} />
                    <br />
                </div>
            ))}
        </div>
    )
}

function Tags({ tagList }) {
    return (
        <div>
            {tagList.map((tagName, index) => (
                <i key={index}>#{tagName} </i>
            ))}
        </div>
    )
}

export default DecorsExplorer
