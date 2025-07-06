const letters = document.querySelectorAll('.scoreboard-letter');
const loadingdiv = document.querySelector('.info-bar');
async  function init(){
    


    document.addEventListener('keydown', function handleKeypress (event)  {
        const action = event.key;
        console.log(action);


    })
}
init()