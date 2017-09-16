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
					$('webview').hide();
					$('#iottalk_gui').show();
					break;
				case '2':
					$('webview').hide();
					$('#dfm').show();
					break;
				case '3':
					$('webview').hide();
					$('#monitor').show();
					break;
			}
		}
	});
}
