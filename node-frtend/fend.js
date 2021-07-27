
let netGet=
    fetch('http://localhost:8080/',{
    headers:{
        'mode':'cors',
        'Content-Type':'application/json'
    }
})
.then(res=>res.text());

function netpost(data){
    fetch('http://localhost:8080/',{
'headers':{
    'Content-Type':'application/json'},
    'method':'POST',
    'body': JSON.stringify(data)
})
.then(data=>data.text())
.then(res=>console.log(res));
}

let netShow=
    fetch('http://localhost:8080/show',{
    headers:{
        'mode':'cors',
        'Content-Type':'application/json'
    }
})
.then(res=>res.json());

let data=document.createElement('div');
netGet.then(jsdata=>{data.innerHTML=(jsdata)});
document.body.appendChild(data);

netpost({"sam":"100"});

document.getElementById("show").addEventListener("click",()=>{
    netShow.then(data=>{
        let list=JSON.parse(data);
        console.log(list[0].user);
        list.forEach(p => {
            let item=document.createElement('div');
        item.innerHTML=p.user+":"+p.val;
        document.getElementById('s_list').appendChild(item)
        });
        // for(p in list){
        // 
    });
});