const main=document.querySelector(".mindmap__main")
const intuitive=document.querySelector(".mindmap__intuitive")
const memory=document.querySelector(".mindmap__memory")
const collaboration=document.querySelector(".mindmap__collaboration")
const focus= document.querySelector(".mindmap__focus");
const clutter= document.querySelector(".clutter");
const overview= document.querySelector(".overview");
const idea= document.querySelector(".idea");
new LeaderLine(main,intuitive,{color:'#FFCE4F',size:2,dash:true,endPlug:'hand'});
new LeaderLine(main,memory,{color:'#FF4F4F',size:2,dash:true,endPlug:'hand'})
new LeaderLine(main,collaboration,{color:'#3E90B3',size:2,dash:true,endPlug:'hand'});
new LeaderLine(main,focus,{color:'#3E58B3',size:2,dash:true,endPlug:'hand'});
new LeaderLine(focus,clutter,{color:'#3E58B3',size:2,dash:true,endPlug:'hand'});
new LeaderLine(focus,overview,{color:'#3E58B3',size:2,dash:true,endPlug:'hand'});
new LeaderLine(focus,idea,{color:'#3E58B3',size:2,dash:true,endPlug:'hand'});
