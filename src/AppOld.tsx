import { useEffect, useReducer, useState, useContext } from 'react'
import './App.css'
import Card from './componentsOld/Card'
import CardForm from './componentsOld/CardForm'
import Example from './componentsOld/Example'
import { ProvaContext } from './storeOld/ProvaContext'

function formReducer(state: any, action: any){
  switch(action.type){
    case "CHANGE_FIELD":
      return {...state, [action.field]: action.value}
    case "RESET_FORM":
      return {name: '', email: ''}
    default:
      return state
  }
}

function handleClick() {
  alert("ciao")
}

function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event.target.value)
}

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

function App() {
  const [count, setCount] = useState(0)
  const [string1, setString] = useState("")
  const [items, setItems] = useState([1, 2, 3])
  const [data, setData] = useState([])
  const [formState, dispatchFormState] = useReducer(formReducer, {name: '', email: ''})

  const aggiungiItem = () => {
    setItems((items) => [...items, 4])
  }

  const handleFieldChange = (field: string, value: string) => {
    dispatchFormState({type: "CHANGE_FIELD", field, value})
  }

  const resetForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatchFormState({type: "RESET_FORM"})
  }

  const sendForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(formState)
  }

  const [townList, setTownList] = useState([
    {
      id: 1,
      title: "tokyo",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/300/299",
      isVisited: true
    },
    {
      id: 2,
      title: "parigi",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/300/300",
      isVisited: false
    },
    {
      id: 3,
      title: "londra",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/300/301",
      isVisited: true
    },
    {
      id: 4,
      title: "new york",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/301/300",
      isVisited: false
    },
    {
      id: 5,
      title: "roma",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/301/301",
      isVisited: false
    },
    {
      id: 6,
      title: "berlino",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      imageURL: "https://picsum.photos/301/302",
      isVisited: false
    },
  ])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        console.log(data)
      })
  }, [count])

  const addTown = (town: { title: string, description: string, imageURL: string, isVisited: boolean }) => {
    const newTown = {
      ...town,
      id: townList.length + 1
    }

    setTownList([...townList, newTown])
  }



  return (
    <ProvaContext.Provider value={{count, setCount}}>
      <Example towns={townList}/>

      <CardForm addTown={addTown} />

      <div className='grid grid-cols-4 gap-10'>
        {townList.map((town) => (
          <Card
            key={town.id}
            title={town.title}
            isVisited={town.isVisited}
            description={town.description}
            imageURL={town.imageURL}
          >
            <p>ciao</p>
          </Card>
        ))}
        
        {/* townList.filter((city) => city.isVisited).map((city) => (
          <Card key={city.id} title={city.title} isVisited={city.isVisited} description={city.description} imageURL={city.imageURL}><p>ciao</p></Card>
        )) */}
        
        {/* <Card title="tokyo" isVisited={true} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/299"><p>ciao</p></Card>
        <Card title="parigi" isVisited={false} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/300"><h1>hello</h1></Card>
        <Card title="londra" isVisited={true} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/301"><button>click me</button></Card>
        <Card title="new york" isVisited={false} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/301/300"><a>click me</a></Card> */}
      </div>

      {/* <div className='grid grid-cols-4 gap-5'>
        {data.map((item: any) => (
          <div className='bg-slate-400 rounded-md p-4' key={item.id}>
            <p className='text-red-500'>user id: {item.userId}</p>
            <h2 className='text-xl mb-3'>title: {item.title}</h2>
            <p className='text-gray-800'>completed: {item.completed ? "✔️" : "❌"}</p>
          </div>
        ))}
      </div> */}

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        
        {/* <button onClick={() => alert("ciao")}>
          alert
        </button> */}
        
        <button onClick={handleClick}>
          alert
        </button>
        
        <input type="text" onChange={handleChange} />

        <button onClick={() => setString((string1) => string1 + "a")}>
          la stringa è {string1}
        </button>

        <button onClick={aggiungiItem}>
          aggiungi item
        </button>

        <form action="" onSubmit={handleSubmit}>
          <button type="submit">submit</button>
        </form>
      </div>

      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" value={formState.name} onChange={(e) => handleFieldChange("name", e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formState.email} onChange={(e) => handleFieldChange("email", e.target.value)}/>
        </div>
        <button onClick={resetForm}>resetta il form</button>
        <button onClick={sendForm}>invia</button>
      </form>
    </ProvaContext.Provider>
  )
}

export default App
