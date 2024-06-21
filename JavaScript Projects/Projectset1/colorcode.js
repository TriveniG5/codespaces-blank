const buttons=document.querySelectorAll(`.button`);

const body=document.querySelector("body");


buttons.forEach(function(button){
    console.log(button);
    button.addEventListener(`click`,function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id===`green`){
            body.style.backgroundColor=`magenta`;
        }
        if(e.target.id===`magenta`){
            body.style.backgroundColor=`green`;
        }
        if(e.target.id===`blue`){
            body.style.backgroundColor=`yellow`;
        }
        if(e.target.id===`yellow`){
            body.style.backgroundColor=`blue`;
        }
    })

});