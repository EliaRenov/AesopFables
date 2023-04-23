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
            <img src={Warrior} height="500px" className={`${index.warrior} ${index.warrior1}`} />
            <div className={`${index.navContainer} ${index.main}`}>
                <img src={AesopPic} alt="דיוקן של איזופוס" className={`${index.aesopPic} ${index.main}`} />
                <h1 className={`${index.header} ${index.main}`}>משלי איזופוס</h1>
                <section className={`${index.buttons} ${index.main}`}>
                    <RandomMashalButton style="index"/>
                    <CollectionMashalButton style="index"/>
                    <AboutMashalButton style="index"/>
                </section>

                <footer className={`${index.footer} ${index.main}`}>
                    נוצר על ידי אליה רנוב
                </footer>


            </div>

            <img className={`${index.warrior} ${index.warrior2}`} src={Warrior2} height="480px"  />
            <img className={`${index.web1} ${index.backwards}`} src={Web} height="200px"/>
            <img className={index.web2} src={Web} height="200px" />
        </div>
    )
}
