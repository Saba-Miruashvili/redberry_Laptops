import React, { useEffect, useState } from "react"
import "./Reg1.css"
// import './AddNote.css'

const Options = (props) => {
  const [teams, setTeams] = useState([])
  const [value, setValue] = useState("");
  const Handlechange = (e) => {
    setValue(e.target.value);
    localStorage.setItem(props.selectInputValue, e.target.value);
}
useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  setValue(localStorage.getItem(props.selectInputValue));}, []);


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
        <select value={value} onChange={Handlechange} id="options">
        <option value="" disabled selected hidden>{props.defaultOption}</option>
          {teams.map(team => (
            <option key={team.id}>{team.name}</option>
          ))}
        </select>
    </div>
  )

}

export default Options; 