(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      jQuery.ajax({
        method: 'get',
        // with thanks to https://sandbox.idre.ucla.edu/sandbox/general/databasing-google-spreadsheets-to-json
        url: `https://spreadsheets.google.com/feeds/list/1QgwArSCumynvBVzzZAI9aiFrYyOvVJSqVGwcNMdLOv8/osbmf08/public/values?alt=json`,
      })
      .then(function(data) {
          var $latestDonors = jQuery('#latest-donors');
          $latestDonors.html('');
          data.feed.entry.reverse().forEach((entry) => {
            const donor = entry.gsx$name.$t;
            const amount = entry.gsx$amount.$t;
            $latestDonors.append('<div class="donor-wrap"><div class="donor">' + donor + '</div><div class="amount">' + amount + '</div></div>');
          });
      });

      if (Co.ArticleId === '1278448') {
        const $article = jQuery('article');
        $article.html('<div id="dedication-container"></div>');
        const $container = jQuery('#dedication-container');
        jQuery.ajax({
          method: 'get',
          url: `https://spreadsheets.google.com/feeds/list/1QgwArSCumynvBVzzZAI9aiFrYyOvVJSqVGwcNMdLOv8/os6qyge/public/values?alt=json`,
        })
        .then(function(data) {
          data.feed.entry.forEach(function(entry) {
            const dedication = entry.gsx$dedication.$t;
            const donor = entry.gsx$donor.$t;

            const dedicationWrapped = '<h3>' + dedication + '</h3>';
            const donorWrapped = '<div class="donor-name">' + donor + '</div>';
            $container.append('<div class="dedication-item">' + dedicationWrapped + donorWrapped + '</div>');
          });
        });
      }

    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
