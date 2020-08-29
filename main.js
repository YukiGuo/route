const div1Html=`这个是page1`
const div2Html =`这个是page2`
const div3Html =`这个是page3`
const div4Html=` 这个是page4`
const unfound=`<div  id='div404'>页面不存在404</div>`
let routeHash={
    page1:div1Html,
    page2:div2Html,
    page3:div3Html,
    page4:div4Html,
    unfound:unfound
}

route();
function route(){
    let location=window.location.hash.substr(1)||'page1';
    let app=document.querySelector("#app");
    let div= document.createElement('div')
    div.innerHTML=routeHash[location]||routeHash["unfound"]
    if(app.children.length>0){
        app.removeChild( app.children[0])
    }
        div.style.display="block";
        app.appendChild(div);
}
window.addEventListener("hashchange",
    function(){
        route();

    });