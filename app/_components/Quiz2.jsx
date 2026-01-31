"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
import Question from './Question';
import { quiz2 } from '../_actions/quiz2';

const Quiz2 = () => {
    const quiz = quiz2
    return (
        <div className='w-full h-auto'>
            <Question quiz={quiz2} />
        </div>
    )
}

export default Quiz2