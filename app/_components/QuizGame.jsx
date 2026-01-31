"use client"
import React from 'react'
import GameCard from './GameCard'
import { game1 } from '../_actions/game1'

const QuizGame = () => {
    const { gameTitle, questions } = game1

    return (
        <div className=''>
            <h1 className='mb-10 text-center font-bold text-xl'>{gameTitle}</h1>
            <div className='grid grid-cols-2 gap-2 '>
                <h1 className='h-10 w-full flex items-center justify-center border-b border-t  text-sm font-bold'>Malware Vectors</h1>
                <h1 className='h-10 w-full flex items-center justify-center border-b border-t  text-sm font-bold'>Malware Payloads</h1>
                {questions.map((q, idx) => {
                    return (
                        <GameCard key={idx} question={q} />
                    )
                })}
            </div>
        </div>
    )
}

export default QuizGame