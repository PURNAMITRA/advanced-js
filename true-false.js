//Falsy
//0
//""
//undefined
//null
//NaN
//false

//Truthy
//'0'
//' '
//[]
//{} //when object is created
let name=NaN;
console.log(name);
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}