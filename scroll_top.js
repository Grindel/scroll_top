var scroller = document.createElement('div');
scroller.id = "top_scroll_scroller"
scroller.style.cssText = 'min-height: ' + document.documentElement.clientHeight + 'px;' +
						 'width: 1px; position: fixed; top: 0; left: 0; z-index: 1000;'
scroller.onclick = function() {scrollTo(0,0)}
document.body.appendChild(scroller);
