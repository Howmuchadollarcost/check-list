// const uniqueId = () => {
//     let uniq = '';
//     let ranLoop = Math.floor(Math.random()*10)
//     for(var i = 0; i <= ranLoop; i++){
//         var idStr = String.fromCharCode(65 + (Math.floor(Math.random()*25)));
//         var ascicode=Math.floor((Math.random()*42)+48);
//         uniq += idStr.concat(ascicode);
//     }
//     return uniq
// }

// const a = uniqueId()
// console.log(a);

function task(btn,done,remove){
    this.btn = btn;
    this.done = done;
    this.remove = remove;
    
    
    return btn,done,remove; 
}

