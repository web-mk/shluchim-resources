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
          // var currentAmount = data.feed.entry[0].gsx$thermometer.$t;
          // var amountNumber = parseInt(currentAmount);
          // var percentComplete = amountNumber / 150000 * 100;
          data.feed.entry.reverse().forEach((entry) => {
            const donor = entry.gsx$name.$t;
            const amount = entry.gsx$amount.$t;
            $latestDonors.append('<div class="donor-wrap"><div class="donor">' + donor + '</div><div class="amount">' + amount + '</div></div>');
          });
          // var counter = 0;
          // function change() {
          //   $latestDonors.text(donors[counter]);
          //   counter++;
          //   if (counter >= donors.length) {
          //     counter = 0;
          //   }
          // }
          // $latestDonors.text(donors[counter]);
          // counter ++;
          // var inst = setInterval(change, 2500);
          // jQuery('#current-text').text('$' + amountNumber.toLocaleString());
          // jQuery('#complete-percent').text(percentComplete.toString().split('.')[0] + '%');
          // jQuery('#current-wrapper').width(percentComplete + '%');
      });

      jQuery.ajax({
        method: 'get',
        url: `https://spreadsheets.google.com/feeds/list/1QgwArSCumynvBVzzZAI9aiFrYyOvVJSqVGwcNMdLOv8/os6qyge/public/values?alt=json`,
      })
      .then(function(data) {
        data.feed.entry.forEach(function(entry) {
          const dedication = entry.gsx$dedication.$t;
          const donor = entry.gsx$donor.$t;
          console.log(dedication, donor);
        });
      });

    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
