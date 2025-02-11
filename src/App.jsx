import './App.css'
import {AnimatePresence, motion} from "motion/react"
import React, { createElement, useRef, useState } from "react";

function App() {

  const [isVisible, setIsVisible] = useState(false)
  const [isEnvelopeVisible, setEnvelopeIsVisible] = useState(true)
  const [isYesClicked,setIsYesClicked] = useState(false);
  const [Buttons,setButtons] = useState([]);

  var [yesButtonCounter, setYesButtonCounter] = useState(0);

  const handleYesClick = () => { 
    setIsYesClicked(!isYesClicked)
    setIsVisible(!isVisible)
  }

  const onClickEnvelope = () =>  {
    setEnvelopeIsVisible(!isEnvelopeVisible); 
    setIsVisible(!isVisible)
  }

  const addMoreButtons = () => {
    setYesButtonCounter(yesButtonCounter + 1)
    console.log(yesButtonCounter)
  }

  var xPos;
  var yPos;

 const renderButtons = () => {
  

  for(let i = 0; i<yesButtonCounter; i++)
    {
      xPos = Math.floor(Math.random() * 85) + 1 + '%'
      yPos = Math.floor(Math.random() * 85) + 1 + '%'
             
      Buttons.push(<motion.button 
        className="bg-[#E74C3C] z-1 absolute text-white px-4 md:px-8 shadow-lg py-2 md:py-3 rounded-lg text-lg md:text-xl font-bold hover:bg-[#D64434] transition-colors"
        key={i}
        style={{left: xPos, top:yPos}}
        onClick={handleYesClick}
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:[1.25,1]}}
        transition={{duration:0.5}}
       
        >YES!</motion.button>


        );
    }
    console.log(Buttons);
    return Buttons
  }



  return (
    <div 
      className="min-h-screen bg-[#FDF6EC] flex items-center justify-center p-4 overflow-hidden w-full">
      <div className="relative w-full max-w-2xl mx-auto">
        <AnimatePresence 
          >
            {isEnvelopeVisible ? (

                    <motion.div 
                    className="z-3 absolute left-1/2 top-1/2 w-full max-w-[700px] aspect-[1.4/1] bg-[#E74C3C] rounded-lg shadow-lg p-6 flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2" 
                    initial={{opacity:0, y:100}}
                    animate={{
                      opacity:100, y:0,
                      transition:{duration:.75, ease:"easeInOut"}
                    }}
                    
                    exit={{
                      y:800,
                      opacity:0,
                      transition:{delay: 1.5, duration:0.75, ease:"easeInOut"} 
                    }}
                    onClick={onClickEnvelope}               
                    >
                    <div 
                      className="absolute top-4 right-4 md:size-24 size-16">
                      <img className="w-full h-full object-contain" src="/src/assets/stamp.png" alt="Heart Stamp"/>
                    </div>
                    <span className="text-white text-3xl md:text-5xl caveat-main">For KK</span>
                    </motion.div>

             ):null }
              
        </AnimatePresence>
               
        <AnimatePresence>

              {isVisible ? (

                   
                    <motion.div 
                    className="z-1 absolute left-1/2 top-1/2 w-[300px] md:w-[500px] aspect-[1/1.4] bg-[#FFB6C1] rounded-lg shadow-lg md:py-16 md:px-12 flex flex-col gap-6 transform -translate-x-1/2 -translate-y-1/2"
                    initial={{y:300}}
                    animate={{opacity:1, y:0}}
                    transition={{delay:0.5,duration:0.5, ease:"easeInOut"}}
                    >
                      
                      
                      <div className="space-y-4 p-4">
                        <h1 className="text-[#E74C3C] text-4xl md:text-6xl font-extrabold text-left leading-[1.2]">Will you <br/>be my <br/>valentines?</h1>
                      </div>
                      <div className="space-y-4 flex flex-col items-center relative flex-1">
                        <button 
                        className="bg-[#E74C3C] text-white px-4 md:px-8 py-2 md:py-3 rounded-lg shadow-lg text-lg md:text-xl font-bold hover:bg-[#D64434] transition-colors"
                        onClick={handleYesClick}
                        >YES!</button>
                        
                        
                        
                        
                      <div>
                        
                       <button className="text-[#E74C3C] text-xs md:text-sm rounded-lg shadow-lg px-3 md:px-4 py-1.5 md:py-2 bg-white"
                        onClick={addMoreButtons}>
                          no 😡 
                        </button>
                      <div>
                      {renderButtons()}
                      </div>
                      </div>
                      </div>
                   </ motion.div> 
              ):null}

        </AnimatePresence>
        
        <AnimatePresence>

        {isVisible ? (
        <motion.div 
                    className="overflow-hidden z-2 absolute left-1/2 top-1/2 w-full md:w-[700px] aspect-[1/1.4] bg-[#FDF6EC] p-6 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                    initial={{y:700}}
                    animate={{opacity:1, y:2000}}
                    transition={{delay:1.75,duration:1.25}}
                    >
                      


                    </ motion.div> 


                  ):null}

        </AnimatePresence>

        <AnimatePresence>

              {isYesClicked ? (

                   
                    <motion.div 
                    className="z-1 absolute left-1/2 top-1/2 w-[400px] md:w-[500px] aspect-[1/1.4] bg-[#FFB6C1] rounded-lg shadow-lg md:py-16 md:px-12 flex flex-col gap-6 transform -translate-x-1/2 -translate-y-1/2"

                    >
                      <motion.div 
                      initial={{opacity:0,y:50}}
                      animate={{opacity:1, y:0}}
                      transition={{duration:1, ease:"easeInOut"}}
                      className="flex flex-col items-center justify-center gap-8 p-8">
                        <div className="bg-white p-4 rounded-lg shadow-lg w-fit rotate-355">
                          <div className="md:w-64 md:h-64 w-32 h-32 mb-4">
                            <img className="w-full h-full object-cover rounded" src="/src/assets/line-heart.gif"/>
                          </div>
                          
                        </div>
                        <h1 className="text-[#E74C3C] text-4xl md:text-6xl font-extrabold"> Yay!!</h1>
                      </motion.div>

                      <motion.div 
                       initial={{opacity:0,y:50}}
                       animate={{opacity:1, y:0}}
                       transition={{delay:1,duration:1, ease:"easeInOut"}}
                      className="flex flex-col items-center justify-center gap-2">
                        <div className="text-xs md:text-sm font-bold text-center">Princess is the prettiest, sweetest, kindest, smartest and works very hard so hope can get rest soon!</div>
                        <div className="text-xs md:text-sm font-bold text-center">Wish princess have sweetest and lovely day >3</div>
                        <div className="text-xs md:text-sm font-bold text-center">I will go run and buy flowers</div>
                        <div className="text-xs md:text-sm font-bold text-center">Love lots - Froggy</div>
     
                        </motion.div>
                      
 
                   </ motion.div> 
              ):null}

        </AnimatePresence>


       
          
      </div>
    </div>
  )
}

export default App