import { useState } from 'react'
import { duelUsers } from '../services/userService';
import Card from '../components/Card';
import style from './Duel.module.css'

const duelUsersUrl = "http://localhost:3000/api/users?";

const Duel = () => {

  const [data, setData] = useState([{}, {}]);
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [isShown, setIsShown] = useState(false)
  const [error, setError] = useState(null)

  const githubData = () => {
    fetch(duelUsersUrl + `username=${username1}&username=${username2}`)
      .then(res => {
        if (!res.ok) {
          throw Error("One or both of the usernames provided does not exist! Please try again.");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
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

  const handleChange1 = (e) => {
    let name = e.target.value
    setUsername1(name)
  }

  const handleChange2 = (e) => {
    let name = e.target.value
    setUsername2(name)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={style.texts}>
          <input type="text" name="username" placeholder="username" onChange={handleChange1} required />
          <input type="text" name="username" placeholder="username" onChange={handleChange2} required />
        </div>
        <button type="submit">Duel</button>
      </form>
      <div className={style.container}>
        {error && <div>{error}</div>}
        {isShown &&
          <div id={style.win_con1} >
            <h1>{data[0].titles.join(', ') >= data[1].titles.join(', ') ? "WINNER" : "LOSER"}</h1>
            <Card data={data[0]} />
          </div>
        }
        {isShown &&
          <div id={style.win_con2} >
            <h1>{data[1].titles.join(', ') >= data[0].titles.join(', ') ? "WINNER" : "LOSER"}</h1>
            <Card data={data[1]} />
          </div>
        }
      </div>
    </div>
  )
}

export default Duel