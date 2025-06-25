import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const townList = [
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
  ]

  return (
    <>
      <div className='grid grid-cols-4 gap-10'>
        {
          townList.map((town) => (
            <Card key={town.id} title={town.title} isVisited={town.isVisited} description={town.description} imageURL={town.imageURL}><p>ciao</p></Card>
          ))
        }
        {
          // townList.filter((city) => city.isVisited).map((city) => (
          //   <Card key={city.id} title={city.title} isVisited={city.isVisited} description={city.description} imageURL={city.imageURL}><p>ciao</p></Card>
          // ))
        }
        {/* <Card title="tokyo" isVisited={true} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/299"><p>ciao</p></Card>
        <Card title="parigi" isVisited={false} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/300"><h1>hello</h1></Card>
        <Card title="londra" isVisited={true} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/300/301"><button>click me</button></Card>
        <Card title="new york" isVisited={false} description="Lorem ipsum dolor sit, amet consectetur adipisicing elit." imageURL="https://picsum.photos/301/300"><a>click me</a></Card> */}
      </div>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <button onClick={() => alert("ciao")}>
          alert {count}
        </button>
      </div>

    </>
  )
}

export default App
