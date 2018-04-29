  document.onreadystatechange = function () {
     if (document.readyState == "complete") {
     
     	var benefitsArray = document.getElementsByClassName('benefits__list-item');
     	var teamArray = document.getElementsByClassName('team__list-item');
     	var clientsArray = document.getElementsByClassName('clients__list-item');
			var trigger = true;

			function buildOfElements() {

     		if(window.outerWidth <= 450 && trigger === true) {

     			trigger = false;

     			for(var i = 0; i < benefitsArray.length; i++) {
     				benefitsArray[i].classList.remove('col-xs-6');
     				benefitsArray[i].classList.add('col-xs-12');
     			}

     			for(var i = 0; i < teamArray.length; i++) {
     				teamArray[i].classList.remove('col-xs-4');
     				teamArray[i].classList.add('col-xs-6');
     			}

     			for(var i = 0; i < clientsArray.length; i++) {
     				clientsArray[i].classList.remove('col-xs-4');
     				clientsArray[i].classList.add('col-xs-6');
     			}

     		}
     		else if(window.outerWidth <= 767 && window.outerWidth > 450 && trigger === false) {

     			trigger = true;

     			for(var i = 0; i < benefitsArray.length; i++) {
     				benefitsArray[i].classList.remove('col-xs-12');
     				benefitsArray[i].classList.add('col-xs-6');
     			}

     			for(var i = 0; i < teamArray.length; i++) {
     				teamArray[i].classList.remove('col-xs-6');
     				teamArray[i].classList.add('col-xs-4');
     			}

     			for(var i = 0; i < clientsArray.length; i++) {
     				clientsArray[i].classList.remove('col-xs-6');
     				clientsArray[i].classList.add('col-xs-4');
     			}

				}
			};
			buildOfElements();

     	window.onresize = function() {
     		buildOfElements();
     	}

   }
 }