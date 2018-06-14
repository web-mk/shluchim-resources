(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      jQuery.ajax({
        method: 'get',
        // with thanks to https://sandbox.idre.ucla.edu/sandbox/general/databasing-google-spreadsheets-to-json
        url: `https://spreadsheets.google.com/feeds/list/1VqxIarzdTnAKcPoD9Xvx6r1VHvnSaH8fccL1woxQPjg/od6/public/values?alt=json`,
      })
      .then((data) => {
          var $latestDonors = jQuery('#latest-donors');
          var currentAmount = data.feed.entry[0].gsx$thermometer.$t;
          var amountNumber = parseInt(currentAmount);
          var percentComplete = amountNumber / 500000 * 100;
          data.feed.entry.reverse().forEach((entry) => {
            var donor = entry.gsx$donors.$t;
            var $li = jQuery('<li/>');
            $li.text(donor)
            .appendTo($latestDonors);
          });
          jQuery('#current-text').text('$' + amountNumber.toLocaleString());
          jQuery('#current-wrapper').height(percentComplete + '%');
      });

    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
