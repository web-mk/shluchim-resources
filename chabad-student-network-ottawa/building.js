(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      $.ajax({
        method: 'get',
        // with thanks to https://sandbox.idre.ucla.edu/sandbox/general/databasing-google-spreadsheets-to-json
        url: `https://spreadsheets.google.com/feeds/list/1VqxIarzdTnAKcPoD9Xvx6r1VHvnSaH8fccL1woxQPjg/od6/public/values?alt=json`,
      })
      .then((data) => {
          var $latestDonors = $('#latest-donors');
          data.feed.entry.forEach((entry) => {
            var donor = entry.gsx$donors.$t;
            var $li = $('<li/>');
            $li.text(donor)
            .appendTo($latestDonors);
          });
      });

    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
