import React from 'react'
import './teamMember.css'

function TeamMember({name,age,id,dispatch}) {
  return (
    <div className='teamMemver' style={{
    }}>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <button onClick={()=>{
            dispatch({
                type:'remove_teamMember',
                payload:id
            })
        }}>Remove</button>
    </div>
  )
}

export default TeamMember