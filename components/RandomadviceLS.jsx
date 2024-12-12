import React from "react";

const advices=[
    "work hard",
    "Study hard",
    "be kind",
    "be good"
]

const RandomadviceLS=({onSelectAdvice})=> {
    const getRandomAdvice=()=> {
        const randomIndex=Math.floor(Math.random()*advices.length);
        return advices[randomIndex];
    }

    const handleClick=()=>{
        const advice = getRandomAdvice();
        onSelectAdvice(advice)
    }
    return(
        <>
        <button onClick={handleClick}>Generate Advice </button>
        </>
)
}
export default RandomadviceLS;