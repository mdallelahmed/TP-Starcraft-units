export function modefunction(){
    var option = document.getElementById("type");
var val = option.options[option.selectedIndex].value;
    if(val=="SiegeTank"){
        document.getElementById("modetype").style.display="block";
    }
    else{        document.getElementById("modetype").style.display="none";
    }
}

export function addlist(){
    var option = document.getElementById("type");
var val = option.options[option.selectedIndex].value;
    var id=Math.floor(Math.random()*100000);
    var list = new Array();
    while(list.includes(id)){
        id=Math.floor(Math.random()*100000);
    }
    list.push(id);
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(0);
    console.log(val+"#"+id+":"+document.getElementById("nametf").value)
    cell2.innerHTML =val+"#"+id+":"+document.getElementById("nametf").value;
    cell1.innerHTML ="<button id ='selectbtn' type='button' class='btn btn-primary'>Select</button>";

}
