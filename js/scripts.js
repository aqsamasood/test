
var arr=new Array();


function readData () 
{
    var person=new Object();
    person.name=$("#name").val();
    person.address=$("#address").val();
    var len=arr.length;
    arr[len]=person;  
}
function clear(id)
{
  id.innerHTML="";
}
function writeData (id,arr) 
{
      clear(id);
      var text="<P></p>";

      for(i=0;i<arr.length;i++)
      {
       text+="<p>Name: "+arr[i].name+"&nbsp &nbsp &nbsp Address: "+arr[i].address+"<br>";
      }
      document.getElementById(id).innerHTML=text;
      
}

function sort_by_name()
{
  arr.sort(function(a, b)
  {
    nameA=a.name.toLowerCase();
    nameB=b.name.toLowerCase();
    if (nameA < nameB) //sort string ascending
      return -1 
    if (nameA > nameB)
      return 1
    return 0 //default return value (no sorting)
    });
  console.log(arr);
}

function sort_by_address()
{
  arr.sort(function(a, b)
  {
    nameA=a.address.toLowerCase();
    nameB=b.address.toLowerCase();
    if (nameA < nameB) //sort string ascending
      return -1 
    if (nameA > nameB)
      return 1
    return 0 //default return value (no sorting)
    })
}
$(document).ready(function(e) 
{ 
  
    $("#form_add").click(function(e) 
    {
      readData();
      writeData("personInfo",arr);
      e.preventDefault();
    });

    
   $('#search').click(function(e){
    len=arr.length;
    var searchName=$("#searchName").val();
    for(i=0;i<len;i++){
      if(arr[i].name==searchName){
         $('#searchResult').append('<p>Name: '+arr[i].name+'&nbsp&nbsp&nbsp Address: '+arr[i].address+'</p>');
         break;
       }
       // else
       // {
       //   alert('Search Fail: Name not found');
       // }
    }
     e.preventDefault();
   });


   //Delete Query

   $('#delete').click(function(e){
     len=arr.length;
    var deleteName=$("#deleteInfo").val();
    for(i=0;i<len;i++){
      if(deleteName==arr[i].name){
         arr.splice(i,1);
         break;
       }
     }
     len=arr.length;
     console.log(arr);
     writeData("personInfo",arr);
     e.preventDefault();
   });
    


   //sort by name
   
    $('#sort').click(function()
    {
      val=$('input[name="sort"]:checked').val();
      switch(val)
      {
      case "sort_by_name":
      sort_by_name();
      
      break;
      case "sort_by_address":
      sort_by_address();
      
      break;
      }
      console.log(arr);
      writeData("personInfo",arr);
    });

});
