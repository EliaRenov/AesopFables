import AesopPic from './assets/aesop.png'
import Warrior from './assets/warrior.png'
import Warrior2 from './assets/warrior2.png'
import Web from './assets/web-2.png'
import Grass from './assets/grass.png'
import Background from './assets/background.png'
import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'
import * as index from './IndexPage.module.css'


export default function IndexPage() {
    return (
        <div className={index.container}>
            <img src={Warrior} className={`${index.warrior} ${index.warrior1}`} />
            <div className={`${index.navContainer}`}>
                
                <h1 className={`${index.header}`}>משלי <img src={AesopPic} alt="דיוקן של איזופוס" className={`${index.aesopPic} ${index.main}`} /> איזופוס</h1>
                <section className={`${index.buttons}`}>
                    <RandomMashalButton style="index"/>
                    <CollectionMashalButton style="index"/>
                    <AboutMashalButton style="index"/>
                </section>

                <footer className={`${index.footer}`}>
                    נוצר על ידי אליה רנוב
                </footer>


            </div>

            <img className={`${index.warrior} ${index.warrior2}`} src={Warrior2} />
        </div>
    )
}
