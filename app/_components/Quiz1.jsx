"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import Question from './Question';
import { quiz } from '../_actions/quiz1';

const Quiz1 = () => {
    const quiz1 = quiz
    return (
        <div className='w-full h-auto'>
            <Question quiz={quiz1} />
        </div>
    )
}

export default Quiz1