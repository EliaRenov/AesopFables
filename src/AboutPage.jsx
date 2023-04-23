// import './IndexPage.css'
import AesopPic from './assets/aesop.png'
import Warrior from './assets/warrior.png'
import Warrior2 from './assets/warrior2.png'
import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'

export default function AboutPage() {
    return (
        <div className="container">
        <img src={Warrior} height="580px" className="black-white warrior" />
        <div className="nav-container main">
            <h1 className="header main">אודות האתר</h1>
            <img src={AesopPic} alt="דיוקן של איזופוס" className="aesop-pic main" />
            <section className="buttons main">
                <RandomMashalButton />
                <CollectionMashalButton />
                <AboutMashalButton />
            </section>

            <footer className="footer main">
                נוצר על ידי אליה רנוב
            </footer>


        </div>

        <img className="warrior" src={Warrior2} height="550px" />
    </div> 
    )

}
