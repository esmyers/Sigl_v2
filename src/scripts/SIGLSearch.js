


function searchLogic(){

	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
   // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
  var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
   var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
   // At least Safari 3+: "[object HTMLElementConstructor]"
   var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
   var isIE = /*@cc_on!@*/false || !!document.documentMode; 


   //variables for search returns
   var allParameters;

   //NEEDED FOR CROSS DOMAIN AJAX REQUESTS IN IE
   $.support.cors = true;

	//GET parameters AND parameter groups
	$.ajax({
		dataType: 'json',
		type: 'Get',
		url:  endpointRoot +'parameters',
		cache: false,
		/*headers:{
			Accept: 'application/json',
			Host: 'sigl.wim.usgs.gov'
		},*/
		success: function(data){
			if (data.length>0){
				//place individual parameters into the appropriate optGroup (groups hardcoded in markup)
				$.each(data, function(){
					if (this['PARAMETER_GROUP'] == 'Physical'){
						$("#Physical").append($('<option></option>').val(this['PARAMETER_TYPE_ID']).html(this['PARAMETER']));
					
					} else if (this['PARAMETER_GROUP'] == 'Chemical'){
						$("#Chemical").append($('<option></option>').val(this['PARAMETER_TYPE_ID']).html(this['PARAMETER']));
					
					} else if (this['PARAMETER_GROUP'] == 'Biological'){
						$("#Biological").append($('<option></option>').val(this['PARAMETER_TYPE_ID']).html(this['PARAMETER']));
					
					} else if (this['PARAMETER_GROUP'] == 'Microbiological'){
						$("#Microbiological").append($('<option></option>').val(this['PARAMETER_TYPE_ID']).html(this['PARAMETER']));
					} 

					else if (this['PARAMETER_GROUP'] == 'Toxicological'){
						$("#Toxicological").append($('<option></option>').val(this['PARAMETER_TYPE_ID']).html(this['PARAMETER']));
					} 

				});
				$('#parameterGroupSelector').multipleSelect('refresh');
			}
		},
		error: function(xhr, status, error){
			alert(error, xhr.status);
		}
	});

	//RESOURCE COMPONENT #resourceComponentSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "ResourceTypes",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$('#resourceComponentSelector').append($("<option></option>").val(this['RESOURCE_TYPE_ID']).html(this['RESOURCE_NAME']));
				});
				$("#resourceComponentSelector").multipleSelect("refresh");
			}
			
		}
	});

	//for PROJECT DURATION and PROJECT STATUS dropdown calls look below in the list of calls for the PROJECT SEARCH TAB

	//MEDIA  #mediaSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "Media",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					if (this['MEDIA'].length > 27) {
						var optionText = this['MEDIA'].substring(0,28) + "...";
						$('#mediaSelector').append($("<option></option>").val(this['MEDIA_TYPE_ID']).html(optionText));
					} else{
						$('#mediaSelector').append($("<option></option>").val(this['MEDIA_TYPE_ID']).html(this['MEDIA']));
					}
					
				});
				$("#mediaSelector").multipleSelect("refresh");
			}
			
		}
	});

	//LAKE SELECT #lakeSelector and #projectLakeSelector
	$.ajax({
		dataType: 'json',
		type: 'Get',
		url:  endpointRoot +'Lakes',
		/*headers:{
			Accept: 'application/json',
			Host: 'sigl.wim.usgs.gov'
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$('#lakeSelector').append($('<option></option>').val(this['LAKE_TYPE_ID']).html(this['LAKE']));
					$("#projectLakeSelector").append($("<option></option>").val(this['LAKE_TYPE_ID']).html(this['LAKE']));
				});
				$('#lakeSelector').multipleSelect('refresh');
				$("#projectLakeSelector").multipleSelect("refresh");
			}
		}
	});


	//STATE REQUEST #stateSelector and #projectStateSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "states",
		/*headers:{
			Accept: "application/json",
			Host: "54.84.124.192"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$("#stateSelector").append($("<option></option>").html(this));
					$("#projectStateSelector").append($("<option></option>").val(this).html(this));
				});
				$("#stateSelector").multipleSelect("refresh");
				$("#projectStateSelector").multipleSelect("refresh");
			}
		}
	});

	//ALL PROJECT NAME REQUEST #projectSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "projects",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					//if (this['NAME'].length > 14) {
						//var optionText = this['NAME'].substring(0,15) + "...";
						//$("#projectSelector").append($("<option></option>").val(this['PROJECT_ID']).html(optionText));


					//} else{
						$("#projectSelector").append($("<option></option>").val(this['PROJECT_ID']).html(this['NAME']));
					//}
				});
				$("#projectSelector").multipleSelect("refresh");
			}
		}
	});


	//ORGANIZATION REQUEST #organizationSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "getUniqueOrgs",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					//SUBSTRINGING NOW DONE IN THE JQUERY MULTIPLE SELECT
					//if (this['NAME'].length > 10){
						//var optionText = this['NAME'].substring(0,11) + "...";
						//$("#organizationSelector").append($("<option></option>").val(this['ORGANIZATION_ID']).html(optionText));
					//} else{
						$("#organizationSelector").append($("<option></option>").val(this['ORGANIZATION_ID']).html(this['NAME']));
					//}
				});
				$("#organizationSelector").multipleSelect("refresh");
			}
		}
	});


				//use above?
				//el.textContent = (opt.children[2].textContent).substring(0, 28) + "...";
				//el.title = opt.children[2].textContent;

	//PROJECT OBJECTIVE REQUEST #objectiveSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "objectives",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$("#objectiveSelector").append($("<option></option>").val(this['OBJECTIVE_TYPE_ID']).html(this['OBJECTIVE']));
					//TODO Add in length restrictor here....
				});
				$("#objectiveSelector").multipleSelect("refresh");
			}
		}
	});

	//PROJECT DURATION REQUEST 	#projectDurationSelector AND #durationSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "ProjectDuration",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$("#projectDurationSelector").append($("<option></option>").val(this['PROJ_DURATION_ID']).html(this['DURATION_VALUE']));
					$("#durationSelector").append($("<option></option>").val(this['PROJ_DURATION_ID']).html(this['DURATION_VALUE']));
				});
				$("#projectDurationSelector").multipleSelect("refresh");
				$("#durationSelector").multipleSelect("refresh");
			}
		}
	});


	//PROJECT STATUS REQUEST 	#projectStatusSelector  AND #statusSelector
	$.ajax({
		dataType: "json",
		type: "Get",
		url: endpointRoot + "ProjectStatus",
		/*headers:{
			Accept: "application/json",
			Host: "sigl.wim.usgs.gov"
		},*/
		success: function(data){
			if (data.length > 0){
				$.each(data, function(){
					$("#projectStatusSelector").append($("<option></option>").val(this['PROJ_STATUS_ID']).html(this['STATUS_VALUE']));
					$("#statusSelector").append($("<option></option>").val(this['PROJ_STATUS_ID']).html(this['STATUS_VALUE']));
				});
				$("#projectStatusSelector").multipleSelect("refresh");
				$("#statusSelector").multipleSelect("refresh");
			}
		}
	});

}//END SearchLogic




	
