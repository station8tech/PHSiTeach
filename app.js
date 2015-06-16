
$(document).ready(function(){
	
		
		 
	
			
			var listHtml = "";
			
			var url = "http://www.zippod.net/RYP/jsonCurrent.php"
			$.post(url, function(response){
			var json = $.parseJSON(response);
			
			
			$.each(json, function(key, value){  
				
				
			//	listHtml += "<li><a href='#' onclick=window.plugins.streamingMedia.playAudio('" + value.link + "')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong><div class='fb-share-button' data-href='"+ value.link +"' data-layout='icon'></div></p></a>   </li>";
				
				
			//this work for media	listHtml += "<li><a href='#' onclick=window.plugins.streamingMedia.playAudio('" + value.link + "')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				
			listHtml += "<li><a href='#' onclick=window.open('" + value.link + "','_blank','location=yes,toolbar=yes,allowInlineMediaPlayback=yes')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></a><a href='#' onclick=window.open('http://www.stat8.net','_system')></a></li>";
				
				
			//this works for inappbrowser 	listHtml += "<li><a href='#' onclick=window.open('" + value.link + "','_blank','location=yes,toolbar=yes,allowInlineMediaPlayback=yes')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				
				//listHtml += "<li><a href='#' onclick=window.plugins.ChildBrowser.showWebPage('http://www.google.com')><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
				
					//listHtml += "<li><a href='#' onclick='window.open(\"" +  value.link + "\");'><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
					
					//listHtml += "<li><a href='" + value.link +"'><img class='ui-circle ui-mini ui-padding' src='"+ value.image +"'><h2>" + value.name +  "</h2><p><strong>"+ value.title + "</strong></p><p><strong>" + value.date +"</strong></p></li>";
					
				});//end each
			
			
		$("#history").html(listHtml); 
		$('ul').listview('refresh');

			});//end post podlist
			
			
			
			
	});//end document ready


function openBrowser(link){ 
				
        cb = window.plugins.childBrowser;
                console.log(link);
                
                cb.showWebPage(link); 
            
            } 
	