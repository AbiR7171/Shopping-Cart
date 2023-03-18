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
};

function setText(){

    const subTotal = document.getElementById('subTotal').innerText;
    const textTotalString = (subTotal * 0.1).toFixed(2) ;
    const textTotal = parseFloat(textTotalString);
    return textTotal;
};

function setTotal(){

    const subTotal = getValueById('subTotal');
    const text = getValueById('taxTotal');

    const totalAmount = subTotal + text;
    
    const total = document.getElementById('Total');
       total.innerText = totalAmount;
};