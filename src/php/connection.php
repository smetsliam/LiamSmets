<?php
define("DB_SERVER", "com-linweb844.srv.combell-ops.net:3306");
define("DB_USERNAME", "ID389900_mainwebsite");
define("DB_PASSWORD", "DATABASEIsgMC1984?");
define("DB_NAME", "ID389900_mainwebsite");

# Connection
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

# Check connection
if (!$link) {
  die("Connection failed: " . mysqli_connect_error());
}
?>