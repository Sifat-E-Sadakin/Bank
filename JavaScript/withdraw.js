document.getElementById('w').addEventListener('click', function(){

    let amountField= document.getElementById('w-amount');
    let wStr= amountField.value;
    let wAmount = parseFloat(wStr);

    let cbField= document.getElementById('cb');
    let cbStr= cbField.innerText;
    let cb= parseFloat(cbStr);

    if(cb< wAmount){
        alert('Insufficient Ballance');
        return;
    }

    if(isNaN(wAmount)){
        return;
    }

    let wField = document.getElementById('w-total');
    let wTotalStr = wField.innerText;
    let wTotal = parseFloat(wTotalStr);

    let w = wAmount + wTotal;
    wField.innerText=w;
    amountField.value = '';


   

    let ncb= cb - wAmount;
    cbField.innerText = ncb;

})


document.getElementById('w-amount').addEventListener('keyup', function(event){

    let v= document.getElementById('w-amount');
    let value= event.target.value;
    let val= parseFloat(value);
    

    let b = document.getElementById('w');

    if(  val>=-999){
        b.removeAttribute('disabled');
        
    }
    else{
        b.setAttribute('disabled', true)
    }
   


})
