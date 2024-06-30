var todo=[
   /* {title:"test title", subject:"test subject"}*/
];
//اضافه کردن به تودو 
function addTodo(item)
{
    var inputTitle=document.getElementById("title").value;
    var inputSubject=document.getElementById("subject").value;

    if(inputTitle.trim() =="")
{
    alert("complet the title");
    return;
}
if(inputSubject.trim() =="")
{
    alert("complet the subject");
    return;
}

    todo.push({title:inputTitle,subject:inputSubject});

    document.getElementById("title").value="";
    document.getElementById("subject").value="";
    updateData();
}
//پاک کردن لیست
function removeItem(number)
{
    todo.splice(number,1);
    updateData();
}
//نمایش در لیست
function updateData()
{
    var elmn=document.getElementById("kadrData");

    var data="";
    
    if(todo.length > 0)
    {

    for(item in todo)
    {
        data+='<div class="item" onclick="removeItem('+item+')">';
        data+='title:';
        data+=todo[item]["title"];
        data+='subject:';
        data+=todo[item]["subject"];
        data+='</div>:';
    }
    }
    else{
        data="empty";
    }

        elmn.innerHTML=data;

    }
