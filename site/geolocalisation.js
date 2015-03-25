		//Fonction de Callback en cas d'erreur
		function displayError(error){
			//console.log(error.message);
			var info = "Erreur lors de la géolocalisation : ";
			switch(error.code){
				case error.TIMEOUT:
					 info += "Timeout !";
				break;

				case error.PERMISSION_DENIED:
					 info += "Vous n'avez pas donné la permission";
				break;

				case error.POSITION_UNAVAILABLE:
					 info += "La position n'a pas pu être déterminée";
				break;

				case error.UNKNOW_ERROR:
					 info += "Erreur inconnue";
				break;
			}

			
			initializePosition(48.579400,7.7519);
		}

		function displayPosition(position){
			var  geoInfos = "";
			geoInfos += "Latitude : "+position.coords.latitude+"<br/>";
			geoInfos += "Longitude : "+position.coords.longitude+"<br/>";
			geoInfos += "Altitude : "+position.coords.altitude+"<br/>";
			geoInfos += "Vitesse : "+position.coords.speed+"<br/>";
			initializePosition(position.coords.latitude,position.coords.longitude);
		}

		function initializePosition(latitude,longitude){
			//Position Châtelet : 48.579400,7.7519
			var centerpos    =  new google.maps.LatLng(latitude,longitude);

			//options relatives à la carte
			var optionsGmaps = {
				center    : centerpos,
				mapTypeID : google.maps.MapTypeId.ROADMAP,
				zoom      : 15
			};
			//Zom 0 : Terre entère, 19 = Niveau de la rue
			var map  = new google.maps.Map(document.getElementById("map"),optionsGmaps);

			var marker 	 = new google.maps.Marker({
				position : centerpos,
				map 	 : map,
				title	 : "Vous êtes ici"
			});
		}

		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition(displayPosition,displayError);
			google.maps.event.addDomListener(window, "load", initializePosition);

		}else{
			alert("Désolé ! Votre naivgateur ne prend pas en charge l'Api de géolocalisation");
		}
