(function defer() {
    if (window.jQuery) {
      jQuery(document).ready(function(e) {

        $(window).scroll(function(){
          $('#therm-contain').css('opacity', 1 - $(window).scrollTop() / 800);
        });
        jQuery('.footer3').prepend('<div><p>Mikvah Campaign & Chabad Expansion for Chabad of the Space & Treasure Coasts. Chabad is a 501(c)3 charity and all contributions to it are tax deductible.</p></div>');
        jQuery('.cco_templateless_template').remove();

        var script = document.createElement('script'); 
        script.src = 'https://netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js'; 
        document.head.appendChild(script); 
      });
    } else {
      setTimeout(function() {
        defer();
      }, 50);
    }
  })();
  