"Use client"
import React, { useEffect, useState } from 'react'
import PopUp from './PopUp'

const GameCard = ({ question }) => {
    const [showQuestion, setShowQuestion] = useState(false)
    const [selected, setSelected] = useState(false)
    const handleClick = () => {

        setShowQuestion(!showQuestion)
        setSelected(true)

    }



    useEffect(() => {

    }, [showQuestion])

    return (
        <div
            className={`h-10 w-full hover:cursor-pointer flex items-center justify-center border border-blue-900/50 ${selected ? 'text-green-400 bg-gray-600' : null}`}
            onClick={() => handleClick()}
        >
            {selected ? question.questionType : question.points}
            {showQuestion && (
                <PopUp answer={question.question} showA={question.questionType}  />
            )}
        </div>
    )
}

export default GameCard