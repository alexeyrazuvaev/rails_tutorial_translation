$(document).ready(function(){
  if (document.location.pathname =='/help') { return false; }

  $('a').click(function (event) {
    event.stopPropagation();
  });

  $('p').click(function() {

    if ($(this).hasClass('clicked')) {
      clear_all_clicked();
      return false;
    };

    clear_all_clicked();

    var refresh  = '?cache_refresher_0',
        pathname = window.location.pathname,
        is_4_0   = pathname.split('/')[2] === '4_0',
        index    = $('p').index(this),
        version, chapter, paragraph;

    if (is_4_0) {
      chapter   = pathname.split('/')[3] || 'beginning';
      paragraph = p_for_load('/origin/4_0/', index);
    } else {
      version   = window.location.search.split('=')[1] || '';
      chapter   = pathname.split('/')[2] || 'beginning';
      paragraph = p_for_load('/origin' + version + '/', index);
    }

    $(this).addClass('clicked');
    $(this).after('<div class="origin"> </div>');
    $('div.origin')
      .hide()
      .load(paragraph)
      .show('fast');

    // build loading path for paragraph from the given chapter with the given index
    function p_for_load (path_to_fragment, index) {
      var p_for_load = [
        path_to_fragment, chapter, '_fragment.html', refresh, ' p:eq(', index, ')'
      ].join('');

      return p_for_load;
    };

    function clear_all_clicked () {
      $('div.origin').remove();
      $('p').removeClass('clicked');
    };
  });
});

