import './IndexPage.css'
import AesopPic from './assets/aesop.png'
import Warrior from './assets/warrior.png'
import Warrior2 from './assets/warrior2.png'
import Web from './assets/web-2.png'
import Grass from './assets/grass.png'
import Background from './assets/background.png'
import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'


export default function IndexPage() {

    return (
        <div className="container">
            <img src={Warrior} height="500px" className="warrior warrior-1" />
            <div className="nav-container main">
                <img src={AesopPic} alt="דיוקן של איזופוס" className="aesop-pic main" />
                <h1 className="header main">משלי איזופוס</h1>
                <section className="buttons main">
                    <RandomMashalButton />
                    <CollectionMashalButton />
                    <AboutMashalButton />
                </section>

                <footer className="footer main">
                    נוצר על ידי אליה רנוב
                </footer>


            </div>

            <img className="warrior warrior-2" src={Warrior2} height="480px"  />
            <img className="web-1 backwards" src={Web} height="200px"/>
            <img className="web-2" src={Web} height="200px" />
            {/* <img className="grass" src={Grass} /> */}
        </div>
    )
}
