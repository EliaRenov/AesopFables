import { mashals, mashalIndices } from "./mashalsDB";
import React, { useState } from 'react'
import * as mashal from './MashalPage.module.css'

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

export function loadContent(name) {
    let content = fetchContent()

    let heading = content[1][0]

    let paragraphs = content[1].slice(1).map(para => {
        return <p className={mashal.para} key={para}>{para}</p>
    })

    // for (let i = 1; i < content[1].length; i++) {
    //     const paragraph = document.createElement('p')
    //     paragraph.textContent = content[1][i];

    //     content.append(paragraph)
    // }

    return (
        <>
            <h1 className={mashal.mashalTitle}>
                {heading}
            </h1>
            {paragraphs}


        </>
    )
    
}