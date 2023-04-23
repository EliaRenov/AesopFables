import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'
import AesopPic from './assets/aesop.png'
import * as mashal from './MashalPage.module.css'
import { useState } from 'react'
import { loadAllMashals } from './functions'

export default function CollectionPage(props) {

    
    
    return (
        <div className={mashal.container}>
            <div className={mashal.content}>
                {loadAllMashals()}
            </div>
            <div className={`${mashal.navContainer}`}>
                <a href='./'>
            <img src={AesopPic} alt="דיוקן של איזופוס" className={`${mashal.aesopPic}`} />

                </a>
                <a href='./'>
                <h1 className={`${mashal.header}`}>משלי איזופוס</h1>
                </a>
        <section className={`${mashal.buttons}`}>
                    <RandomMashalButton style="mashal"
                    />
                    <CollectionMashalButton style="mashal"/>
                    <AboutMashalButton style="mashal"/>
        </section>
            </div>
        </div>
    )
}