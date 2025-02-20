let inputtext=document.querySelector('#inputtext');
let list=document.querySelector('#list');

inputtext.addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        if(this.value.trim()=="")
        {
            alert("Enter text!");
        }
        else{
        additem(this.value);
        this.value=""
        }
    }
});
let additem=(inputtext)=>
{
    let listitem=document.createElement("li");
    listitem.innerHTML=`${inputtext}<i></i>`;
    listitem.querySelector("i").addEventListener("click",function()
    {
        listitem.remove();
    }
)
   listitem.addEventListener("click",function()
    {
    this.classList.toggle('done');
    }) 
    list.appendChild(listitem);
   
}
