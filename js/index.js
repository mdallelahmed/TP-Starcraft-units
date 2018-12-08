var list = new Array();
const type = document.getElementById('type');
type.addEventListener('change', function(e) {
    var option = document.getElementById("type");
var val = option.options[option.selectedIndex].value;
    if(val=="SiegeTank"){
        document.getElementById("modetype").style.display="block";
    }
    else{        document.getElementById("modetype").style.display="none";
    }
});

const buttonadd = document.getElementById('add');
buttonadd.addEventListener('click', function(e) {
    var option = document.getElementById("type");
var val = option.options[option.selectedIndex].value;
    var id=Math.floor(Math.random()*100000);
    while(list.includes(id)){
        id=Math.floor(Math.random()*100000);
    }
    list.push(id);
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    var valradio;

    if(val=="Marine"||val=="Valkyrie"){
        cell2.innerHTML =val+"#"+id+":"+document.getElementById("nametf").value;
    cell1.innerHTML ="<button id ='selectbtn' type='button' class='btn btn-primary' value='"+val+"#"+id+":"+document.getElementById("nametf").value+"'>Select</button>";
    }
    else{
        var radios = document.getElementsByName('radio');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                valradio=radios[i].value;
            }
        }
cell2.innerHTML =val+"#"+id+":"+document.getElementById("nametf").value+valradio;
        cell1.innerHTML ="<button id ='selectbtn' type='button' class='btn btn-primary' value='"+val+"#"+id+":"+document.getElementById("nametf").value+valradio+"'>Select</button>";

    }
    console.log(document.getElementsByName("radio").value);
    const selectbtn = document.getElementById('selectbtn');
    selectbtn.addEventListener('click', function(e) {
       document.getElementById('footer').style.display="block";
       document.getElementById('span').innerHTML=selectbtn.value;
       const deletebtn = document.getElementById('deleteitem');
       var table = document.getElementById("table");
          var rows = table.getElementsByTagName("tr");
       deletebtn.addEventListener('click', function(e) {
        for(var i=0;i<rows.length;i++)
          {
            if(document.getElementById("table").rows[i].cells[0].innerHTML==selectbtn.value){
                var typo=selectbtn.value.substring(0,selectbtn.value.indexOf("#"));
                if(typo=="Marine"||typo=="Valkyrie"){
                document.getElementById("table").deleteRow(i);
                document.getElementById('footer').style.display="none";
                list.splice(list.indexOf(selectbtn.value.substring(selectbtn.value.indexOf("#"),selectbtn.value.indexOf(":"))));
                }
            }
          }
         

       });
       deletebtn.addEventListener('dblclick', function(e) {
        for(var i=0;i<rows.length;i++)
        {
          if(document.getElementById("table").rows[i].cells[0].innerHTML==selectbtn.value){
              document.getElementById("table").deleteRow(i);
              document.getElementById('footer').style.display="none";
              list.splice(list.indexOf(selectbtn.value.substring(selectbtn.value.indexOf("#"),selectbtn.value.indexOf(":"))));

          }
        }

     });
  
    });
    
});

