const express=require("express");
const body_par=require("body-parser");
const cors=require("cors");

const app= express();

var store={
table:[
    {abc:[ 
        {'What is >1':['0','2','3']}, 
        {'What is >b':['a','v','0']}, 
        {'!Bad = ?':['Good','Not Good','Bad']} 
    ]}
]
};

var corsOptions={
    origin: "*"
};

app.use(cors(corsOptions));
app.use(body_par.json());
app.use(body_par.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send('Connected!');
});

app.get("/show",(req,res)=>{
    console.log(JSON.stringify(store.table));
    res.json(JSON.stringify(store.table));
});

app.post("/",(req,res)=>{
    let name=Object.entries(req.body)[0];
    let pair={user:name[0],val:name[1]};
    if(store.table.find(e=>String(e.user)==String(name[0]))!=undefined){
    let val=Number(store.table[store.table.indexOf(store.table.find(e=>String(e.user)==String(name[0])))].val);
    val+=Number(name[1]);
    store.table[store.table.indexOf(store.table.find(e=>String(e.user)==String(name[0])))].val=val;}
    else store.table.push(pair);
    res.send('saved');
});

const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('Server running....',{PORT});
});
