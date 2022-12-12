const btn = document.querySelector("#btn-menu")

btn.addEventListener("click", function(){
    const listarMenu =document.querySelector("#listarMenu")

    if(listarMenu.style.display == 'none'){
        listarMenu.style.display='flex';
    }else{
        listarMenu.style.display='none';
    }
})