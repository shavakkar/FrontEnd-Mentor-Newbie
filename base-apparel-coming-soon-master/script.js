const submitBtn = document.getElementById("btn");
const img = document.getElementById("img");
const form = document.querySelector("form")
const input = document.querySelector("input")


// submitBtn.addEventListener("click", function(){
//     if(img.style.display === "none"){
//         img.style.display = "inline-flex";
//     }else{
//         img.style.display = "none";
//     }
// })

form.addEventListener("submit", validate);
form.addEventListener("click", validate);

const p = document.createElement("p");
p.setAttribute('class', 'error');

function validate(e){
    e.preventDefault();

    const inputValue = input.value;
    // console.log(inputValue);
    if(inputValue === ''){
        p.innerHTML = "Please fill the input!"
        img.classList.remove("hide")
        form.parentNode.append(p);
    }else if(!isEmail(inputValue)){
        p.innerHTML = "Incorrect Email!!! Please try once again";
        img.classList.remove("hide")
        form.parentNode.append(p);
    }
    else{
        img.classList.add("hide")
        p.remove()
    }
}

function isEmail(input){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
}