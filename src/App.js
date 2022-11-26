import React from 'react';
import { useState } from 'react'

const fillings = {
    name: 'Начинки',
    items: [
        'клюква',
        'малина',
        'клубника',
        '🍫'
    ]
}

const fillings2 = {
    name: 'Бисквит',
    items: [
        '🍫',
        'белый',
        'фисташка'
    ]
}

const fillings3 = {
    name: 'Крем',
    items: [
        '🍫',
        'клубничный',
        'малиновый'
    ]
}

const ingredients = [fillings, fillings2, fillings3]

function IngredientSelector(ingredients, chosenIngredient, setChosenIngredient) {
    return (
        <div>
            <div>
                <h2>{ingredients.name}</h2>
                {
                    ingredients.items.map((filling, index) => (
                        <button key={index} onClick={() => setChosenIngredient(filling)}>{filling}</button>
                    ))
                }
            </div>
            <p>Выбранный ингредиент: {chosenIngredient}</p>
        </div>
    )
}

function App() {
    const [chosenIngredients, setChosenIngredients] = useState([])
    const [currentIngredient, setCurrentIngredient] = useState(-2)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')


    function setChosenIngredient(index) {
        return (chosenIngredient) => {
            const newChosenIngredients = chosenIngredients.slice()
            newChosenIngredients[index] = chosenIngredient
            setChosenIngredients(newChosenIngredients)
            next()
        }
    }

    function next() {
        if (currentIngredient !== ingredients.length) {
            setCurrentIngredient(currentIngredient + 1)
        }
    }

    function back() {
        if (currentIngredient !== -2) {
            setCurrentIngredient(currentIngredient - 1)
        }
    }

    return (
        <div>
            {currentIngredient >= 0 ?
                <div>
                    <b> Выбранные игредиенты </b>
                    {
                        ingredients
                            .map((ingredient, index) =>
                                <div key={index}>
                                    <i>{ingredient.name}:</i> {chosenIngredients[index]}
                                </div>
                            )
                    }
                </div>
                : null
            }
            {currentIngredient === ingredients.length
                ?
                <div>
                    <p><b>Ваше имя:</b> {name}</p>
                    <p><b>Адрес:</b> {address}</p>
                </div>
                : currentIngredient === -2
                    ?
                    <div>
                        <p>Ваше имя</p>
                        <input value={name} onChange={event => { setName(event.target.value) }} />
                        <button onClick={() => { next() }} >далее</button>
                    </div>
                    : currentIngredient === -1
                        ?
                        <div>
                            <p>Адрес</p>
                            <input value={address} onChange={event => { setAddress(event.target.value) }} />
                            <button onClick={() => { next() }} >далее</button>
                        </div>
                        : IngredientSelector(
                            ingredients[currentIngredient],
                            chosenIngredients[currentIngredient],
                            setChosenIngredient(currentIngredient))
            }
            {currentIngredient !== -2
                ? <button onClick={() => { back() }}>назад</button>
                : null
            }
            {/* {currentIngredient !== ingredients.length
                ? <button onClick={() => { next() }} >далее</button>
                : null
            } */}
        </div>
    )
}

export default App
