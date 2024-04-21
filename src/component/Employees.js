import React from 'react'
import EmployeCard from './EmployeCard'

function Employees({data,reducer,dispatch}) {
  return (
    <div>
      <h1>Employees</h1>
       {data.employees.map((val)=><EmployeCard name={val.name} age={val.age} id={val.id} dispatch={dispatch}/>)}
    </div>
  )
}

export default Employees;