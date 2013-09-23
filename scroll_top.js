var scroller = document.createElement('div');
scroller.id = "top_scroll_scroller"
scroller.style.cssText = 'min-height: ' + document.documentElement.clientHeight + 'px;' +
						 'width: 1px; position: absolute; top: 0; left: 0;'
scroller.onclick = function() {scrollTo(0,0)}
document.body.appendChild(scroller);
