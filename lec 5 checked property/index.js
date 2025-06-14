//.checked = property that determines the checked status of an HTMl checkbox or radio butoon submit


const MyCheckbox = document.getElementById("MyCheckbox")
const visabtn = document.getElementById("visabtn")
const MasterCard = document.getElementById("MasterCard")
const PayPal = document.getElementById("PayPal")
const mySubmit = document.getElementById("mySubmit")
const submitResult = document.getElementById("submitResult")
const PaymentResult = document.getElementById("PaymentResult")

mySubmit.onclick = function(){
    if(MyCheckbox.checked){
        submitResult.textContent = `You are subscribed`
    }
    else{
        submitResult.textContent = `You are not subscribed`

    }

    if(visabtn.checked){
        PaymentResult.textContent = `You are paying with visa`

    }
    if(MasterCard.checked){
        PaymentResult.textContent = `You are paying with mastercard`

    }
    if(PayPal.checked){
        PaymentResult.textContent = `You are paying with paypal`

    }
}