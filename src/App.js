import './App.css';
import {useState} from 'react';


function App() {
  const num = 16;
  const pics = ['😀', '😃', '🤩', '🥵', '😅', '😂', '🤡', '🇨🇳','😀', '😃', '🤩', '🥵', '😅', '😂', '🤡', '🇨🇳']; 
  const [up, setUp] = useState(Array(num).fill(false));
  const [turns, setTurns] = useState(0);
  const [upcards, setUpcards] = useState([]);
  function handleClick(index){

    setUp(up.map((up, i) => i === index ? !up : up));
    setUpcards(upcards.concat(pics[index]));
    console.log(upcards)
    if (upcards.length > 1){
      if (!checkCards()){
        setUp(Array(num).fill(false));
      }
      setUpcards([]);
      setTurns(turns + 1);
      document.querySelector('.ok').style.display = 'block';
    }
    
  }
  function checkCards(){
    if (upcards[0] === upcards[1]){
      return true;
    }
    return false;
  }

  return (

    <div className="App">
      <h1>Turns: {turns}</h1>
      <div className="Wrapper">
      {[...Array(num)].map((_, i) => <div key={i} onClick={e=>handleClick(i)}><Card key={i} pic={pics[i]} up={up[i]}/> </div>)}
      </div>
      <button className='ok'>OK!</button>
    </div>
  );
}

function Card({up, pic}){

  if (up){
    console.log(up)
    return (
      <div className="Card" >
        <div className='Card-up'>{pic}</div>
      </div>
      );}
  else{
    return (
      <div className="Card" >
        <div className='Card-down'></div>
      </div>
      );}
    
  

}

export default App;
