window.addEventListener('load', () => {
    setTime();
});

function setTime() {
    const currentTime = new Date();
    const clock = document.querySelector('.clock');
    let time = '';
    
    let hour = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    time += hour.toString() + ' : ' + minutes.toString() + ' : ' + seconds.toString();
    
    clock.innerText = time;
    setTimeout(setTime, 500);
}