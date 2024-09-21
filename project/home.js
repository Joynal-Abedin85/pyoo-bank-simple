document.getElementById('add-btn')
    .addEventListener('click',function(event){
        event.preventDefault();

        const addMoney = document.getElementById('enter-tk').value;
        const addbalance = parseFloat(addMoney)
        const pass = document.getElementById('pass').value
        console.log(addbalance,pass)
        if(pass === '1234'){
            const acbalance = document.getElementById('ac-balance').innerText;
            const acbal = parseFloat(acbalance)
            const newbalance = acbal + addbalance
            document.getElementById('ac-balance').innerText = newbalance;
        }else{
            alert('wrong pass')
        }
    })

function bygetid(id){
    const getid = document.getElementById(id).value
    const getnum = parseFloat(getid)
    return getnum
}
function bygetidtext(id){
    const getid = document.getElementById(id).innerText
    const getnum = parseFloat(getid)
    return getnum
}


document.getElementById('cash-out')
    .addEventListener('click', function(){
        const outmoney = bygetid('out-amount')
        const passno = bygetid('passw')
        console.log(outmoney,passno);
        if(passno === 1234){
            const acamount = bygetidtext('ac-balance')
            if(outmoney > acamount){
                alert('not available paisa')
                return
            }
            const newamount = acamount - outmoney
            document.getElementById('ac-balance').innerText = newamount

        }else{
            alert("this is wrong")
        }
    })