var vehicleList = [];

//save data
function saveData(){
	var type = document.getElementById("type").value;
	var make = document.getElementById("make").value;
	var modal = document.getElementById("modal").value;
	if(type==0 || make=='' || modal==''){
		alert('All fields are required');
	}
	else{
		document.getElementById("no-data-msg").style.display="none";
		var vehicleDetail = {type: type, make:make, modal:modal}
		vehicleList.push(vehicleDetail);	
	    document.getElementById("vehicleList").innerHTML +='<div class="grid-row" id="vehicleDetail"><div class="grid-col grid-1">'+type+'</div><div class="grid-col grid-2">'+make+'</div><div class="grid-col grid-3">'+modal+'</div</div>';
		
		//clean input fields
		var type = document.getElementById("type").selectedIndex =0;
		var make = document.getElementById("make").value='';
		var modal = document.getElementById("modal").value='';
	}	
}

// search data
function searchData() {
	
  	var input = document.getElementById("myInput").value;
  	var filter = input.toUpperCase();
	var dataTable = document.getElementById("vehicleList").children;
	var i;
	if(filter.length>3){	  		  	
	  	for (i = 0; i < dataTable.length; i++) {    
		    var dataRow = dataTable[i].innerText;
		    var x= dataRow.toUpperCase().indexOf(filter);
	    	if (dataRow.toUpperCase().indexOf(filter) > -1) {
	        	dataTable[i].style.background = "#3fd28f";
	       	} 
	      	else {
	        	dataTable[i].style.background = "#fff";
	      	}	         
	  	}
  	}else{	  	
	  	for (i = 0; i < dataTable.length; i++) {    
	  		dataTable[i].style.background = "#fff";		  
	  	}
  	}
}

//to Json
function convertToJson(){
	if(vehicleList.length==0){
		alert('There is no data! Please add some data then try..');
	}
	else{
		var myJson = JSON.stringify(vehicleList);
	document.getElementById("jsonData").innerHTML= myJson;
	document.getElementById("jsonData").style.display= 'block';
	}	
}