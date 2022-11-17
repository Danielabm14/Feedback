import { useState } from "react"


const FeedbackItem = () => {

    
    //estados : persisten informacion a traves del ciclo de vida del componente 
    //de  un unico componente 


const [rating, setRating] = useState(2)
const [ text , setText ] = useState("Mejorar curso, mejores recursos")

 const addNota = () => {
    //cambiar estado a setRating
    //parametro para el vallor anterior 
    setRating((prev)=>{
        return prev + 1
    })
}
const restNota = () => {
    //cambiar estado a setRating
    //parametro para el vallor anterior 
    setRating((prev)=>{
        return prev - 1
    })
}

    return (
    <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                 { text }
            </div>
            <button className="btn-secondary " onClick={addNota}>Sumar Nota</button>
            <button className="btn-secondary " onClick={restNota}>Restar Nota</button>

    </div>
    )
}

export default FeedbackItem