var scr = document.querySelector('p[name="scores"]');
scr.innerHTML += localStorage.scores;
let answerBlockC = ['if($a < $b){};', 'for($i = 0; $i <= 5; i++){ echo $i };', 'echo $a;', '$x = "";', 'echo $a + " " + $b;'];

marks(localStorage.scores);
blockC();

function marks(ball) {
    var p = document.querySelector('p[name="marks"')
    var res = ball / 12;
    if(res >= 0.90){
        p.innerHTML += 5;
    }else if (res >= 0.65) {
        p.innerHTML += 4;
     }else if(res >= 0.50){
           p.innerHTML += 3;
      }else{
            p.innerHTML += 2;
    }
}

function blockC(){
    let text = localStorage.answer;
    text = JSON.parse(text);

    for (let i = 0; i < text.length; i++) {
        let p = document.createElement('p').innerHTML = 'Ответ№'+ (i + 1) + ': ' + text[i];
        let br = document.createElement('br');
        let pAnswer = document.createElement('p').innerHTML = '| Правильный ответ: ' + answerBlockC[i];
        
        document.body.append(p);  
        document.body.append(pAnswer);
        document.body.append(br);
    }
  
}