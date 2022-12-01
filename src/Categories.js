import React, { useState } from 'react';
import DecorExplorer from './DecorExplorer/DecorExplorer'

const boys = {
    name: 'boys',
    parent: null,
    subcategories: [
        {
            name: 'cars',
            parent: null,
            subcategories: []
        },
        {
            name: 'spider man',
            parent: null,
            subcategories: []
        }
    ]
};

boys.subcategories[0].parent = boys;
boys.subcategories[1].parent = boys;

const decorsList = [
  {
    name: "русалка",
    tags: ["девочка"]
  },
  {
    name: "машинки",
    tags: ["мальчик"]
  },
  {
    name: "футбол",
    tags: ["мальчик"]
  },
  {
    name: "дисней",
    tags: ["девочка"]
  }
]

const root = {
    name: "root",
    parent: null,
    subcategories: [
        boys,
        {
            name: 'girls',
            parent: null,
            decorsList: decorsList
        }
    ]
};

root.subcategories[1].parent = root;
boys.parent = root;

function Categories() {
    const [current, setCurrent] = useState(root);

    let backButton = null;
    if (current.parent !== null)
        backButton = <button onClick={() => setCurrent(current.parent)}>go back</button>;

    let subCategories = null;
    if (current.subcategories !== undefined)
        subCategories = current.subcategories.map((category, i) => (
            <div key={i}>
                <button onClick={() => setCurrent(category)}>{category.name}</button>
            </div>
        ));

    return (
        <div>
            {subCategories}
            {backButton}
            <DecorExplorer decorsList={current.decorsList} />
        </div >
    );
}

export default Categories;
