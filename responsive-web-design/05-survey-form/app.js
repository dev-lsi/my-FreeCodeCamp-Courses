
const form = document.querySelector('form');
form.addEventListener('submit',onSubmit);
 const checkboxes = document.querySelectorAll("checkbox");

function onSubmit(e){
    e.preventDefault();

    const formData = new FormData(form);
    const formdataKeys = Object.values(formData);
    
    console.log(formData.get('radioGrup1'));
    console.log(formData.get('option'));
    
    console.log(formData.get('checkMe1'));
    console.log(formData.get('checkMe2'));
    console.log(formData.get('checkMe3'));
    console.log(formData.get('checkMe4'));

    console.log("CHECKBOXES")
    console.log(formdataKeys)

}