import './IndexPage.css'
import AesopPic from './assets/aesop-with-background.png'
import Scroll from './assets/scroll.png'

export default function IndexPage() {

    return (
        <>

            <div className="container main">
                <h1 className="header main">משלי איזופוס</h1>
                <img src={AesopPic} alt="דיוקן של איזופוס" className="aesop-pic main" />
                <section className="buttons main">
                    <a href="" className="random main">
                    <img src={Scroll} height="30px" width="30px" /> משל אקראי 
                    </a>
                    <a href="" className="collection main">
                        אוסף משלים
                    </a>
                    <a href="" className="about main">
                        אודות
                    </a>
                </section>

                <footer className="footer main">
                    נוצר על ידי אליה רנוב
                </footer>


            </div>


        </>
    )
}
