


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













// function hamburgerMenu(){
//     let menu = document
// }

// menu.addEventListener('click',() =>{
//     mobile_nav.style.left = '100%';
//     mobile_nav.style.left = '0';
// })




// if (profileMedia.matches ) {
//     document.querySelection(".personal_info--img-1").style.display ="none";
  
   
// }

// var mainPage = document.querySelector('#Work').style.color = 'none';
//                document.querySelector('#blog').style.color = 'none';
//                document.querySelector('#contact').style.color = 'none';

// // var active = document.querySelector('#Work').style.color = 'red';
// //              document.querySelector('#blogs').style.color = 'red';
// //              document.querySelector('#contact').style.color = 'red';

// document.querySelector('#Work').addEventListener('click', function(){
//     if(mainPage){
//         document.querySelector('#Work').style.color = 'red';

//     }
   
// })

















