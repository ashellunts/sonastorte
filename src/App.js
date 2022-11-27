import { useState } from 'react'
import contents from './contents';
import ingredients from './ingredients';
import pages from './ingredientsPage';

function App() {
    const [chosenIngredients, setChosenIngredients] = useState([])
    const [name, setName] = useState('')
    const [page, setPage] = useState({ name: pages.ingredients, index: 0 })

    function setChosenIngredient(index) {
        return (chosenIngredient) => {
            const newChosenIngredients = chosenIngredients.slice()
            newChosenIngredients[index] = chosenIngredient
            setChosenIngredients(newChosenIngredients)
            next()
        }
    }

    function next() {
        switch (page.name) {
            case pages.ingredients:
                if (page.index !== ingredients.length - 1) {
                    const newPage = { ...page }
                    newPage.index = page.index + 1
                    setPage(newPage)
                } else {
                    setPage({ name: pages.customerName })
                }
                break
            case pages.customerName:
                setPage({ name: pages.reviewOrder })
                break
            default:
                console.error('!!!!!!!!!!!!!!!!!!!')
                break
        }
    }

    function back() {
        switch (page.name) {
            case pages.ingredients:
                if (page.index !== 0) {
                    const newPage = { ...page }
                    newPage.index = page.index - 1
                    setPage(newPage)
                }
                break
            case pages.customerName:
                setPage({ name: pages.ingredients, index: ingredients.length - 1 })
                break
            case pages.reviewOrder:
                setPage({ name: pages.customerName })
                break
            default:
                console.error('!!!!!!!!!!!!!!!!!!!')
                break
        }
    }

    return contents(page, chosenIngredients, name, setName, next, setChosenIngredient, back)
}

export default App
