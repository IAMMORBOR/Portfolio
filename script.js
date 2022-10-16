


var initPage = document.querySelector('#post_section').style.display= 'none';
    document.querySelector('#hidden_page').style.display = 'none';

 function closePage(){
     document.querySelector('#post_section').style.display= 'none';
    document.querySelector('#hidden_page').style.display = 'none';
    
}

document.querySelector('#post-link').addEventListener('click', function(){
    if(initPage){
        document.querySelector('#post_section').style.display= 'flex';
            document.querySelector('#hidden_page').style.display= 'block';
        }
})

document.querySelector('#hidden-link').addEventListener('click', closePage);

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






























