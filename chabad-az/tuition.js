function runJQueryJs() {
  const templateLess = jQuery('.cco_templateless_template');
  templateLess.remove();

  jQuery('.footer3').prepend(
    "<div>Notice: A school cannot award, restrict or reserve scholarships solely on the basis of donor recommendation. <br />A Taxpayer may not claim a tax credit if the taxpayer agrees to swap donations with another taxpayer to benefit either taxpayer's own dependent.<br /><br /></div>"
  );
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
