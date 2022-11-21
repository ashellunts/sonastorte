import Footer from './Footer'

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

function Ingredients(data) {
  return (
    <>
      <h1>{data.name}</h1>
      <ul>
        {data.items.map(filling => (<li>{filling}</li>))}
      </ul>
    </>
  )
}

function App() {
  return (
    <div>
      {ingredients.map(ingredient => Ingredients(ingredient))}
      {Footer()}
    </div>
  )
}

export default App;
