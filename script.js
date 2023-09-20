function hora(){

let dma = new Date()

return dma.toLocaleTimeString('pt-BR' ,{
    hour12: false
})
}

let setFunc = setInterval(function() {
    console.log(hora())
}, 1000)

setTimeout(function() {
    clearInterval(setFunc)
}, 5000)

setTimeout(function(){
    console.log('Parou')
}, 10000)
