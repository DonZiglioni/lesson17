import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const PopUp = ({ answer, showA, closePopup }) => {
    const [showAns, setShowAns] = useState(false)

    const toggleShow = (e) => {
        setShowAns(true)
        return
    }

    return (
        <div className='absolute z-30 top-0 left-0 flex flex-col min-h-screen min-w-screen  py-12 px-50 bg-black/20'>
            <div className='relative z-40 h-200 rounded-4xl w-full p-50 text-center bg-black text-white flex flex-col items-center justify-center text-4xl'>
                {answer}
                {/* <Button variant='outline' className='relative mt-10 mb-10 z-50 text-black' onClick={toggleShow} >Show Answer</Button> */}
                {showAns && (
                    <>
                        <h1 className='text-green-200'>{showA}</h1>
                        <Button variant='outline' className='relative mt-10 mb-10 z-50 text-black' onClick={closePopup} >NEXT</Button>
                    </>
                )}
            </div>

        </div >
    )
}

export default PopUp