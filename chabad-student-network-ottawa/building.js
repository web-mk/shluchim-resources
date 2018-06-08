(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      $.ajax({
        method: 'get',
        url: `https://spreadsheets.google.com/feeds/list/1VqxIarzdTnAKcPoD9Xvx6r1VHvnSaH8fccL1woxQPjg/od6/public/values?alt=json`,
      })
      .then((data) => {
          const entries = data.feed.entry;
          let donors = [];
          entries.forEach((entry) => {
            donors.push(entry.gsx$donors.$t);
          });
          console,log(donors);
      });

    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
