function setIdioma(idioma){setCookie("lan",idioma,30)
ponerIdioma(idioma)}function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*86400000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+"; "+expires;}function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return"";}function getIdioma(){var cook=getCookie("lang");if(cook!=""){ponerIdioma(cook)}else{ponerIdioma("ES")}}function ponerIdioma(cual){document.getElementById("ES").style.display="none";document.getElementById("CA").style.display="none";document.getElementById(cual).style.display="block";setCookie("lang",cual,1)}