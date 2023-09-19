import React from 'react'
import { Link } from 'react-router-dom'

import style from './Home.module.css'

const Home = () => {

  return (
    <div className={style.container}>
    <h1>Welcome to Dev-Duel!</h1>
    <div className={style.btn_con}>
    <div className={style.btn_con1}>
        <Link to="/inspect"><button>Inspect</button></Link>
        <p>Look up a fellow dev's Github info.</p>
    </div>
    <div className={style.mid_line}>
    </div>
    <div className={style.btn_con2}>
        <Link to="/duel"><button>Duel</button></Link>
        <p>Pick two devs to go head to head.</p>
    </div>
    </div>
    </div>
  )
}

export default Home