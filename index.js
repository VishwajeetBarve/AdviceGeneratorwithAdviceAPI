const randombtn = document.querySelector(".random")
const quote = document.querySelector('.quote')
const advnum = document.querySelector("#advnum")

randombtn.addEventListener("click",function(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        advnum.innerText= "#" +data.slip.id;
        quote.innerText=  "" + data.slip.advice +""})
    
})




// 




// if you have to revise then check the promises and async and await vidoes of web dev simplified
