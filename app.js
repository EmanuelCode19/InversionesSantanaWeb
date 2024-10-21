const btn = document.getElementById('button');
const form = document.getElementById('form');
const spiner = document.querySelector('.sk-chase');
const input = document.querySelector('.input');


const inputemail = document.getElementById('input-email');


document.getElementById('form')
.addEventListener('submit', function(event) {
      event.preventDefault();
   if(inputemail.value === ""){
    error("El campo no puede estar vacio");
    return;
   }else{
    btn.value = 'Sending...';
      
    spiner.classList.remove('hidden')
    
 
    const serviceID = 'default_service';
    const templateID = 'template_mjw8pjd';
 
    emailjs.sendForm(serviceID, templateID, this)
     .then(() => {
       btn.value = 'Send Email';
       form.reset();
       alert('Mensaje de suscripcion, enviado');
       spiner.classList.add('hidden')
     }, (err) => {
       btn.value = 'Send Email';
       alert(JSON.stringify(err));
     });
   }
  
});

function error(mensaje){
    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('alerta')
    form.insertBefore(error,input);

    setTimeout(() => {
        error.remove()
    }, 3000);
}
