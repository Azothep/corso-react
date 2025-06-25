import { useEffect, useState, useContext } from "react"
import { ProvaContext } from "../storeOld/ProvaContext"
import type { ProvaContextType } from "../storeOld/ProvaContext"

function Example({ cities }: any) {
    // const [count, setCount] = useState(0)
    // const [data, setData] = useState(null)

    const {count, setCount}: ProvaContextType = useContext(ProvaContext)

    // useEffect(() => {
    //     // document.title = `You clicked ${count} times`
    //     // fetch('https://jsonplaceholder.typicode.com/todos')
    //     // .then((response) => response.json())
    //     // .then((data) => {setData(data); console.log(data)})
    //     localStorage.setItem('count', count.toString())
    //     document.title = `You clicked ${count} times`
    //     console.log(localStorage.getItem('count'))
    // }, [count])

    // const handleClick = () => {
    //     setCount(count + 1)
    //     document.title = `You clicked ${count} times`
    // }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export default Example