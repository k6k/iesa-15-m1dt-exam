<!DOCTYPE html>
<html lang="fr" dir="ltr" class="client-nojs">
<head>
<meta charset="UTF-8" />

<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=set_to_true_or_false"></script>
<script type="text/javascript" src="geolocalisation.js"></script>
<title>Trouver une planète</title>

<link rel="stylesheet" href="style/desktop.css" media="only screen and (min-width:480px)" type="text/css">
<link rel="stylesheet" href="style/mobile.css" media="only screen and (min-width:0px) and (max-width:480px)" type="text/css">
</head>

<body>
	<header id="header">
		<div class="header-sub-content">
			<div class="logo"> <a href="index.php"><img src="logo.png" style=""> Planet</a></div>
			<nav id="navigation">
				<ul class="menu">
					<li class="menu-item"><a href="#">Help Guinai</a></li>
				</ul>
			</nav>
		</div>
		
		<div class="clear"></div>
		<div class="welcome">
			
				

				<h4>Detail de la planète : "<?php echo (isset($_GET['item']))? $_GET['item']:'Non spécifié'  ; ?>"</h4>
		
			
		</div>
	</header>
	<div id="main" >
			
			<?php 
				$file_content = file_get_contents("planet-list.json");
				$content_decode = json_decode($file_content, true); 
				if(isset($content_decode['item'])){
				
				
					$description = $content_decode[$_GET['item']]['description'];
					$item = $content_decode[$_GET['item']];
					
					echo "<ul class='listAll'>
							<li>
								<h3>{$_GET['item']}</h3>
								<img src='img/{$item['image']}' alt=''>
								<p>Distance : {$item['distance']}</p>
								<p>Rayon : {$item['rayon']}</p>
      							<p>{$description}</p>
							 </li>
						  </ul>";
				}else{
					echo "Planète non trouvée";
				}
				
			 ?>
			 <div class="clear"></div>
			 <div id="geolocation">Votre position</div>
	          <div id="map" style="width: 100%;height: 200px"></div>
	</div>
	<footer id="footer">
		Design by Florian 
	</footer>

</body>
</html>