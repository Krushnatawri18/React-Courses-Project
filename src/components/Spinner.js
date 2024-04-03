import React from 'react'
import './Spinner.css'

export const Spinner = () => {
    return (
        <div className="main-spinner">
            <div className='spinner'></div>
            <p>Loading ...</p>
        </div>
    )
}
