import React from 'react';

const decorsList = [
    {
        name: "русалка",
        tags: ["tag1", "tag2"]
    },
    {
        name: "машинки",
        tags: ["tag1"]
    },
    {
        name: "футбол",
        tags: ["tag1"]
    },
    {
        name: "дисней",
        tags: ["tag1"]
    }
]

function DecorsExplorer() {
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
