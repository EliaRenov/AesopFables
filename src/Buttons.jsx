import * as index from './IndexPage.module.css'
import * as mashal from './MashalPage.module.css'
import * as about from './AboutPage.module.css'
import { getRandomMashal } from './functions'

import Dice from './assets/dice.png'
import Scroll from './assets/scroll.png'
import Quill from './assets/quill.png'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

function RandomMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;
    if (props.style === 'about') style = about;

    let [randomMashalLink, setRandomMashalLink] = useState(getRandomMashal())

    let [link, setLink] = useState(
        window.location.href.slice(0, window.location.href.indexOf('?'))
        )

    return (
        <NavLink onClick={() => location = `./mashal?${randomMashalLink}`} to={`/mashal?${randomMashalLink}`} className="random">
            
            <img src={Dice} className={`${style.blackWhite} ${style.dice}`} />
            משל אקראי 
            <img src={Dice} className={`${style.blackWhite} ${style.dice}`} />
            
        </NavLink>
    )
}

function CollectionMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;
    if (props.style === 'about') style = about;
    
        return (
            <NavLink to="/collection" className="collection">
            <img src={Scroll} className={`${style.blackWhite} ${style.scroll}`}/>
                אוסף משלים
            <img src={Scroll} className={`${style.blackWhite} ${style.scroll}`}/>  
            </NavLink>
        )
}

function AboutMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;
    if (props.style === 'about') style = about;

    return (
        <NavLink to="/about" className={"about"} >
            <img src={Quill} className={`${style.blackWhite} ${style.backwards} ${style.quill} ${style.quillLeft}`} />
                אודות
            <img src={Quill} className={`${style.blackWhite} ${style.quill} ${style.quillRight}`} />
            </NavLink>
    )
}



export { RandomMashalButton, CollectionMashalButton, AboutMashalButton }