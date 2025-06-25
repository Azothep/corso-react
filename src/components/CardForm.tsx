import { useState } from "react";
import { useDispatch } from "react-redux"
import { add } from "../redux/citiesSlice";

function CardForm() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageURL: "",
        isVisited: false
    });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === "checkbox" ? checked : value;
        setFormData({
            ...formData,
            [name]: inputValue
        });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = {
            id: Math.random()*1000,
            name: formData.title,
            description: formData.description,
            imageURL: formData.imageURL,
            isVisited: formData.isVisited
        };
        setFormData({
            title: "",
            description: "",
            imageURL: "",
            isVisited: false
        });
        dispatch(add(city));
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            
            <div className="flex flex-col">
                <label htmlFor="">nome</label>
                <input type="text" name="name" value={formData.title} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="">descrizione</label>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="">immagine</label>
                <input type="text" name="imageURL" value={formData.imageURL} onChange={handleInputChange}/>
            </div>

            <div className="flex flex-col">
                <label htmlFor="">visitato</label>
                <input type="checkbox" name="isVisited" checked={formData.isVisited} onChange={handleInputChange}/>
            </div>

            <button type="submit">aggiungi</button>
            
        </form>
    )
    
}

export default CardForm