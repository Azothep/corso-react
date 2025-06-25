import type { ReactNode } from "react"

function Card({title, description, imageURL, children, isVisited}: {title: string, description: string, imageURL: string, children: ReactNode, isVisited: boolean}) {

    return <div className="bg-zinc-950 rounded-md">
            <img src={imageURL} alt="" />
            <div className="flex flex-col p-4">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="text-zinc-400">{description}</p>
                {children}
                <span>{isVisited ? "✔️ visitata" : "✖️ non visitata"}</span>
{/* 
                {
                    isVisited && <span>✔️ visitata</span>
                }
                {
                    !isVisited && <span>✖️ non visitata</span>
                } */}
            </div>
        </div>
}
export default Card