import React, { useState } from 'react';

const boys = {
    parent: null,
    items: [
        {
            name: 'cars',
            subCategories: {
                parent: null,
                items: []
            }
        },
        {
            name: 'spider man',
            subCategories: {
                parent: null,
                items: []
            }
        }
    ]
};

boys.items[0].subCategories.parent = boys;
boys.items[1].subCategories.parent = boys;

const root = {
    parent: null,
    items: [
        {
            name: 'boys',
            subCategories: boys
        },
        {
            name: 'girls',
            subCategories: {
                parent: null,
                items: []
            }
        }
    ]
};

root.items[1].subCategories.parent = root;

root.parent = root;
boys.parent = root;

function Categories() {
    const [current, setCurrent] = useState(root);

    return (
        <div>
            {current.items.map((category, i) => (
                <div key={i}>
                    <button onClick={() => setCurrent(category.subCategories)} >{category.name}</button>
                </div>))
            }
            <br />
            <br />
            <button onClick={() => setCurrent(current.parent)}>go back</button>
        </div >
    );
}

export default Categories;
