
function changeBg(){
    var navBar = document.getElementById('nav');
    var scrollValue = window.scrollY;
    if(scrollValue<600){
        navBar.classList.remove('bgColor');
    }
    else{
        navBar.classList.add('bgColor');
    }
}
window.addEventListener('scroll' , changeBg);

var btn=document.getElementById('btn');
btn.addEventListener('click' , function(e){
     e.preventDefault()
     var name=document.getElementById('name').value ;
     var phone=document.getElementById('phone').value ;
     var email=document.getElementById('email').value ;
     var subject=document.getElementById('subject').value ;
     var message=document.getElementById('message').value ;
     var body ='name: ' +name + '<br/> email: ' + email + '<br/> subject' + '<br/> phone'+ phone + '<br/> message'+ message;
     Email.send({
        Host : "smtp.gmail.com", 
        Username : "birlaani@gmail.com",
        Password : "opzluotujhkzfijf",
        To : 'birlaani@gmail.com',
        Subject:subject,
        From : email,
        Body : body
    }).then(
      message => alert(message)
    ); 

})