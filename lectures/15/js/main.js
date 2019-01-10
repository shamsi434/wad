
let Data=[{
 Title:"Saving",
 Currency:"PKR",
 IBN:"0900",
 Balance:1000
}]


var CurrentAmount=0;
function Init()
{
    document.getElementById("title").innerText+=Data[0].Title;
    document.getElementById("currency").innerText+=Data[0].Currency;
    document.getElementById("IBAN").innerText+=Data[0].IBN;
    CurrentAmount=Data[0].Balance;
    document.getElementById("balance").innerText=Data[0].Balance;
}

Init();
function InputDeposit(A)
{
    if(A.keyCode==13)
    {
        var T=parseInt(document.getElementById("deposit").value);
        if(isNaN(T))
        {
            document.getElementById("deposit-msg").innerText="Please Enter SomeThing";
        }
        else
        {
            document.getElementById("deposit-msg").innerText="";
            CurrentAmount=CurrentAmount+T;
            document.getElementById("balance").innerText=CurrentAmount;
            let AB=document.getElementById("transaction-table");
            AB.innerHTML+='<tr>'
                +' <th align="left" valign="middle" scope="col">'+new Date()+'</th>'
                +' <th align="left" valign="middle" scope="col">'+'Deposit'+'</th>'
                +' <th align="left" valign="middle" scope="col">'+document.getElementById("deposit").value+'</th>'
                +'</tr>'
        }
        document.getElementById("deposit").value="";
    }

}

function InputWithDraw(A) {
    if(A.keyCode==13)
    {
        var T=parseInt(document.getElementById("withdraw").value);
        if(isNaN(T))
        {
            document.getElementById("withdraw-msg").innerText="Please Enter SomeThing";
        }
        else if(T>CurrentAmount)
        {
            document.getElementById("withdraw-msg").innerText="Not Enough Balance";
        }
        else
        {
            document.getElementById("withdraw-msg").innerText="";
            CurrentAmount=CurrentAmount-T;
            document.getElementById("balance").innerText=CurrentAmount;
            let AB=document.getElementById("transaction-table");
            AB.innerHTML+='<tr>'
                +' <th align="left" valign="middle" scope="col">'+new Date()+'</th>'
                +' <th align="left" valign="middle" scope="col">'+'WithDraw'+'</th>'
                +' <th align="left" valign="middle" scope="col">'+document.getElementById("withdraw").value+'</th>'
                +'</tr>'
        }
        document.getElementById("withdraw").value="";
    }
}