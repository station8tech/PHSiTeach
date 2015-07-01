
$(document).ready(function(){
	
		
		 
	
			
			var listHtml = "";
			
			var url = "http://www.stat8.net/iTeachTest/iTeacherDoc.cfc?method=getintList&returnformat=json"
			$.get(url, function(response){
			var json = $.parseJSON(response);
			
			
			$.each(json, function(key, value){  
				
				
			//	listHtml += "<li><a href='#' onclick=window.plugins.streamingMedia.playAudio('" + value.link + "')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong><div class='fb-share-button' data-href='"+ value.link +"' data-layout='icon'></div></p></a>   </li>";
				
				
			//this work for media	listHtml += "<li><a href='#' onclick=window.plugins.streamingMedia.playAudio('" + value.link + "')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				
			//listHtml += "<li><a href='#' onclick=window.open('" + value.link + "','_blank','location=yes,toolbar=yes,allowInlineMediaPlayback=yes')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></a><a href='#' onclick=window.open('http://www.stat8.net','_system')></a></li>";
				
				
			//this works for inappbrowser 	listHtml += "<li><a href='#' onclick=window.open('" + value.link + "','_blank','location=yes,toolbar=yes,allowInlineMediaPlayback=yes')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				
		
					
					
					listHtml += "<li data-id=" + value.id + "><a href='#'><b>" + value.lastname +  " , "+ value.firstname + "</b></a></li>";
					
				});//end each
			
			
		$("#teacherList").html(listHtml); 
		$('ul').listview().listview('refresh');



			});//end teacherlist
			
			
		//captures teacher_id variable and moves to page2	
	    var teacher_id;
		$(document).on("click", "#teacherList >li", function() {
			
		teacher_id = $(this).closest("li").attr("data-id");
		$.mobile.changePage('#page2',{transition: 'slide'});
			//console.log(teacher_id);
			});//click event for list
			
			//start of page2
			
			$(document).on('pagebeforeshow', '#page2', function() {  
         var url = "http://www.stat8.net/iTeachTest/iTeacherDoc.cfc?method=getarch&returnformat=json"
		 var classHtml = "";
		 $.post(url,{ searchName: teacher_id } , function(response){
			 var json = $.parseJSON(response);
			 $.each(json, function(key, value){  
			
			classHtml += "<li data-id=" + value.id + "><a href='#'><b>" + value.test + "</b></a></li>";
			 
			 });//end each
			 $("#classList").html(classHtml);
			  $('ul').listview('refresh');
			 
		 });//end page 
		 
		
     });// end of page 2 classlist
     
     //captures class_id variable and moves to page3	
	    var class_id;
		$(document).on("click", "#classList >li", function() {
			
		class_id = $(this).closest("li").attr("data-id");
		$.mobile.changePage('#page3',{transition: 'slide'});
		
			});//click event for list

	$(document).on('pagebeforeshow', '#page3', function() {  
         var url = "http://www.stat8.net/jquery/iTeacherDoc.cfc?method=getcontent&returnformat=json"
		 var contentHtml = "";
		 $.post(url,{ searchName: class_id } , function(response){
			 var json = $.parseJSON(response);
			 $.each(json, function(key, value){  
			
			
			contentHtml += "<li data-id=" + value.id + " data-content_id =" + value.content +"><a href='#'><b>" + value.Type + "</b></a></li>";
			 
			 });//end each
			 $("#contentList").html(contentHtml);
			 $('ul').listview('refresh');
			 
		 });//end page 
		 
		
     });// end of page 3 contentlist
     
     
     
		 //captures class_id variable and content and moves to page4
	    var content_id;
		$(document).on("click", "#contentList >li", function() {
			
		content_id = $(this).closest("li").attr("data-content_id");
		$.mobile.changePage('#page4',{transition: 'slide'});
			console.log(class_id);
			console.log(content_id);
			});//click event for list	
			
			//start of page4
	$(document).on('pagebeforeshow', '#page4', function() {  
         var url = "http://www.stat8.net/jquery/iTeacherDoc.cfc?method=getdocs&returnformat=json"
		 var documentHtml = "";
		 $.post(url,{ searchName: class_id, content: content_id } , function(response){
			 var json = $.parseJSON(response);
			 $.each(json, function(key, value){  
			
			
			documentHtml += "<li><a href='#' onclick=window.open('" + value.showlink + "','_blank','toolbar=yes,allowInlineMediaPlayback=yes')><b>" + value.date + "&nbsp;&nbsp;-&nbsp;&nbsp;" + value.name + "</b></a><a href='#' onclick=window.open('" + value.showlink + "','_system')></a></li>";
			 
			 });//end each
			 $("#documentList").html(documentHtml);
			 $('ul').listview('refresh');
			 
		 });//end page 
		 
		
     });// end of page 4 document list
			
			
			
			
			
	});//end document ready
