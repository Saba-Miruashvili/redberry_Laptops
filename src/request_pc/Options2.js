import React, { useEffect, useState } from "react"
import "./Reg1.css"
// import './AddNote.css'

const Options = (props) => {
  const [teams, setTeams] = useState([])

  const fetchData = () => {
    fetch(props.url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTeams(data.data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
        
        <select id={props.DropDown}>    
        <option value="" disabled selected hidden>{props.defaultOption}</option>
          {teams.map(team => (
            <option key={team.id}>{team.name}</option>
          ))}
        </select>
    </div>
  )
}

export default Options; 