let adNumb = document.getElementById('adNum')
let advice = document.getElementById('advice')
let next = document.getElementById('next')
let route = `https://api.adviceslip.com/advice`



function adviseMe() {
    fetch(route)
    .then((response)=> response.json())
    .then ((data)=>{
        let randomAdvice= data['slip']['advice']
        console.log (randomAdvice);
        advice.textContent=`"${randomAdvice}"`
        })
        fetch(route)
    .then((response)=> response.json())
        .then((data)=>{
            let adviseNum = data['slip']['id']
            console.log(adviseNum);
            adNumb.textContent=`ADVISE #${adviseNum}`
        })
    
}

adviseMe()
 




next.addEventListener('click',(e)=>{
    e.preventDefault();
    location.reload ()

})

