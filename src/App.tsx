import './App.css'
import { useSelector } from 'react-redux'
import Example from './components/Example'
import CardForm from './components/CardForm'
import Card from './components/Card'

function App() {
    const cities = useSelector((state: any) => state.cities.value)

  return (
    <>
        <Example></Example>
        <CardForm></CardForm>

        <div className='grid grid-cols-4 gap-5'>
            {cities.map((city: any) => (
                <Card 
                key={city.id} 
                title={city.title} 
                description={city.description}
                imageURL={city.imageURL} 
                isVisited={city.isVisited}>
                </Card>
            ))}
        </div>

    </>
  )
}

export default App
