

  //common function for price of each product
function priceCalled(priceId){
  const innerValueInput = document.getElementById(priceId);
  const innerValueString =innerValueInput.innerText;
  const innerValue = parseFloat(innerValueString)
  return innerValue;
}



  //common function to calculate total price

function totalPriceCalculate(totalId){
  const totalPriceInput =document.getElementById(totalId);
  const totalPriceString =totalPriceInput.innerText;
  const totalPrice = parseFloat(totalPriceString)
  return totalPrice;
}
//setValue

function setValueFinal(totalId,finalPrice){
  const totalPriceInput =document.getElementById(totalId);
  totalPriceInput.innerText =finalPrice;
}
function setNameValue(nameId){
  const setTextInputId = document.getElementById(nameId);
  const setTextInput= setTextInputId.innerText;
  const setTableValue = document.getElementById('selected-items');
  const count = setTableValue.childElementCount;
  const p= document.createElement('p')
  p.innerText = `${count+1}.${setTextInput}`;
  setTableValue.appendChild(p);
}

function finalPriceWithoutDiscount(elementId,finalPrice){
  const finalPriceWithoutDiscountInput = document.getElementById(elementId)
  const finalPriceWithoutDiscountString = finalPriceWithoutDiscountInput.innerText;
  const previousFinalPriceWithoutDiscount = parseFloat(finalPriceWithoutDiscountString)
  const finalPriceWithoutDiscount = finalPrice;
  console.log(finalPriceWithoutDiscount);
  finalPriceWithoutDiscountInput.innerText = finalPriceWithoutDiscount;
  if(finalPriceWithoutDiscount>0){
    const applyInput= document.getElementById('purchase')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
  }
}

function finalPriceWithDiscount(finalPrice){
  //discount price calculation
  if(finalPrice>=200){
    const applyInput= document.getElementById('btn-button')
    applyInput.style.backgroundColor='#E527B2';
    applyInput.style.color='white'
    applyInput.removeAttribute("disabled","");
   
    //get input as SELL20
    document.getElementById('btn-button').addEventListener('click',function(){
      const getInputValueString =  document.getElementById('promo-code');
    const getInputValue = getInputValueString.value;
    getInputValueString.value="";
    
    if(getInputValue==='SELL200'){
    
      //calculate after giving 20% discount
      const totalPriceInput =document.getElementById('total-price');
      const totalPriceString =totalPriceInput.innerText;
      const totalPrice = parseFloat(totalPriceString)
      const discountPrice = totalPrice*0.2;
      console.log(discountPrice.toFixed(2));
      const discountPriceTwoNumber= (discountPrice.toFixed(2))
      
      //set the value to discount 
      const discountValueInput = document.getElementById('discount')
      discountValueInput.innerText =discountPriceTwoNumber

    //set the discount value in final total
     const finalTotalWithDiscountInput = document.getElementById('final-price')
     const finalAmount = totalPrice- discountPriceTwoNumber;
     const finalAmountTwoNumber =finalAmount.toFixed(2)
     console.log(finalAmountTwoNumber);
     finalTotalWithDiscountInput.innerText = finalAmountTwoNumber;
    

    
    } 
    
    
    })
    
  }
}