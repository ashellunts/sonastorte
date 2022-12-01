import React from 'react';
import { useState } from 'react';
import Decor from './Decor';

function DecorsExplorer({ decorsList }) {

    if (decorsList === undefined)
        return null;

    const [selectedTag, setSelectedTag] = useState('')

    const filtered = decorsList.filter(decor => selectedTag.length == 0 || decor.tags.includes(selectedTag))

    const allTags = []
    for (const decor of decorsList)
        for (const tag of decor.tags)
            if (!allTags.includes(tag))
                allTags.push(tag)

    const allTagsView = allTags.map((tag, i) => (
        <button key={i} onClick={() => setSelectedTag(tag)} > {tag} </button>
    ))

    return (
        <div>
            <button onClick={() => setSelectedTag('')} > сбросить </button>
            {allTagsView}
            <p><i>selected tag</i> {selectedTag}</p>
            {filtered.map((decor, index) => <Decor key={index} data={decor} />)}
        </div>
    )
}

export default DecorsExplorer
