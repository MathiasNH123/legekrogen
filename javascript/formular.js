/* Variabler */
let succes = document.querySelector('.submit')
let form = document.querySelector('#create-profil')

/* her har jeg lavet et 'click' event der checker validiteten på min formular om kravene er opfyldt
og hvis den er udfyldt korrekt laver den en "alert" besked med succes derefter submiter den indholdet.
preventDefault er den som forhindre siden i at refresh inden succes beskeden er kommet igennem */
succes.addEventListener('click', (event) => { 
   if(form.checkValidity()){
event.preventDefault();
    alert("succes")
    form.submit();
}
});

