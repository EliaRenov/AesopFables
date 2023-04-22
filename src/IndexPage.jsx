import './IndexPage.css'
// import AesopPic from './assets/aesop-with-background.png'
import AesopPic from './assets/aesop.png'
import Scroll from './assets/scroll.png'
import Warrior from './assets/warrior.png'
import Warrior2 from './assets/warrior2.png'
import Dice from './assets/dice.png'
import Quill from './assets/quill.png'

export default function IndexPage() {

    return (
        <div className="container">
            <img src={Warrior} height="580px" className="black-white warrior" />
            <div className="nav-container main">
                <h1 className="header main">משלי איזופוס</h1>
                <img src={AesopPic} alt="דיוקן של איזופוס" className="aesop-pic main" />
                <section className="buttons main">
                    <a href="" className="random main">
                    <img src={Dice} width="70px" className='black-white' />
                     משל אקראי 
                     <img src={Dice} width="70px" className='black-white' />
                    </a>
                    <a href="" className="collection main">
                    <img src={Scroll} width="60px" className='black-white'/>
                        אוסף משלים
                    <img src={Scroll} width="60px" className='black-white'/>  
                    </a>
                    <a href="" className="about main">
                    <img src={Quill} width="80px" className='black-white backwards' style={{marginRight: 2.5 + 'rem'}}/>
                        אודות
                    <img src={Quill} width="80px" className='black-white' style={{marginLeft: 2.5 + 'rem'}} />
                    </a>
                </section>

                <footer className="footer main">
                    נוצר על ידי אליה רנוב
                </footer>


            </div>

            <img className="warrior" src={Warrior2} height="550px" />
        </div>
    )
}
