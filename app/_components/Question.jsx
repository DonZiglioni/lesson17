import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

const Question = ({ quiz }) => {

    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const questions = quiz.questions

    const handleClick = (event) => {
        if (event.target.value === questions[activeQuestion].correctAnswer) {
            setIsCorrect(true)
            setSelectedAnswer(event.target.value)
            console.log("Correct!");
        }
    }

    const handleNext = () => {
        if (isCorrect) {
            if (activeQuestion === quiz.nrOfQuestions - 1) {
                setIsComplete(true)
                return;
            }
            setActiveQuestion(activeQuestion => activeQuestion + 1)
            setSelectedAnswer('')
            setIsCorrect(false)
        }
    }
    return (

        <div className='flex flex-col w-full bg-blue-50 gap-2'>
            <h1 className='text-center font-bold text-2xl'>{quiz.quizTitle}</h1>

            {isComplete && (
                <div className='absolute z-20 flex items-center justify-center top-0 left-0 h-full w-full bg-black/90 '>
                    <div className='bg-sky-100 rounded-full h-200 w-200 flex items-center justify-center p-20' >
                        <h1 className='text-sky-900 text-center font-bold text-6xl'>Great Job! You are going to pass the A+ exam with ease!</h1>
                    </div>
                </div>
            )}
            <span className='text-center font-bold text-md text-gray-700 -my-2'>
                {activeQuestion + 1}<span>/{quiz.nrOfQuestions}</span>
            </span>
            <h1 className='font-semibold text-2xl my-4'>{questions[activeQuestion].question}</h1>
            <Button value={1} type="submit" variant="outline" className={`text-lg ${isCorrect && selectedAnswer === '1' ? 'bg-green-500 hover:bg-green-200' : null}`} onClick={handleClick}>{questions[activeQuestion].answers[0]}</Button>
            <Button value={2} type="submit" variant="outline" className={`text-lg ${isCorrect && selectedAnswer === '2' ? 'bg-green-500 hover:bg-green-200' : null}`} onClick={handleClick}>{questions[activeQuestion].answers[1]}</Button>
            <Button value={3} type="submit" variant="outline" className={`text-lg ${isCorrect && selectedAnswer === '3' ? 'bg-green-500 hover:bg-green-200' : null}`} onClick={handleClick}>{questions[activeQuestion].answers[2]}</Button>
            <Button value={4} type="submit" variant="outline" className={`text-lg ${isCorrect && selectedAnswer === '4' ? 'bg-green-500 hover:bg-green-200' : null}`} onClick={handleClick}>{questions[activeQuestion].answers[3]}</Button>
            <Button type="submit" className={`${isCorrect ? 'bg-blue-400 hover:bg-blue-900' : null}`} onClick={handleNext}>NEXT</Button>
        </div>

    )
}

export default Question