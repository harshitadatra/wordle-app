import { useState } from "react";
const useWordle = (solution) => 
{
    const [turn,setTurn] = useState(0);
    const [currentGuess,setCurrentGuess] = useState(0);
    const [guesses,setGuesses] = useState([]);
    const [history,setHistory] = useState([]);
    const [isCorrect,setIsCorrect] = useState(false);
    const formatGuess =() =>
    {

    }
    const addNewGuess = () => 
    {

    }
    const handleKeyup= () =>
    {

    }
    return {turn,currentGuess,guesses,history,isCorrect,handleKeyup}
}
export default useWordle