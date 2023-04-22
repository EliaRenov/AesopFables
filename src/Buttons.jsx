import Dice from './assets/dice.png'
import Scroll from './assets/scroll.png'
import Quill from './assets/quill.png'

function RandomMashalButton() {
    return (
        <a href="" className="random main">
            <img src={Dice} width="70px" className='black-white' />
            משל אקראי 
            <img src={Dice} width="70px" className='black-white' />
        </a>
    )
}

function CollectionMashalButton() {
        return (
            <a href="" className="collection main">
            <img src={Scroll} width="60px" className='black-white'/>
                אוסף משלים
            <img src={Scroll} width="60px" className='black-white'/>  
            </a>
        )
}

function AboutMashalButton() {
    return (
        <a href="" className="about main">
            <img src={Quill} width="80px" className='black-white backwards' style={{marginRight: 2.5 + 'rem'}}/>
                אודות
            <img src={Quill} width="80px" className='black-white' style={{marginLeft: 2.5 + 'rem'}} />
            </a>
    )
}



export { RandomMashalButton, CollectionMashalButton, AboutMashalButton }