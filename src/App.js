import { useState } from 'react'

const fillings = {
    name: "Начинки",
    items: [
        'клюква',
        'малина',
        'клубника'
    ]
}

const fillings2 = {
    name: "Начинки 2",
    items: [
        'клюква 1',
        'малина 1',
        'клубника 1'
    ]
}

const ingredients = [fillings, fillings2]

function Ingredients(data, ingredientChosen) {
    return (
        <>
            <h1>{data.name}</h1>
            {
                data.items.map(filling => (
                    <button onClick={() => ingredientChosen(filling)}>{filling}</button>
                ))
            }
        </>
    )
}

function App() {
    const [chosenIngredient, setChosenIngredient] = useState('')

    function ingredientChosen(ingredient) {
        setChosenIngredient(ingredient)
    }

    return (
        <div>
            {Ingredients(ingredients[0], ingredientChosen)}
            <p>Выбранный ингредиент: {chosenIngredient}</p>
        </div >
    )
}

export default App;
