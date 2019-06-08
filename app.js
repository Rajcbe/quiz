const correctAnswers=['B','B','B','B'];

const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    let score=0;

    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    userAnswers.forEach((answers,index)=>{
        if(answers === correctAnswers[index]){
            score +=25;
        }

    });
    console.log(score);
  let scoreContainer=document.querySelector('.score');
    document.getElementById('scoreUpdate').innerHTML=`${score}%`;
    scoreContainer.classList.remove('d-none');

});
