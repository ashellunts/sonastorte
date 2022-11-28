import React from 'react';

const decorsList = [
    "русалка",
    "машинки",
    "футбол",
    "дисней"
]

function DecorsExplorer() {
    return (
        <div>
            {decorsList.map((decor, index) => (
                <p key={index}>{decor}</p>
            ))}
        </div>
    )
}

export default DecorsExplorer
