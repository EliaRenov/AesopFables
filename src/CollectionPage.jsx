import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'
import AesopPic from './assets/aesop.png'
import * as mashal from './MashalPage.module.css'
import { useState } from 'react'
import { loadAllMashals } from './functions'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"

export default function CollectionPage(props) {

    return (
        <div className={mashal.container}>
            <div className={mashal.content}>
                {loadAllMashals()}
            </div>
            <div className={`${mashal.navContainer}`}>
                <Link to='/'>
            <img src={AesopPic} alt="דיוקן של איזופוס" className={`${mashal.aesopPic}`} />

                </Link>
                <Link to='/'>
                <h1 className={`${mashal.header}`}>משלי איזופוס</h1>
                </Link>
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