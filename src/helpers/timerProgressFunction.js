
    
/* let h = 0;
let m = 25;
let s = 0; */
let stopIntervalTimer;
    

/*------------------------------------------*/
/*--btn start--*/
/*------------------------------------------*/

function startClock(m,s) {
    

    
    stopIntervalTimer = setInterval(()=> {
        
        if (s === 0 && m === 0) { 
            clearInterval(stopIntervalTimer); 
            
            startBreak();
            return;
        }
        else if(s <= 5 && m === 0) { s--; }
        else if(s === 0) {s = 60;  m--; s--;}
        else if (s < 60) {s--}

        console.log({m,s})
    }, 1000)

}

/*------------------------------------------*/
/*--START BREAK--*/
/*------------------------------------------*/

function startBreak(m,s) {


    stopIntervalTimer = setInterval(()=> {
        
        if (s === 0 && m === 0) { 
            clearInterval(stopIntervalTimer); 

            resetClock();
            return;
        }
        else if(s <= 5 && m === 0) { s--; }
        else if(s === 0) {s = 60;  m--; s--;}
        else if (s < 60) {s--}

        
        /* secsClock.innerHTML = `${String(s).padStart(2,"0")}`;
        minsClock.innerHTML = `${String(m).padStart(2,"0")}`; */
    }, 1000)

    
}

/*------------------------------------------*/
/*--btn reset--*/
/*------------------------------------------*/

function resetClock(h,s) {

    clearInterval(stopIntervalTimer)
    /* btnPause.removeEventListener('click', pauseClock);
    btnReset.removeEventListener('click', pauseClock);
    btnStart.addEventListener('click', startClock);
    btnSendParameters.removeAttribute("disabled");
    progressRing.classList.remove('danger') */


    h = 0;
    s = 0;


    /* secsClock.innerHTML = `${String(s).padStart(2,"0")}`;
    minsClock.innerHTML = `${String(m).padStart(2,"0")}`; */
}


/*------------------------------------------*/
/*--btn reset--*/
/*------------------------------------------*/
function pauseClock() {

    /* btnPause.removeEventListener('click', pauseClock); */
    clearInterval(stopIntervalTimer)
    /* btnStart.addEventListener('click', startClock); */
    
}

/*------------------------------------------*/
/*--SendParameters--*/
/*------------------------------------------*/

/* function saveParameters(e) {
    e.preventDefault()

    let newParametersSave = getParameter();
    m = Number(newParametersSave.focusTime)
    minsClock.innerHTML = `${String(m).padStart(2,"0")}`;
    setParametersInLocalStorage(newParametersSave)
    
    console.log(newParametersSave)
    
}
 */

export {
    startClock,
    pauseClock,
    resetClock,
    startBreak,
}