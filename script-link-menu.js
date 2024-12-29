
const links = document.querySelectorAll('.menu-itens a');
const iframe = document.querySelector('.itens-iframe');

links.forEach(link =>{
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const href = link.getAttribute('href');
        
        if(!href || href === "#"){
            iframe.src = "vazio-selecione.html";
        } else {
            iframe.src = href;
        }
    })
})