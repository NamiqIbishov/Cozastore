import React from 'react'

export default function SlideContent(props) {
    return (
        <div className='w-75 row'>
            <div className='col-lg-6 text-start py-5'>
                <h5 className='pt-5 mt-5'>{props.info}</h5>
                <h1 className='py-3'>{props.name}</h1>
                <button className='btn btn-primary rounded-pill mb-5'>
                    SHOP NOW
                </button> <br/><br/><br/><br/><br/>
            </div>
            <div className='col-lg-6'>
            </div>
        </div>
    )
}
