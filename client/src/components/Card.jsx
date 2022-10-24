import { useState } from "react";
import style from './Card.module.css'

const Card = ({ data }) => {

    return (
        <div className={style.container}>
            <div className={style.image}>
                <img src={data.avatar.url} alt="avatar" />
                <p>{data.bio}</p>
            </div>
            <div>
                <ul>
                    <li>username: {data.username}</li>
                    <li>name: {data.name}</li>
                    <li>location: {data.location}</li>
                    <li>titles: {data.titles.join(', ')}</li>
                    <li>fav-language: {data["favorite-language"]}</li>
                    <li>total-stars: {data["total-stars"]}</li>
                    <li>highest-star-count: {data["highest-star-count"]}</li>
                    <li>public-repos: {data.public_repos}</li>
                    <li>perfect-repos: {data["perfect-repos"]}</li>
                    <li>followers: {data.followers}</li>
                    <li>following: {data.following}</li>
                </ul>
            </div>
        </div>
    )
}

export default Card