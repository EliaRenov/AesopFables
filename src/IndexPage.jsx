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
            <nav className={`${index.navContainer}`}>
                <div className={`${index.header}`}>
                    <h1>משלי</h1>
                    <img src={AesopPic} alt="דיוקן של איזופוס" className={index.aesopPic} />
                    <h1>איזופוס</h1>
                </div>
                <section className={`${index.buttons}`}>
                    <CollectionMashalButton style="index"/>
                    <RandomMashalButton style="index"/>
                    <AboutMashalButton style="index"/>
                </section>

            </nav>

            <img className={`${index.warrior} ${index.warrior2}`} src={Warrior2} />
        </div>
    )
}
