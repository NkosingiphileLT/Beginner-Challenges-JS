//Question 1

function SumofTwo(num1,num2) {
return num1 + num2;
}


console.log(SumofTwo (-3,-6))


//Question 2

function Hourstoseconds(hours){
    return hours * 60 * 60 ;
}
console.log(Hourstoseconds(2))

//Question 3

function RecPerimeter(CalcHie,CalcWid) {
    return (2*(CalcWid + CalcHie));
}

console.log(RecPerimeter(6,7));


//Question 4

function AreaofTriangle(TriHeight,TriBase){
    return 0.5 * TriBase * TriHeight;
}

console.log(AreaofTriangle(10,10));

// Question 5

function ExtendString(Extas){
    return Extas + 'Frontend'
}

console.log(ExtendString('Banana'));


//Question 6

function GreaterThan100(Sum1,Sum2){
    let Total = Sum1 + Sum2;
    if (Total > 100){
        console.log('True')
    }
    else {
        console.log('False')
    }
}
GreaterThan100(50,-60);



// Question 7

function EqualToorLess(num){
    if (num <= 0) {
        console.log('True')
    }
    else{
        console.log('False')
    }
}
EqualToorLess(-2);


//Question 8

function OppositeBoolean(bool){
    if (bool === true){
        console.log('False')
    }
else {
    console.log('True')
}
}
OppositeBoolean(true)

// Question 9

function IsnotZero(element){
    if( element === 0 ){
        console.log(false)
    }
    else{
        console.log(true)
    }
}
IsnotZero('True')

// Question 10

function Remainder(value1,value2){
    let sumdown = value1 % value2;
    return sumdown
}
console.log(Remainder(7,8))


//Question 11

function IsOdd(OEnum){
    if (OEnum % 2 === 0){
        console.log(false)
    }
    else{
        console.log(true)
    }
}
IsOdd(4)


//Question 12

function Otherwisereturn(OtherNum){
    if (OtherNum % 2 === 0){
        console.log(1)
    }
    else if (OtherNum% 2 !== 0){
        console.log(-1)
    }
}
Otherwisereturn(30)



//Question 13

function LoggedInSubScribed(Logged, Subscribe){
    if (Logged === 'Logged In' && Subscribe === 'Subscribed'){
        console.log(true)
    }
    else if (Logged === 'Logged In' && Subscribe === 'Unsubscribed'){
        console.log(false)
    }
    else if (Logged === 'Logged Out' && Subscribe === 'Subscribed'){
        console.log(false)
    }
    else if (Logged === '' && Subscribe === ''){
        console.log('Null')
    }
}
LoggedInSubScribed('Logged In','Unsubscribed')





