import { useState } from 'react'
import './App.css'
import chuck from './assets/chuc_desktop.svg'
import Dropdown from './components/Dropdown'
import Buttons from './components/Buttons'
import Render from './components/Render'



function App() {
  const [categories, setCategories] = useState([])
  const [joke, setJoke] = useState("")
  const [selezione, setselezione] = useState("")

  function CaricaCategoria(){
      let url = 'https://api.chucknorris.io/jokes/categories'

    let promise = fetch(url)

    promise.then(
        response => response.json()
    ).then(
        data => {
          data.forEach(element => {
            let obj = data.map(function(item, index){
              return {
                id: index,
                value: item
              }
            })
            setCategories(obj)
          });
        }
    )
  }

  function CaricaJoke(){
    if(selezione != ""){
      let url = `https://api.chucknorris.io/jokes/random?category=${selezione}`
      let promise = fetch(url)
      
      promise.then(
        response => response.json()
      ).then(
        data => setJoke(data.value)
      ) 
    }else{
      let url = `https://api.chucknorris.io/jokes/random`
      let promise = fetch(url)
      
      promise.then(
        response => response.json()
      ).then(
        data => setJoke(data.value)
      ) 
      
    }
  }

  function UsaEvento(e){
    setselezione(e)
  }

  

  function copy(){
    if(joke != ""){
      navigator.clipboard.writeText(joke)
      alert("Il testo è stato copiato")
    }
  }

  return (
    <div className="App">
      <div id='container'>
      <h1 id='title'>Webapp API Chuck Norris</h1>
      <p id='paragraph'>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
      <img id='chuck_img' src={chuck} alt="Beh, è chuck " />
      <Dropdown categories={categories} callback={CaricaCategoria} evento={UsaEvento} />
      {joke != "" &&
        <Render joke={joke}/>
        } 
      <Buttons text="carica joke" variant={"active"}  styles={"margin-top-75"} callback={() => CaricaJoke()}/>
      <Buttons text="copia testo" variant={joke === "" ? "disabled" : "active"} styles={"margin-top-20"} callback={copy}/>
      </div>
    </div>
  )
}

export default App
