jQuery(function($) {
  $.i18n().load({
    'en': 'i18n/en.json',
    'pl': 'i18n/pl.json'
  }).done(function() {
      $('html').i18n();
  $('.locale-switcher').on('click', 'a', function(e) {
      e.preventDefault();
      $('.locale-switcher a').toggleClass('selected-language');
      $.i18n().locale = $(this).data('locale');
        $('html').i18n();
    });
})
});
