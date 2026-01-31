"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { checkPassword } from '../_actions/logic'
import PasswordStrengthBar from 'react-password-strength-bar';
import Slide from './Slide';

const PasswordCheck = () => {

    const [password, setPassword] = useState('')
    const [strength, setStrength] = useState('');
    const [strengthColor, setStrengthColor] = useState('black');
    const [pwLength, setPwLength] = useState(false);
    const [pwLower, setPwLower] = useState(false);
    const [pwCaps, setPwCaps] = useState(false);
    const [pwNums, setPwNums] = useState(false);
    const [pwSymbols, setPwSymbols] = useState(false);
    const [isStrong, setIsStrong] = useState(false);
    const [showSlide, setShowSlide] = useState(false);

    const evaluateStrength = (password) => {
        let score = 0;

        if (!password) {
            setPwCaps(false)
            setPwLength(false)
            setPwLower(false)
            setPwNums(false)
            setPwSymbols(false)
        };

        // Check password length
        if (password.length > 12) {
            score += 1;
            setPwLength(true)
        } else {

            setPwLength(false)
        }
        // Contains lowercase
        if (/[a-z]/.test(password)) {
            score += 1
            setPwLower(true)
        } else {

            setPwLower(false)
        };
        // Contains uppercase
        if (/[A-Z]/.test(password)) {
            score += 1
            setPwCaps(true)
        } else {

            setPwCaps(false)
        };
        // Contains numbers
        if (/\d/.test(password)) {
            score += 1
            setPwNums(true)
        } else {

            setPwNums(false)
        };
        // Contains special characters
        if (/[^A-Za-z0-9]/.test(password)) {
            score += 1
            setPwSymbols(true)
        } else {

            setPwSymbols(false)
        };

        // console.log(score);


        switch (score) {
            case 0:
            case 1:
            case 2:
                setStrengthColor('red');
                return 'Weak';
            case 3:
                setStrengthColor('orange');
                return 'Medium';
            case 4:
            case 5:
                setStrengthColor('green');
                return 'Strong';
            default:
                return '';
        }
    }


    const handleChange = (event) => {
        setPassword(event.target.value);
        setStrength(evaluateStrength(event.target.value));

    };

    const checkPassword = () => {
        if (!isStrong) {
            return;
        } else {
            console.log("Good");
            setShowSlide(true)
        }
    }
    useEffect(() => {
        //  console.log(password);
        if (pwLength === true && pwCaps === true && pwLower === true && pwNums === true && pwSymbols === true) {
            setIsStrong(true)
        } else {
            setIsStrong(false)
        }
    }, [password])

    return (
        <div className='flex flex-col'>

            {
                showSlide ?
                    <Slide /> :
                    <>
                        <h1 className='mb-4 text-xl font-semibold text-center'>Password Strength Checker</h1>
                        <div className="flex w-full max-w-sm items-center gap-2 mb-10">
                            <Input type="email" placeholder="Enter password here..." value={password} onChange={handleChange} className="hover:border-[rgba(0,0,0,.25)] shadow-md" />
                            <Button type="submit" variant="outline" className={`${isStrong ? "border-green-400 hover:bg-sky-100 text-black bg-green-100 shadow-sm shadow-green-200" : "text-sky-100 shadow-md bg-slate-800"} `} onClick={() => checkPassword()}>
                                Submit
                            </Button>
                        </div>
                        <PasswordStrengthBar password={password} />

                        <div className='mt-4 text-sm'>
                            <ul className='list-disc text-gray-600 italic'>
                                <li className={`${pwLower ? 'text-green-500 font-bold not-italic' : null}`}>
                                    Password contains lowercase letters
                                </li>
                                <li className={`${pwCaps ? 'text-green-500 font-bold not-italic' : null}`}>
                                    Password contains uppercase letters
                                </li>
                                <li className={`${pwNums ? 'text-green-500 font-bold not-italic' : null}`}>
                                    Password contains numbers
                                </li>
                                <li className={`${pwSymbols ? 'text-green-500 font-bold not-italic' : null}`}>
                                    Password contains special characters/symbols
                                </li>
                                <li className={`${pwLength ? 'text-green-500 font-bold not-italic' : null}`}>
                                    Password is a minimum of 12 characters, numbers, and symbols
                                </li>
                            </ul>
                        </div >
                        <small className='text-lg mt-4 text-gray-800 '>
                            Password strength:{' '}
                            <span
                                style={{
                                    fontWeight: 'bold',
                                    color: strengthColor,
                                }}
                            >
                                {strength}
                            </span>
                        </small>
                    </>
            }

        </div >
    )
}

export default PasswordCheck