(function(){var p=location.pathname;if(/\.html$/.test(p)){history.replaceState(null,'',p.replace(/\/?index\.html$/,'/').replace(/\.html$/,'')+location.search+location.hash);}})();
