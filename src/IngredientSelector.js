import React from 'react';

function IngredientSelectorPage(ingredients, chosenIngredient, setChosenIngredient) {
    return (
        <div>
            <div>
                <h2>{ingredients.name}</h2>
                {ingredients.items.map((filling, index) => (
                    <button key={index} onClick={() => setChosenIngredient(filling)}>{filling}</button>
                ))}
            </div>
        </div>
    );
}

export default IngredientSelectorPage
