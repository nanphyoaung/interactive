const how=document.querySelector(".how");
const thankGroup=document.querySelector(".thank-group");
const btns=document.querySelectorAll(".btn");
const number=document.querySelector("#number");
const submit=document.querySelector(".submit");
const rate=document.querySelector(".rate");

submit.addEventListener("click",()=>{
    thankGroup.classList.remove("hidden");
    how.classList.add("hidden")
});
rate.addEventListener("click",()=>{
    thankGroup.classList.add("hidden");
    how.classList.remove("hidden")
})
btns.forEach((rate)=>{
    rate.addEventListener("click",()=>{
        number.innerHTML=rate.innerHTML
    })
})