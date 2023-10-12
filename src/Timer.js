import React, { useState, useEffect } from 'react';
import {fireEvent, render, screen } from '@testing-library/react'

export default function Timer(){
    
    const [count, setCount] = useState(0)
    let interval;

        function startTimer() {
            console.log("start timer")
            var num = 0;
            let interval = setInterval(function(){
                num++
              setCount(num);

              if(num === 5){
                clearInterval(interval)
                console.log("5!")
              }
            }, 1000);
        }

    useEffect(() => {
        const btn = document.getElementById("btn2")
        btn.addEventListener("click", startTimer)
    }, [])
    

    return(
        <>
        <h1>Timer: {count}</h1>
        <button id="btn2">Start</button>
        </>
    )
}