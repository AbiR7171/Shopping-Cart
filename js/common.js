// document.getElementById('phone-Plus').addEventListener('click', ()=>{
//     const phonePlus = document.getElementById('plus-number');
//     const phonePlusValueString = phonePlus.value
//     const phoneplusValue = parseInt(phonePlusValueString);
// });

function getValueById(value){
    const phoneNumber    = document.getElementById(value);
    const phoneValueString =  phoneNumber.innerText;
    const phoneValue = parseInt(phoneValueString);
    return phoneValue;
};

function setValue(elementId){
    const phoneValue = getValueById('phone-money');
    const caseValue  = getValueById('case-number');

    const subTotalValue  = phoneValue + caseValue;
    const elemntValue =  document.getElementById('subTotal');
    elemntValue.innerText = subTotalValue;
}