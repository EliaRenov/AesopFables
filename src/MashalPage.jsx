import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'
import AesopPic from './assets/aesop.png'
import * as mashal from './MashalPage.module.css'
import { useState } from 'react'
import { loadContent } from './functions'

export default function MashalPage(props) {

    let [link, setLink] = useState(decodeURI(window.location.href))
    
    return (
        <div className={mashal.container}>
            <div className={mashal.content}>
                {loadContent()}
            </div>
            <div className={`${mashal.navContainer}`}>
                <a href='./'>
            <img src={AesopPic} alt="דיוקן של איזופוס" className={`${mashal.aesopPic}`} />

                </a>
                <h1 className={`${mashal.header}`}>משלי איזופוס</h1>
        <section className={`${mashal.buttons}`}>
                    <RandomMashalButton style="mashal"
                    link={link}
                    />
                    <CollectionMashalButton style="mashal"/>
                    <AboutMashalButton style="mashal"/>
        </section>
            </div>
        </div>
    )
}