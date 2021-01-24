function check() {
    let res;
    res = difficultyA();
    res = difficultyB() + res;
    let resC = difficultyC();
    result(res, resC);
}

function difficultyA(result) {
var pr = document.querySelectorAll('#true');
var result = 0;

    for (let i = 0; i <= pr.length - 1; i++) {
        if(pr[i].checked){
            result++;
        }
    }

    return result;
}


function difficultyB(result) {
    let prCheck = document.querySelectorAll('#trueCheck');
    var result = 0;

    for (let i = 0; i < prCheck.length; i++) {
        if(prCheck[i].checked){
            result++;
        }
    }
    
    return result;
}


function difficultyC(){
    let input = document.querySelectorAll('input[type=text]');
    var res = [];

    for (let i = 0; i <= input.length - 1; i++) {
        if(input[i].value != ""){
            res[i] = input[i].value;
        }else{
            res[i] = 'Вы ничего не указали';
        }
        // res[i];
    }

    return res;
}


function result(resNum, resText) {
    localStorage.setItem('scores', resNum);
    localStorage.setItem('answer', JSON.stringify(resText));
    JSON.parse(localStorage.getItem("answer"));
    document.location.href = "result.html";
}
