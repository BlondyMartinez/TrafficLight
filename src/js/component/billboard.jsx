import React, { useState, useEffect } from "react";
import Logo from "../../img/bm.png";

const Billboard = () => {
    const [turnOff, setTurnOff] = useState(false);
    
    useEffect(() => {
        const intervalId = setInterval(blink, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []); 

    function blink(){
        if (Math.random() > 0.3) return
        let delay = 0;
        for(let i = 0; i < 4; i++) {
            setTimeout(() => {
                setTurnOff(prevTurnOff => !prevTurnOff);
            }, delay);
            delay += i === 3 ? 300 : 100 * (i + 1); 
        }
    }

    console.log(turnOff)

    return(
        <div className={`billboard ${turnOff ? 'billboard-off' : ''}`}>
            <a href="https://www.linkedin.com/in/blondy-martinez/" target="_blank"><img className={`billboard-img  ${turnOff ? 'billboard-off-img' : ''}`} src={Logo} alt="" /></a>
        </div>
    );
}

export default Billboard;