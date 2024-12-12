import React, { useState } from "react";
import RandomadviceLS from "./RandomadviceLS";

function Advice(){
    const [advice,setAdvice]= useState("NA")
    return(
        <>
        <h1> Advice Generator</h1>
        <RandomadviceLS onSelectAdvice={setAdvice}></RandomadviceLS>
        <h2> {advice}</h2>
        </>
    )
}
export default Advice;