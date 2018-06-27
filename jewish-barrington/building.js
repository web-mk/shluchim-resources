(function defer() {
    if (window.jQuery) {
      jQuery(document).ready(function(e) {
        jQuery.ajax({
          method: 'get',
          // with thanks to https://sandbox.idre.ucla.edu/sandbox/general/databasing-google-spreadsheets-to-json
          url: `https://spreadsheets.google.com/feeds/list/1wenxlh8h2CVMjZboTkscevfWGnGy8xhmALkk_-soTQw/od6/public/values?alt=json`,
        })
        .then((data) => {
            var $latestDonors = jQuery('#latest-donors-appear');
            var currentAmount = data.feed.entry[0].gsx$thermometer.$t;
            var amountNumber = parseInt(currentAmount);
            var percentComplete = amountNumber / 150000 * 100;
            var donors = [];
            data.feed.entry.reverse().forEach((entry) => {
              var donor = entry.gsx$donors.$t;
              donors.push(donor);
            });
            var counter = 0;
            function change() {
              $latestDonors.text(donors[counter]);
              counter++;
              if (counter >= donors.length) {
                counter = 0;
              }
            }
            $latestDonors.text(donors[counter]);
            counter ++;
            var inst = setInterval(change, 2500);
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
  