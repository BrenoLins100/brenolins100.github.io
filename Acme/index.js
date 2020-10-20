window.addEventListener('load',(()=>{
    var botao = document.querySelector('.hamburg');
    var fechar = document.querySelector('#fechar');
    
    botao.addEventListener('click',(()=>{
        var menumobile = document.querySelector('.menu-mobile');
        menumobile.classList.add('active');
    }))
    fechar.addEventListener('click',(()=>{
        var menumobile = document.querySelector('.menu-mobile');
        menumobile.classList.remove('active');
    }))
}))

