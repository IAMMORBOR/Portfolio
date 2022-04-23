document.querySelector('#contact').style.color = 'red';

function openMenu(){
    var menuPage = document.querySelector ('#mobile_navBar').style.display = 'none';
}
document.querySelector('#hambugerMenu').addEventListener ('click', function(){
    if(openMenu){
        var menuPage = document.querySelector ('#mobile_navBar').style.display = 'block';
    }
    
})
function closeMenu(){
    var crossPage = document.querySelector ('#crossMenu').style.display = 'block';
}
document.querySelector('#crossMenu').addEventListener ('click', function(){
    if(closeMenu){
        var menuPage = document.querySelector ('#mobile_navBar').style.display = 'none';
    }
    
})