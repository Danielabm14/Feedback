import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedbackItem";

function App(){

    const HeaderStyles ={
    backgroundColor: '#A569BD',
    color: 'white'
    }
    return(
        <div className="container">
            {/*Props : atributos de etiqueta de un componente react */  }
            <Header
            bgcolor={HeaderStyles.backgroundColor}
             Color={HeaderStyles.color}/>

             
        
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        <FeedbackItem />
        </div>

    )
}

export default App;