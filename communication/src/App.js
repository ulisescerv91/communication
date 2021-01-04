
import './App.css';
import {AiFillCloseCircle, AiFillCheckCircle} from 'react-icons/ai'
import {IoWater, IoFastFood , IoHappySharp} from 'react-icons/io5'
import {GiNightSleep} from 'react-icons/gi'
import {FaPoo, } from 'react-icons/fa'
import {RiEmotionHappyFill, RiEmotionUnhappyFill} from 'react-icons/ri'





function App() {

  const hablar = (texto) =>{

    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.rate = 1;
    utterance.lang = 'es-MX';
    speechSynthesis.speak(utterance)

  }


  return (
    <div className="App">
      <div className='element' > <AiFillCheckCircle className='icon color-green' onClick={ () => hablar('Si') }/> </div>
      <div className='element' > <AiFillCloseCircle className='icon color-red' onClick={ () => hablar('No') }/> </div>

      <div className='element' > <IoWater className='icon color-blue' onClick={ () => hablar('Tengo Sed') }/> </div>
      <div className='element' > <IoFastFood className='icon color-orange' onClick={ () => hablar('Tengo Hambre') } /> </div>

      <div className='element' > <GiNightSleep className='icon color-purple' onClick={ () => hablar('Tengo sueño') }/> </div>
      <div className='element' > <FaPoo className='icon color-brown' onClick={ () => hablar('Cámbiame el calzón, porfis') }/> </div>

      <div className='element' > <RiEmotionHappyFill className='icon color-green-2' onClick={ () => hablar('Me siento bien') }/> </div>
      <div className='element' > <RiEmotionUnhappyFill className='icon color-red-2' onClick={ () => hablar('Me siento un poco mal') }/> </div>
      
      

    </div>
  );
}

export default App;
