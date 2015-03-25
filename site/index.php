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
			
				<h2>Bonjour,</h2>
				<h4>Vous êtes perdu(e) et chercher votre planète</h4>
			
				<button class="button">C'est Ici</button>
			
		</div>
	</header>
	<div id="main" >
			<div><br/></div>
			<form method="get" action="detail.php">
			 	<input type="text" name="item" placeholder="Taper le nom d'une planète">
			 	<input type="submit" value="Rechercher" class="button">
			 </form>
			<?php 
				$file_content = file_get_contents("planet-list.json");
				$content_decode = json_decode($file_content, true);
				
				$list = "<ul class='list'>";
				foreach ($content_decode as $k => $item) {
					$description = substr($item['description'],0,100).'...';
					$list .="<li>
								<h3>{$k}</h3>
								<img src='img/{$item['image']}' alt='{$k}'>
								<p>Distance : {$item['distance']}</p>
								<p>Rayon : {$item['rayon']}</p>
      							<p>{$description}</p>
      							<p><a href='detail.php?item={$k}'>Lire la suite</a></p>
							 </li>";
				}
				$list .= "</ul>";
				echo $list;
			 ?>
			 <div id="geolocation">Votre position</div>
	          <div id="map" style="width: 100%;height: 200px"></div>
	</div>
	<footer id="footer">
		Design by Florian 
	</footer>

</body>
</html>