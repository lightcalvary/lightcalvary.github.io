function loadintoIframe(info) {
				if (typeof info.id !== 'undefined' && typeof info.src !== 'undefined') {
					document.getElementById(info.id).src = info.src;
					
				}
			}			
			window.onload = function(){
				document.forms['usernamea'].elements['loadiframe'].onclick = function(){
					loadintoIframe({id:"iframemain",src:document.forms['headerform'].elements['usernamea'].value});
				}
			}