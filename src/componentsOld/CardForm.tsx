import { useState, useContext } from "react";
import { ProvaContext } from "../storeOld/ProvaContext";
import type { ProvaContextType } from "../storeOld/ProvaContext";

type Town = {
    title: string;
    description: string;
    imageURL: string;
    isVisited: boolean;
}

type AddTownFunction = (town: Town) => void;

function CardForm({addTown}: {addTown: AddTownFunction}) {
    const {count}: ProvaContextType = useContext(ProvaContext)
    const [formData, setFormData] = useState<Town>({
        title: "",
        description: "",
        imageURL: "",
        isVisited: false
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = event.target
        const inputValue = type === "checkbox" ? (event.target as HTMLInputElement).checked : value
        setFormData({...formData, [name]: inputValue})
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addTown(formData)
        setFormData({
            title: formData.title,
            description: formData.description,
            imageURL: formData.imageURL,
            isVisited: formData.isVisited
        })
    }
    return (
        <form className="flex flex-col gap-3 w-80 mb-10" onSubmit={handleSubmit}>
            <div className="flex flex-col">

                <label>Nome Città</label>
                <input className="border-2 border-zinc-700 rounded-md p-2" type="text" name="title" value={formData.title} onChange={handleInputChange} />

            </div>
            <div className="flex flex-col">

                <label>Descrizione {count}</label>
                <textarea className="border-2 border-zinc-700 rounded-md p-2" name="description" value={formData.description} onChange={handleInputChange}/>

            </div>
            <div className="flex flex-col">

                <label>Immagine</label>
                <input className="border-2 border-zinc-700 rounded-md p-2" type="text" name="imageURL" value={formData.imageURL} onChange={handleInputChange}/>

            </div>
            <div className="flex flex-col">

                <label>Visitato?</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}/>

            </div>
            <button type="submit">aggiungi card</button>
        </form>
    )
}

export default CardForm