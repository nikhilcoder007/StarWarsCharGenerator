// import logo from './logo.svg';
import './App.css';
import React from 'react';

class StarWars extends React.Component{
  constructor(){
    super()
    this.state={
      name:null,
      imageurl:null,
      height:null,
      homeworldName:null,
      loadedChar:false,
    }
  }
  getNewChar(){
    const randomNumber=Math.ceil(Math.random()*88)
    const url=`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          name:data.name,
          height:data.height,
          homeworldName:data.homeworld,
          imageurl:data.image,
          loadedChar:true,
        })
      })
    
  }
  render(){
    return(
      <div>
        {
          this.state.loadedChar &&
          <div>
            <h1>Name: {this.state.name}</h1>
            <div>
              <img src={this.state.imageurl} className='character-img' alt=''></img>
            </div>
            <p>Height: {this.state.height} metres</p>
            <p>Home World: {this.state.homeworldName}</p>
          </div>
        }
        <button type="button" onClick={()=>
          this.getNewChar()
        }
        className="btn"
        >
          Generate a Star Wars Character
        </button>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars/>
      </header>
    </div>
  );
}

export default App;
