const form=document.querySelector(`form`)

form.addEventListener(`submit`,function(e){
e.preventDefault()

const height=parseint(document.querySelector(`#height`).value)

const weight=parseInt(document.querySelector(`#weight`).value)

const results=document.querySelector(`#weight`)

if(height===`` || height < 0 || isNaN(height)){

    results.innerHTML=`Please enter a valid height ${height}`;
    
}
if(weight===`` || weight < 0 || isNaN(weight) ){

    results.innerHTML=`Please enter a valid ${weight}`;
}

})