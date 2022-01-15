let 이름 :string = "hong";
//이름 = 123;

let 이름배열 :string[] = ["hong","jin"];

let 이름객체 :{name? : string} = {name:'hong'};

let 유니온타입 :string[] |number = ["hong"];

type MyType = string|number

let test :MyType

function func(x:number) :number{
    //input : num, output: num
    return x*2
}

//튜플타입, 첫번째는 넘버 두번째는 불리언
type MyType2 = [number, boolean];

type Member = {
    [key : string] :string
}

let john : Member = {name : 'hong'};

class User{
    name :string;
    constructor(name :string){
        this.name = name;
    }
}