const applyInput= document.getElementById('btn-button')
applyInput.style.backgroundColor='gray';
applyInput.setAttribute("disabled","");

const applyPurchase= document.getElementById('purchase')
applyPurchase.style.backgroundColor='gray';
applyPurchase.setAttribute("disabled","");

document.getElementById('kitchen-one').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('bowl-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-one')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})

document.getElementById('kitchen-two').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('knife-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-two')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})

document.getElementById('kitchen-three').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('cooker-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-three')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})


document.getElementById('sports-one').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('cap-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-four')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})


document.getElementById('sports-two').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('jersey-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-five')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})
 
document.getElementById('sports-three').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('cates-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-six')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})



document.getElementById('furniture-one').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('chair-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-seven')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})

document.getElementById('furniture-two').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('play-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-eight')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})

document.getElementById('furniture-three').addEventListener('click',function(){
  //take the price of individual one
   const innerValue = priceCalled('sofa-price')
  //take input from total price
  const totalPrice = totalPriceCalculate('total-price')
  //add the individual and total value
  const finalPrice = innerValue + totalPrice;
  setValueFinal('total-price',finalPrice)
  //set name value in the list
  setNameValue('name-nine')
  //total price calculate without discount
  finalPriceWithoutDiscount('final-price',finalPrice)
   //total price calculate with discount
   finalPriceWithDiscount(finalPrice)
})