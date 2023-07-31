function calculate() {
    
    let bt = document.getElementById("button");
    let op = document.getElementById("operator").value;
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (op=='+') {
        var ans = parseInt(num1) + parseInt(num2);
    }
    else if(op=='-'){
        var ans = parseInt(num1) - parseInt(num2);
    }
    else if(op=='*'){
        var ans = parseInt(num1) * parseInt(num2);
    }
    else if(op=='/'){
        var ans = parseInt(num1) / parseInt(num2);
    }
    document.getElementById("Ans").innerHTML = ans;
}