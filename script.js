let score = 0;
let answers = 0;

function answer(button,value){

let parent = button.parentElement;
if(parent.classList.contains("answered")) return;

score += value;
answers++;

button.classList.add("selected");

let buttons = parent.querySelectorAll("button");
buttons.forEach(btn => btn.disabled = true);

parent.classList.add("answered");

if(answers === 5){
showResult();
}
}

function showResult(){

let advice = "";

if(score <= 1){
advice = "👍 Отличный режим! Продолжайте соблюдать баланс.";
}
else if(score <= 3){
advice = "⚠ Умеренный риск. Стоит сократить использование смартфона вечером.";
}
else{
advice = "🚨 Высокий риск цифровой перегрузки. Рекомендуется нормализовать режим сна.";
}

document.getElementById("result").innerHTML = `
<p>${advice}</p>
<button id="restartBtn" onclick="restartTest()">Пройти тест заново</button>
`;
}

function restartTest(){

score = 0;
answers = 0;

document.getElementById("result").innerHTML = "";

let questions = document.querySelectorAll(".question");

questions.forEach(q=>{
q.classList.remove("answered");

let buttons = q.querySelectorAll("button");
buttons.forEach(btn=>{
btn.disabled = false;
btn.classList.remove("selected");
});
});
}

/* Диаграммы */

new Chart(document.getElementById('usageChart'),{
type:'pie',
data:{
labels:['1-3 часа','3-5 часов','Более 5 часов'],
datasets:[{
data:[30,45,25],
backgroundColor:['#4e73df','#6f42c1','#e74a3b']
}]
}
});

new Chart(document.getElementById('sleepChart'),{
type:'bar',
data:{
labels:['<6 часов','7-8 часов','>8 часов'],
datasets:[{
label:'Процент учащихся',
data:[40,45,15],
backgroundColor:'#4e73df'
}]
}
});