function Change(){
    let bt = document.getElementById("button");
    let val = document.getElementById("value").value;
    const element = document.querySelectorAll(".fst");
    console.log(element + val + bt);
    if(val=="yes"){
        element.forEach(node => {
            node.classList.toggle("snd");
        });
    }
}