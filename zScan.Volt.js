/*
Volt Network Solutions
--
zScan for Zebra MC18/PS20 Handheld Scanners - v2
-- 
*/
document.addEventListener("DOMContentLoaded",function(){var e="";document.addEventListener("keydown",function(n){"Unidentified"!==n.key&&(13===n.keyCode?(handleScannedBarcode(e.startsWith("0")?e.slice(1):e),e=""):e+=n.key)})});