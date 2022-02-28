import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
        <div

            className='journal__entry-picture'
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80)'
            }}
        ></div>

        <div className='journal__entry-body'>
            <p className='journal__entry-title'>
                Un nuevo día
            </p>
            <p className='journal__entry-content'>
                lorefdsdsdsa
            </p>
        </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  )
}
