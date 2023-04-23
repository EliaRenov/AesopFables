import { mashals, mashalIndices } from "./mashalsDB";
import React, { useState } from 'react'
import * as mashal from './MashalPage.module.css'

export function clear() {
    while (document.querySelector("root").firstChild) {
        document.querySelector("root").firstChild.remove()
    }
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

export function loadContent() {
    let content = fetchContent()

    let heading = content[1][0]

    let [paragraphs, setParagraphs] = useState(content[1].slice(1).map(para => {
        return <p className={mashal.para} key={para}>{
            // clearNikkud(para)
            para
            }
            </p>
    }))

    return (
        <>
            <h1 className={mashal.mashalTitle}>
                {clearNikkud(heading)}
            </h1>
            {paragraphs}
        </>
    )
    
}