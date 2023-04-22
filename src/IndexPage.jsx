import './IndexPage.css'
import AesopPic from './assets/aesop-with-background.png'
import Scroll from './assets/scroll.png'
import Warrior from './assets/warrior.png'
import Warrior2 from './assets/warrior2.png'
import Dice from './assets/dice.png'

export default function IndexPage() {

    return (
        <div className="container">
            <img src={Warrior} height="580px" className="backwards" />
            <div className="nav-container main">
                <h1 className="header main">משלי איזופוס</h1>
                <img src={AesopPic} alt="דיוקן של איזופוס" className="aesop-pic main" />
                <section className="buttons main">
                    <a href="" className="random main">
                    <img src={Dice}width="120px" />
                     משל אקראי 
                     <img src={Dice}width="120px" />
                    </a>
                    <a href="" className="collection main">
                    <img src={Scroll}width="120px" />    אוסף משלים
                    <img src={Scroll}width="120px" />  
                    </a>
                    <a href="" className="about main">
                        אודות
                    </a>
                </section>

                <footer className="footer main">
                    נוצר על ידי אליה רנוב
                </footer>


            </div>

            <img src={Warrior2} height="550px" />
        </div>
    )
}
