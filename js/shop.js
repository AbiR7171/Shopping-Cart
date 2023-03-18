
document.getElementById('phone-Plus').addEventListener('click', ()=>{
  const phonePlus = document.getElementById('plus-number');
  const phonePlusValueString = phonePlus.value
  const phoneplusValue = parseInt(phonePlusValueString);
 
  const newPhonePlusValue = phoneplusValue + 1;
  phonePlus.value = newPhonePlusValue;
  
  const phoneMOney =  document.getElementById('phone-money');
//   const phoneMOneyString = phoneMOney.value;
//   const phoneMoneyOrginal = parseFloat(phoneMOneyString);

     phoneMOney.innerText = 1219 * newPhonePlusValue;

   setValue('subTotal');
   const textId = document.getElementById('taxTotal');
   textId.innerText = setText()
    setTotal()

});
document.getElementById('phone-minus').addEventListener('click', ()=>{

  const phoneMinus = document.getElementById('plus-number');
  const phoneMinusValueString = phoneMinus.value
  const phoneMinusValue = parseInt(phoneMinusValueString);
 
  const newPhoneMinusValue = phoneMinusValue - 1;
  phoneMinus.value = newPhoneMinusValue;
  if(phoneMinus.value < 1){
    phoneMinus.value = 1;
    return
  }
  const phoneMOney =  document.getElementById('phone-money');
//   const phoneMOneyString = phoneMOney.value;
//   const phoneMoneyOrginal = parseFloat(phoneMOneyString);

     phoneMOney.innerText = 1219 * newPhoneMinusValue;
     setValue('subTotal');
     const textId = document.getElementById('taxTotal');
   textId.innerText = setText();
   setTotal()
});
document.getElementById('case-plus').addEventListener('click', ()=>{
    const casePlus = document.getElementById('case-input');
    const casePlusValueString = casePlus.value
    const caseValue = parseInt(casePlusValueString);
   
    const newCaseValue = caseValue + 1;
    casePlus.value = newCaseValue;
    
    const caseMOney =  document.getElementById('case-number');
  //   const phoneMOneyString = phoneMOney.value;
  //   const phoneMoneyOrginal = parseFloat(phoneMOneyString);
  
       caseMOney.innerText = 59 * newCaseValue;
       setValue('subTotal');
       const textId = document.getElementById('taxTotal');
   textId.innerText = setText()
   setTotal()
  
  });
  document.getElementById('case-minus').addEventListener('click', ()=>{

    const caseMinus = document.getElementById('case-input');
    const caseMinusValueString = caseMinus.value
    const caseMinusValue = parseInt(caseMinusValueString);
   
    const newCaseMinusValue = caseMinusValue - 1;
    caseMinus.value = newCaseMinusValue;
    if(caseMinus.value < 1){
      caseMinus.value = 1;
      return
    }
    const caseMOney =  document.getElementById('case-number');
  //   const phoneMOneyString = phoneMOney.value;
  //   const phoneMoneyOrginal = parseFloat(phoneMOneyString);
  
       caseMOney.innerText = 59 * newCaseMinusValue;
       setValue('subTotal');
       const textId = document.getElementById('taxTotal');
       textId.innerText = setText();

       
       setTotal()
      
      

  });

  