const drop = document.getElementsByClassName('caixa');

for(i=0; i<drop.length; i++){
    drop[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}