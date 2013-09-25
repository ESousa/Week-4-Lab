
			
			var data = {
			'mousex' : [],
			'mousey' : [],
			'title' : ""
			};
			
			function showResults() {
				console.clear();
				console.log(data);
			}
			
			var results = document.getElementById('showResults');
			
			results.addEventListener("click", showResults);
			
		//XY movement of mouse;
			
			function onMouseMove(e){
				data.mousex.push(e.clientX);
				data.mousey.push(e.clientY);
		
		
				if ( data.mousex.length > 100 && data.mousey.length > 100){
					document.removeEventListener('mousemove', onMouseMove);
					}	
			}		
	document.addEventListener('mousemove', onMouseMove);

		//Puts document title at top of page;


	function onWindowLoad() {
		data.title = document.title;
	}
	
	window.addEventListener('load', onWindowLoad);
		
