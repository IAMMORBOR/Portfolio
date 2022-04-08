


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

const mediaCondition = window.matchMedia( '( min-width: 600px )' )
 if (mediaCondition.matches){
     
 }




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

















