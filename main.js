render();
function render(){
    let num=window.location.hash.substr(1)||1;
    let app=document.querySelector("app");
    let div =document.querySelector("#div"+num)||document.querySelector("#div404");
    if(app.children.length>0){
        app.children[0].style.display="none";
        document.body.append( app.children[0]);
    }
    div.style.display="block";
    app.appendChild(div);

}

window.addEventListener("hashchange",
    function(){
        render();

    });