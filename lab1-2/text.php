<?php

header("Content-type: text/plain; charset=windows-1251");
header("Cache-Control: no-store, no-cache, must-revalidate");
$tmp = $_POST['param'];
file_put_contents('file.txt', $tmp);
?>

