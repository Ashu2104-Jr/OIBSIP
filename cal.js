let cal=0;
let string="";
let val="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
button.addEventListener('click',(e)=>{
if(e.target.value=="=")
{
    string=eval(string);
    document.getElementById('info').value=string;
}
else if(e.target.value=="C")
{
    document.getElementById('info').value="";
    string="";
}
else if(e.target.value=='s')
{
     string=Math.sqrt(string);
     document.getElementById('info').value=string;
}
else{
    string=string+e.target.value;
    document.getElementById('info').value=string;
}
});
});
