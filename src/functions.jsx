import { mashals, mashalIndices } from "./mashalsDB";
import React, { useState } from 'react'
import * as mashal from './MashalPage.module.css'
import Bear from './assets/animals/bear.png'
import Bunny from './assets/animals/bunny.png'
import Duck from './assets/animals/duck.png'
import Eagle from './assets/animals/eagle.png'
import Fox from './assets/animals/fox.png'
import Frog from './assets/animals/frog.png'
import Goat from './assets/animals/goat.png'
import Horse from './assets/animals/horse.png'
import Lion from './assets/animals/lion.png'
import Scorpion from './assets/animals/scorpion.png'
import Sheep from './assets/animals/sheep.png'
import Snake from './assets/animals/snake.png'
import Turtle from './assets/animals/turtle.png'
import Wolf from './assets/animals/wolf.png'

export function clear() {
    while (document.querySelector("root").firstChild) {
        document.querySelector("root").firstChild.remove()
    }
}

export function RandomImg() {
    const randomNum = Math.floor(Math.random() * 14)
    const animals = [Bear, Bunny, Duck, Eagle, Fox, Frog, Goat, Horse, Lion, Scorpion, Sheep, Snake, Turtle, Wolf]
    return (
        <img
        src={animals[randomNum]}
        alt={`${animals[randomNum]} drawing`} className={mashal.animal}
        />
        )
}

export function getRandomMashal() {
    const mashalsKeys = Object.keys(mashals);
    const mashalIndex = Math.floor(mashalsKeys.length * Math.random());
    const mashalTitle = mashalsKeys[mashalIndex];
    return mashalTitle;
}

function getMashalNameFromURL() {
    const link = window.location.href

    const questionMarkLocation = link.indexOf('?') + 1

    const mashalNameURI = link.slice(questionMarkLocation)

    const mashalName = decodeURI(mashalNameURI)

    return mashalName
}

export function fetchContent() {
    const mashalTitle = getMashalNameFromURL();
    return mashals[mashalTitle]
}

function clearNikkud(text) {
    return text.replace(/[ְֱֲֳִֵֶַָֹֻּׁׂ\u0591-\u05c7]/g, "")
}

export function loadAllMashals() {

     let content = [];

     for (let mashal in mashals) {
        content.push(loadContent(mashals[mashal]))
     }

     console.log(content)
    return content    
}

export function loadContent(content = fetchContent()) {
    let heading = content[1][0]
    let paragraphs = content[1].slice(1).map(para => {
        return <p className={mashal.para} key={para}>{
            // clearNikkud(para)
            para
            }
            </p>
    })
    
    

    return (
        <>
        <div className="mashal">
            <a href={`./mashal?${mashalIndices[content[0]]}`}>
                <h1 className={ mashal.mashalTitle}> 
                {clearNikkud(heading)}
            </h1>
            </a>
            {paragraphs}
        </div>
        </>
    )
    
}