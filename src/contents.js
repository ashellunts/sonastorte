import React from 'react';
import ingredients from './ingredients';
import IngredientSelectorPage from './IngredientSelector';
import pages from './ingredientsPage';

function contents(page, chosenIngredients, name, setName, next, setChosenIngredient, back) {
    return (
        <div>
            <ChosenIngredientsView chosenIngredients={chosenIngredients} />
            <PageView data={{page, name, setName, next, chosenIngredients, setChosenIngredient}} />
            <BackButton back={back} page={page}/>
        </div>
    )
}

function PageView({data}) {
    const {page, name, setName, next, chosenIngredients, setChosenIngredient} = data
    let pageContents = null;
    switch (page.name) {
        case pages.customerName:
            pageContents = customerNamePage(name, setName, next);
            break;
        case pages.reviewOrder:
            pageContents = reviewOrderPage(name);
            break;
        case pages.ingredients:
            pageContents = IngredientSelectorPage(
                ingredients[page.index],
                chosenIngredients[page.index],
                setChosenIngredient(page.index));
            break;
        default:
            console.error("!!!!!!!!!!!!!!!!!!!");
    }
    return pageContents;
}

function BackButton({page, back}) {
    let backButton = null;
    if (page.name !== pages.ingredients || page.index !== 0) {
        backButton = (<button onClick={() => { back(); }}>назад</button>);
    }
    return backButton;
}

function ChosenIngredientsView({chosenIngredients}) {
    return <div>
        <b> Выбранные игредиенты </b>
        {ingredients
            .map((ingredient, index) => <div key={index}>
                <i>{ingredient.name}:</i> {chosenIngredients[index]}
            </div>
            )}
    </div>;
}

function reviewOrderPage(name) {
    return <div>
        <p><b>Ваше имя:</b> {name}</p>
    </div>;
}

function customerNamePage(name, setName, next) {
    return <div>
        <p>Ваше имя</p>
        <input value={name} onChange={event => { setName(event.target.value); }} />
        <button onClick={() => { next(); }}>далее</button>
    </div>;
}

export default contents
