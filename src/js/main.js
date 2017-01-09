import '../scss/main.scss';

// reset scroll position on unload so it's not remembered when refreshing
window.addEventListener('unload', function(e){
   window.scrollTo(0,0);
});