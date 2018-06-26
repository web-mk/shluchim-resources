(function defer() {
    if (window.jQuery) {
      jQuery(document).ready(function(e) {
        jQuery.ajax({
          method: 'get',
          // with thanks to https://sandbox.idre.ucla.edu/sandbox/general/databasing-google-spreadsheets-to-json
          url: `https://spreadsheets.google.com/feeds/list/1wenxlh8h2CVMjZboTkscevfWGnGy8xhmALkk_-soTQw/od6/public/values?alt=json`,
        })
        .then((data) => {
            var $latestDonors = jQuery('#latest-donors');
            var currentAmount = data.feed.entry[0].gsx$thermometer.$t;
            var amountNumber = parseInt(currentAmount);
            var percentComplete = amountNumber / 150000 * 100;
            data.feed.entry.reverse().forEach((entry) => {
              var donor = entry.gsx$donors.$t;
              var $li = jQuery('<li/>');
              $li.text(donor)
              .appendTo($latestDonors);
            });
            jQuery('#current-text').text('$' + amountNumber.toLocaleString());
            jQuery('#complete-percent').text(percentComplete.toString().split('.')[0] + '%');
            jQuery('#current-wrapper').width(percentComplete + '%');
        });
  
      });
    } else {
      setTimeout(function() {
        defer();
      }, 50);
    }
  })();
  