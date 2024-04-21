import './App.css';
import { useReducer, useRef } from 'react';
import Employees from './component/Employees';
import Team from './component/Team'

const reducer=(prvState,action)=>{
    switch(action.type){
      case 'add_new_Eploye':
        return{
          employees:[...prvState.employees,action.payload],
          teams:prvState.teams
        }
        case 'add_Member_toTeam':
          return{
            employees:prvState.employees,
            teams:[...prvState.teams,prvState.employees[action.payload-1]]
          }
        case 'remove_teamMember':
          return{
            employees:prvState.employees,
            teams:prvState.teams.filter((member)=>member.id!==action.payload)
          }
      default:
        return prvState;
    }
}
const initialState={
  employees:[
    {
      id:1,
      name:"uddesh",
      age:25
    },
    {
      id:2,
      name:"bunny",
      age:24
    },
    {
      id:3,
      name:"viju",
      age:24
    },
  ],
  teams:[]
}

function App() {
  const[data,dispatch]=useReducer(reducer,initialState);

  const nameRef=useRef(null);
  const ageRef=useRef(null);
  return (
    <div>
    <div className="App" style={{display:'flex', gap:'200px', marginLeft:'10%' }}>

      <Employees data={data} reducer={reducer} dispatch={dispatch}/>
      <Team  dispatch={dispatch}data={data}/>
      </div>
      <div className='addEmpInput'style={{marginLeft:'11%'}}>
      <input ref={nameRef} type='text' placeholder='Enter Your Name'/>
      <input ref={ageRef} type='text' placeholder='Enter Your Age'/>
      <button
        onClick={()=>{
          const name=nameRef.current.value;
          const age=ageRef.current.value;
          const newEmploye={
            id:data.employees.length+1,
            name,
            age 
          }
          dispatch({ type:'add_new_Eploye', payload:newEmploye})
        }}
      >Add Employee</button>
      </div>
    </div>
  );
}

export default App;
