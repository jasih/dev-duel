import { useState } from 'react'
import style from '../screens/Inspect.module.css'
import Card from '../components/Card'

const inspectUserUrl = "http://localhost:3000/api/user/";

const Inspect = () => {

  const[data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [isShown, setIsShown] = useState(false)
  const [error, setError] = useState(null)

  const githubData =  () => {
    fetch(inspectUserUrl + username)
    .then(res => {
      if(!res.ok){
        throw Error("Username not found");
      }
      return res.json();
    })
    .then(data => {
      setData(data);;
      setIsShown(true);
      setError(null)
    }).catch(err => {
      setError(err.message)
      setIsShown(false);
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    githubData()
  }

  const handleChange = (e) => {
    let name = e.target.value
    setUsername(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder='username' onChange={handleChange} required />
        <button type="submit">Inspect</button>
      </form>
      <div className={style.container}>
      {error && <div>{error}</div>}
       {isShown && <Card data={data} />}
      </div>
    </div>
  )
}

export default Inspect