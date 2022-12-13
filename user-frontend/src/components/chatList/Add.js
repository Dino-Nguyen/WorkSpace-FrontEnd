import React from 'react'

export default function Add({children , isOpen, onCancel, title}) {
    if (!isOpen){
        return null
    }
  return (
    <>
    <div className='overlay'></div>
    <div className='add__modal'>
        <div style={{textAlign:"left", marginBottom:"20px"}}>{title}</div>
        <div>{children}</div>
        <div className='btn__group'>
            <button>Confirm</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </div>
    </>
  )
}
