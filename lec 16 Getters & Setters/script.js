// getters [= special method that makes a property readable]
// setters [= special method that makes a property writable]

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;

    }
    set width(newwidth){
        if(newwidth>0){
            this._width = newwidth
        }
        else{
            console.error("width Must be a positive number")
        }
    }
    set height(newheight){
        if(newheight>0){
            this._height = newheight
        }
        else{
            console.error("height Must be a positive number")
        }
    }
    get width(){
        return this._width
    }
    get height(){
        return this._height
    }
    get area(){
        return this._height*this._width;
    }
}

const rectangle =  new Rectangle(4,5)
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)