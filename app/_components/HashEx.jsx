"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

const HashEx = () => {
    const [showAlt, setShowAlt] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setShowAlt(prev => !prev)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1 className='mb-4 text-xl font-semibold text-center'>Validating Hashes/Checksums</h1>
            <ol className='gap-y-4 flex flex-col font-semibold'>
                <li className='list-decimal'>Download file (Do NOT install) and reveal SHA256 checksum</li>
                <div className='list-disc list-inside'>
                    <Link className='underline' target='_blank' href={'https://www.win-rar.com/download.html?&L=0'}>
                        Win-Rar Download Page
                    </Link>
                    <Image
                        src={showAlt ? '/rarimg2.png' : '/rarimg.png'}
                        alt='WinRAR checksum instructions'
                        width={500}
                        height={500}
                        className='mt-4'
                        priority
                    />
                </div>
                <li className='list-decimal'>Open Terminal/Command Line Interface</li>
                <li className='list-decimal'>Navigate to file and enter the following command:</li>
                <div>
                    <h2 className='underline'>Windows</h2>
                    <p className='text-blue-800'>certutil <span className='text-gray-700 '>-hashfile</span> winrar-x64-713.exe <span className='text-gray-700 '>SHA256</span></p>
                    <p className='text-blue-800'>powershell <span className='text-gray-900 '>Get-FileHash</span> winrar-x64-713.exe</p>
                    <h2 className='underline'>Linux</h2>
                    <p className='text-blue-800'>sha256sum <span className='text-gray-900 '>winrar-x64-713.exe</span></p>
                </div>
                <li className='list-decimal'>Compare SHA256 checksums and validate download security</li>
            </ol>
        </div>
    )
}

export default HashEx