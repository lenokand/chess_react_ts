import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';
import Clock from './Clock';
interface TimerProps{
    currentPlayer: Player | null;
    restart: () => void;
}

const Timer: FC<TimerProps> = ({currentPlayer, restart}) => {
    const [blackTime, setBlackTime] = useState(300)
    const [whiteTime, setWhiteTime] = useState(300)
    const [endMessege, setEndMassege] = useState("hide")
const timer = useRef<null | ReturnType<typeof setInterval>>(null)

useEffect(()=>{
startTimer( )
}, [currentPlayer])

    function startTimer(){
        if(timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE 
        ? decrementWhiteTimer 
        : decrementBlackTimer
        timer.current = setInterval(callback, 1000)

    }
    function decrementBlackTimer(){
        // setBlackTime(blackTime - 1)
        // console.log(blackTime)
        // setBlackTime(prev => (prev >= 1) ? prev - 1 : 0 )
        setBlackTime(function(prev){

            if (prev >=1){
                prev = prev -1
                setEndMassege("hide ")
            } else{
                prev = 0;
                
                setEndMassege("show ")
            }

            return prev
        })
       
    }
    function decrementWhiteTimer(){
        // setWhiteTime(prev => prev - 1)
        
        setWhiteTime(function(prev){

            if (prev >=1){
                prev = prev -1
                setEndMassege("hide ")
            } else{
                prev = 0;
                
                setEndMassege("show ")
            }

            return prev
        })
    }
const handleRestart=() =>{
    setBlackTime(300)
    setWhiteTime(300)
    restart()
    

}

    return (
        <div className='timer'>

<Clock/>

            <div>
                <button className='restart' onClick={handleRestart}>Restart game    </button>
                
            </div>
            <h3>Black: {blackTime}</h3>
            <h3>White: {whiteTime}</h3>
        <div className={endMessege ? endMessege + "wrapper-massage" : "wrapper-massage"} >
            <div className={endMessege ? endMessege + " massage" : "massage"}>
                <div> Game over, becouse of </div>
               <span className='color'>Timeout</span>
     
            <div>The {currentPlayer?.color} is loos!</div>
                <button className='restart' onClick={handleRestart}>Restart game    </button>
            </div>
        </div>
            
        </div>
    );
};



export default Timer;