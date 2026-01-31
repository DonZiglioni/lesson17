import React from 'react'

const Slide = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-2xl text-center mb-2'>
                End User Best Practices
            </h1>
            <ul className='list-disc'>
                <li className='font-bold text-lg mt-4'>Log off when not in use</li>
                <li className='list-inside pl-4'>Manually lock workstation before leaving unattended</li>
                <li className='list-inside pl-4'>Use screensaver locks</li>
                <li className='list-inside pl-4'>Mitigate lunchtime attacks</li>
                <li className='font-bold text-lg mt-4'>Secure/protect critical hardware</li>
                <li className='list-inside pl-4'>Equipment locks</li>
                <li className='list-inside pl-4'>Awareness of equipment in public locations</li>
                <li className='font-bold text-lg mt-4'>Secure personally identifiable information (PII) and passwords</li>
                <li className='list-inside pl-4'>Adopt a clean desk policy</li>
                <li className='list-inside pl-4'>Do not store in unencrypted documents</li>
                <li className='list-inside pl-4'>Do not make unauthorized copies of documents</li>
            </ul>
        </div>
    )
}

export default Slide