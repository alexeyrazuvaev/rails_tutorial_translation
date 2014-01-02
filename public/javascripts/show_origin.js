$(document).ready(function(){
  if (document.location.pathname =='/help') { return false; }

  $("a").click(function (event) {
    event.stopPropagation();
  });

  $("p").toggle(
    function() {
      $("p").css("background-color","");
      $('div.origin').remove();

      var pathname = window.location.pathname,
          is_4_0   = pathname.split('/')[2] === '4_0',
          index    = $("p").index(this),
          version, chapter, p_for_load;

      if (is_4_0) {
        chapter    = pathname.split('/')[3] || 'beginning';
        p_for_load = '/origin/4_0/' + chapter + '_fragment.html p:eq(' + index + ')';
      } else {
        version    = window.location.search.split('=')[1] || '';
        chapter    = pathname.split('/')[2] || 'beginning';
        p_for_load = '/origin' + version + '/' + chapter + '_fragment.html p:eq(' + index + ')';
      }

      $(this).css("background-color","#fffacd");
      $(this).after (function() { return ('<div class="origin"> </div>');});
      $("div.origin").load(p_for_load);

    },
    function(){
      $('div.origin').remove();
      $(this).css("background-color","");
    }
  );
});

