import Shop from "./Shop";

export default class Item{
    constructor(
        private _id: string,
        private _name: string,
        private _price: number,
        private _desc: string
    ){}
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    addToCart(){
        Shop.myUser.cart.push(this)
    }
    reload(){
        let container = document.getElementById("cart")
        let content = container.innerHTML
        container.innerHTML= content; 
    }
    itemElement():HTMLDivElement{
        const div = document.createElement('div')
        const button = document.createElement('button')
        const list = document.createElement('ul')
        const listItemA = document.createElement('li')
        const listItemB = document.createElement('li')
        const listItemC = document.createElement('li')
        listItemA.innerText = this.name
        listItemB.innerText = this.desc
        listItemC.innerText = `$${this.price.toString()}`
        list.append(listItemA,listItemB,listItemC)
        button.addEventListener('click',()=>{
            this.addToCart()
        })
        div.append(list,button)
        return div
    }
}