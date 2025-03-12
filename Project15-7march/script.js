// setTimeout(()=>{
//     console.log("hello")
// },6000)

// setInterval(()=>{
//     console.log('hi')
// },1000)
// let interval = setInterval(()=>{
//     console.log('hi')
// },1000)
// clearInterval(interval)

let startEle = document.getElementById('startTime')
let stopEle = document.getElementById('stoptime')
let resteEle = document.getElementById('resettime')

let sec=0;
let min=0;
let millisec=0;
let interval;

startEle.addEventListener('click',startTime);

function startTime(){
    interval = setInterval(()=>{
        millisec+=10
        if(millisec==1000){
            millisec=0;
            sec++
        }
        if(sec==60){
            sec=0
            min++
        }
        document.getElementById('display').innerText=`${min<10?'0':''}${min} : ${sec<10?'0':''}${sec} : ${millisec<100?'0':''}${millisec}`
   
    },10)  
 }

stopEle.addEventListener('click',stopTime)

function stopTime(){
    clearInterval(interval);
}
resteEle.addEventListener('click',()=>{
    clearInterval(interval)
    min=0;
    sec=0;
    millisec=0;
    document.getElementById('display').innerText=`00 : 00 : 000`
})

let str = "my name is avinash"
document.getElementById("text").innerText=str.trim()
let flag = false;
function textTyped(){
    if(!flag){
        flag=true;
        startTime();
    }
let ele = document.getElementById('container')
ele.style.border="10px solid blue";
let typetext = document.getElementById('typedText').value.trim()
// console.log(typetext)
let len = typetext.length;
console.log(len)
if(typetext[len-1]!=str[len-1]){
    ele.style.border="10px solid red"
}
if(typetext==str){
    stopTime()
    ele.style.border="10px solid green";

}
}