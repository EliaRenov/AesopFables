import * as index from './IndexPage.module.css'
import * as mashal from './MashalPage.module.css'
import { getRandomMashal } from './functions'

import Dice from './assets/dice.png'
import Scroll from './assets/scroll.png'
import Quill from './assets/quill.png'
import { useEffect, useState } from 'react'

function RandomMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;

    let [randomMashalLink, setRandomMashalLink] = useState(getRandomMashal())

    let [link, setLink] = useState(
        window.location.href.slice(0, window.location.href.indexOf('?'))
        )

    return (
        <a href={`./mashal?${randomMashalLink}`} className="random">
            <img src={Dice} className={`${style.blackWhite} ${style.dice}`} />
            משל אקראי 
            <img src={Dice} className={`${style.blackWhite} ${style.dice}`} />
        </a>
    )
}

function CollectionMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;
    
        return (
            <a href="./collection" className="collection">
            <img src={Scroll} className={`${style.blackWhite} ${style.scroll}`}/>
                אוסף משלים
            <img src={Scroll} className={`${style.blackWhite} ${style.scroll}`}/>  
            </a>
        )
}

function AboutMashalButton(props) {
    let style;

    if (props.style === 'index') style = index;
    if (props.style === 'mashal') style = mashal;

    return (
        <a href="./about" className={"about"} >
            <img src={Quill} className={`${style.blackWhite} ${style.backwards} ${style.quill} ${style.quillLeft}`} />
                אודות
            <img src={Quill} className={`${style.blackWhite} ${style.quill} ${style.quillRight}`} />
            </a>
    )
}



export { RandomMashalButton, CollectionMashalButton, AboutMashalButton }