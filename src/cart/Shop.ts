import Item from "./Item";
import User from "./User";

export default class Shop{
    private static _myUser: User;
    
    private _items: Item[] = [];
    constructor(
        private _itemA: Item,
        private _itemB: Item,
        private _itemC: Item,
    ){
        this._items.push(this._itemA)
        this._items.push(this._itemB)
        this._items.push(this._itemC)
        this.showItems()        
        this.updateCart()
        
    }
    public static get myUser(): User {
        return Shop._myUser;
    }
    public static set myUser(value: User) {
        Shop._myUser = value;
    }   
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public get itemA(): Item {
        return this._itemA;
    }
    public set itemA(value: Item) {
        this._itemA = value;
    }
    public get itemB(): Item {
        return this._itemB;
    }
    public set itemB(value: Item) {
        this._itemB = value;
    }
    public get itemC(): Item {
        return this._itemC;
    }
    public set itemC(value: Item) {
        this._itemC = value;
    }

    showItems():HTMLDivElement{
        const div = (document.querySelector('.shop') as HTMLDivElement)
        for(let e of this._items){
            div.append(this._items.[e].toString())
        }
        return div
    }
    updateCart(){
        if(Shop.myUser == undefined || Shop.myUser == null){
            const div = (document.querySelector('.cart') as HTMLDivElement)
            return div

        }else if (Shop.myUser != undefined && Shop.myUser != null && Shop.myUser.cart.length == 0){
            const div = (document.querySelector('.cart') as HTMLDivElement)
            div.innerHTML = '<p>Your Cart is Empty</p>'
            return div
        }else{
            
            return Shop.myUser.cartHTMLElement()
            
        }

    }
    static loginUser(shop:Shop):User{
            
        
            const user = User.createUser()
            Shop.myUser = user
            shop.updateCart()
            return Shop.myUser
        
        
        }
        
}