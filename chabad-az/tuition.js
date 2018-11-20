function runJQueryJs() {
  const templateLess = jQuery('.cco_templateless_template');
  templateLess.remove();
}

(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      runJQueryJs();
    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
