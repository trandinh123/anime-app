import React from 'react'

function Spinner() {
  return (
    <div className='spinner'>
      
    <style jsx>{`
      .spinner {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        border: .5rem solid #f1f1f1;
        border-top: .5rem solid deepskyblue;
        animation: spin 1s linear infinite;
       
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
    </div>
  )
}

export default Spinner