onload = () => {
	//webview
	const webview = document.querySelector('webview');
	//const indicator = document.querySelector('.indicator');
	const loadstart = () => {
		//indicator.innerText = 'loading...';
	}
	const loadstop = () => {
		//indicator.innerText = '';
	}
	webview.addEventListener('did-start-loading', loadstart);
	webview.addEventListener('did-stop-loading', loadstop);

	//UI
	$('.menu').on('click', '.item', function() {
		if(!$(this).hasClass('dropdown')) {
			$(this).addClass('active').siblings('.item')
			.removeClass('active');
			switch($(this).attr("index")){
				case '1':
					$('webview').fadeOut(300);
					$('#iottalk_gui').fadeIn(300);
					break;
				case '2':
					$('webview').fadeOut(300);
					$('#dfm').fadeIn(300);
					//document.querySelector('webview').reload();
					break;
				case '3':
					$('webview').fadeOut(300);
					$('#monitor').fadeIn(300);
					//document.querySelector('webview').reload();
					break;
			}
		}
	});
	$('.ui.dropdown').dropdown();

	$('.ui.dropdown.item').find('.menu').children().each(
		function() {
  			$(this).click(function(){
				const remote = require('electron').remote;
				const BrowserWindow = remote.BrowserWindow;
				var win = new BrowserWindow({webPreferences: {
            	nodeIntegration: false
		   }});
				win.loadURL($(this).attr('url'));
  			});
		}
	);
}
