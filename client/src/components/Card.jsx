import { useState } from "react";
import style from './Card.module.css'

const Card = ({ data }) => {

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={data.avatar_url} alt="avatar" />
                <p>{data.bio == null ? "unknown" : data.bio}</p>
            </div>
            <div>
            <ul>
                <li><span className={style.word}>username:</span> {data.username == null ? "unknown" : data.username}</li>
                <li><span className={style.word}>name:</span> {data.name == null ? "unknown" : data.name}</li>
                <li><span className={style.word}>location:</span> {data.location == null ? "unknown" : data.location}</li>
                <li><span className={style.word}>titles:</span> {data.titles == null ? "unknown" : data.titles.join(', ')}</li>
                <li><span className={style.word}>fav-language:</span> {data["favorite-language"] == null ? "unknown" : data["favorite-language"]}</li>
                <li><span className={style.word}>total-stars:</span> {data["total-stars"] == null ? "unknown" : data["total-stars"]}</li>
                <li><span className={style.word}>highest-star-count:</span> {data["highest-starred"] == null ? "unknown" : data["highest-starred"]}</li>
                <li><span className={style.word}>public-repos:</span> {data["public_repos"] == null ? "unknown" : data["public_repos"]}</li>
                <li><span className={style.word}>perfect-repos:</span> {data["perfect-repos"] == null ? "unknown" : data["perfect-repos"]}</li>
                <li><span className={style.word}>followers:</span> {data.followers == null ? "unknown" : data.followers}</li>
                <li><span className={style.word}>following:</span> {data.following == null ? "unknown" : data.following}</li>
            </ul>
            </div>
        </div>
    )
}

export default Card