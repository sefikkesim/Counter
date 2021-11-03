let count = 0;
let value = document.querySelector(".value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",  (e) =>{
    let actions = e.currentTarget.classList;
    if (actions.contains("increase")){
        count++;
    }
    else if (actions.contains("decrease")){
        count--;
    }else{
        count = 0;
    }
    value.textContent = count;
    if(count > 0){
    value.style.color = "green"  
    }
    if(count < 0){
        value.style.color = "red"
    }
    if( count == 0){
        value.style.color ="black"
    }
    }

    
    )
})
