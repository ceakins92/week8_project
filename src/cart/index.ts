import Item from "./Item"
import User from "./User"
import Shop from "./Shop"
import { v4 as uuidv4 } from 'uuid'
export { Item, User, Shop }
const itemA = new Item('Thanos Movie Prop',75000,'Autographed by Stan Lee/Josh Brolin. Authentic Movie Prop.  Only 2 made.', uuidv4())
const itemB = new Item('1/10 Deluxe Spider-Man Statue',300,'Marvel Comics Spider-Man 1/10 Scale Art, Limited Edition Statue. Only 100 made.', uuidv4())
const itemC = new Item('Life-Size Avengers Civil-War',30000,'Your heroes will come to life with this life-size set of 3. Captain America, War Machine, and Ironman.', uuidv4())

function Driver(){
    const shop = new Shop(itemA,itemB,itemC)
    const button = (document.getElementById('button')as HTMLButtonElement)
    button.addEventListener('click', (event)=>{
        event.preventDefault()
        Shop.loginUser(shop)  
    })
}
Driver()   