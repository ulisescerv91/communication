
import './App.css';
import {AiFillCloseCircle, AiFillCheckCircle} from 'react-icons/ai'
import {IoWater, IoFastFood} from 'react-icons/io5'
import {GiNightSleep} from 'react-icons/gi'
import {FaPoo} from 'react-icons/fa'




function App() {

  const hablar = (texto) =>{

    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.rate = 1;
    utterance.lang = 'es-MX';
    speechSynthesis.speak(utterance)

  }


  return (
    <div className="App">
      <div className='element' > <AiFillCheckCircle onClick={ () => hablar('Si') }/> </div>
      <div className='element' > <AiFillCloseCircle onClick={ () => hablar('No') }/> </div>

      <div className='element' > <GiNightSleep onClick={ () => hablar('Tengo sueño') }/> </div>
      <div className='element' > <IoFastFood onClick={ () => hablar('Quiero Comer') } /> </div>

      <div className='element' > <IoWater onClick={ () => hablar('Quiero Aagua') }/> </div>
      <div className='element' > <FaPoo onClick={ () => hablar('Cámbiame el calzón porfis') }/> </div>


    </div>
  );
}

export default App;
