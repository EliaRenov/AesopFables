import AesopPic from './assets/aesop.png'
import Woman from './assets/woman.png'
import Woman2 from './assets/woman2.png'
import Web from './assets/web-2.png'
import Grass from './assets/grass.png'
import Background from './assets/background.png'
import { RandomMashalButton, CollectionMashalButton , AboutMashalButton } from './Buttons'
import * as about from './AboutPage.module.css'


export default function IndexPage() {
    return (
        <div className={about.container}>
            <img src={Woman} className={`${about.woman} ${about.woman1}`} />
            <nav className={`${about.navContainer}`}>
                <a href="./" className={`${about.header}`}>
                    <h1>משלי</h1>
                    <img src={AesopPic} alt="דיוקן של איזופוס" className={about.aesopPic} />
                    <h1>איזופוס</h1>
                </a>
                <section className={`${about.buttons}`}>
                    <CollectionMashalButton style="about"/>
                    <RandomMashalButton style="about"/>
                </section>

            </nav>
            <section className={about.aboutText}>
                    <h1 className={about.aboutTitle}>אודות</h1>
                <p>
                משלי איזופוס הם אוסף של משלים המיוחס לאיזופוס, עבד ומספר סיפורים שחי ביוון העתיקה בין 620 ל-564 לפנה"ס. המשלים ברובם קצרים ובמרכזם בעלי חיים.
                </p>
            <h1>
                תרגום
            </h1>
            <p>
            שלמה שפאן היה מורה ומפקח, סופר, משורר ומתרגם ישראלי. פעל להפצת השפה והתרבות העברית, היה חבר האקדמיה ללשון העברית, תרגם מספרות יוון העתיקה, חתן פרס טשרניחובסקי לתרגומי מופת פעמיים.
            </p>
            <h1>
                בניית האתר
            </h1>
            <p>
                אליה רנוב
            </p>
            </section>

            <img className={`${about.woman} ${about.woman2}`} src={Woman2} />
        </div>
    )
}
