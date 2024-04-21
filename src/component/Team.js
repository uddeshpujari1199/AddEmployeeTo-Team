import React from 'react'
import TeamMember from './TeamMember'

function Team({data,dispatch}) {
  const{teams}=data
  return (
    <div>
      <h1>Team</h1>
      {/* <h3 className='pleaseadd' style={{display:'block'}}>Please add Employee</h3> */}
    {teams.map((emp)=><TeamMember  dispatch={dispatch} className={'pleaseadd'} id={emp.id}name={emp.name} age={emp.age}/>)}
    <h2>Avrage Age : {data.teams.reduce((acc,current)=>acc+=current.age,0)/data.teams.length}</h2>
    </div>
  )
}

export default Team