$(document).ready(function(){
  if (document.location.pathname =='/help') {
    return;
  }

  $("a").click(function (event) {
    event.stopPropagation();
  });

  $("p").toggle(
    function() {
      $("p").css("background-color","");
      $('div.origin').remove();

      var version = window.location.search.split('=')[1] || '';
      var chapter = window.location.pathname.split('/')[2] || 'beginning';

      var index = $("p").index(this);
      var p_for_load = '/origin' + version + '/' + chapter + '_fragment.html p:eq(' + index + ')';

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

