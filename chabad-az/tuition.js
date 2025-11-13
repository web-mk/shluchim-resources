function init() {
  const templateLess = jQuery('.cco_templateless_template');
  templateLess.remove();

  jQuery('.footer3').prepend(
    `<div>Notice: A School Tuition Organization cannot award, restrict or reserve scholarships solely on the basis of donor recommendation.
     <br>A taxpayer may not claim a tax credit if the taxpayer agrees to swap donations with another taxpayer to benefit either taxpayer's own dependent.
<br><br></div>`
  );

  var script = document.createElement('script'); 
  script.type = 'text/javascript'; 
  script.src = 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js';
  document.getElementsByTagName('head')[0].appendChild(script); 

  if (window.location.href.indexOf('3261625') > -1) {
    const hash = window.location.hash;
    const $refLine = jQuery('#id_26');
    if (hash.indexOf('#ref=') === 0) {
      const code = hash.slice(5);
      const $refInput = jQuery('#input_26');
      $refInput.val(code);
      $refLine.hide();
    } else {
      $refLine.hide();
    }
  }
}

(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      init();
    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
