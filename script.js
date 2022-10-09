function add(){
    let last = 0;
    let x = 0;
    last = calculator.ip.value;
    x = last.charAt(last.length-1);
    if(x=='+' || x=='-' || x=='*' || x=='/'){
        calculator.ip.value=last.substring(0,last.length-1);
        calculator.ip.value+='+';
    }else{
        calculator.ip.value+='+';
    }
}
function sub(){
    let last = 0;
    let x = 0;
    last = calculator.ip.value;
    x = last.charAt(last.length-1);
    if(x=='+' || x=='-' || x=='*' || x=='/'){
        calculator.ip.value=last.substring(0,last.length-1);
        calculator.ip.value+='-';
    }else{
        calculator.ip.value+='-';
    }
}
function multiply(){
    let last = 0;
    let x = 0;
    last = calculator.ip.value;
    x = last.charAt(last.length-1);
    if(x=='+' || x=='-' || x=='*' || x=='/'){
        calculator.ip.value=last.substring(0,last.length-1);
        calculator.ip.value+='*';
    }else{
        calculator.ip.value+='*';
    }
}
function division(){
    let last = 0;
    let x = 0;
    last = calculator.ip.value;
    x = last.charAt(last.length-1);
    if(x=='+' || x=='-' || x=='*' || x=='/'){
        calculator.ip.value=last.substring(0,last.length-1);
        calculator.ip.value+='/';
    }else{
        calculator.ip.value+='/';
    }
}