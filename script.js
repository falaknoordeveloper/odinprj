let body=document.querySelector('body')
let mode=document.querySelector('#mode')
let currMode='Light'
let modeSystem=()=>{
    if(currMode ==='Light'){
        mode.src="./imgs/sun-2-svgrepo-com.svg"
        currMode="Dark"
        console.log(currMode)
        body.classList.add('mode')
    }
    else{
        mode.src="./imgs/moon-svgrepo-com.svg"
        currMode="Light"
        console.log(currMode)
        body.classList.remove('mode')
    }

}
