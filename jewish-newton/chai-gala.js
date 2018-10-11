function calculate() {
  var $trusteeCircle = jQuery("#input_4_0");
  var $emeraldSponsor = jQuery("#input_4_1");
  var $diamondBuilder = jQuery("#input_4_2");
  var $goldenBenefactor = jQuery("#input_4_3");
  var $chaiSupporter = jQuery("#input_4_4");
  var $silverPatron = jQuery("#input_4_5");
  var $fullPageAd = jQuery("#input_4_6");
  var $halfPageAd = jQuery("#input_4_7");
  var $quarterPageAd = jQuery("#input_4_8");
  var $contribution = jQuery("#input_4_9");

  var $includedGuestCount = jQuery("input#input_12");
  var $includedDinnerReservations = jQuery("#id_12");
  var $paidDinnerReservations = jQuery("#id_8");
  var $adText = jQuery("#id_10");

  var $paidReservationsLabel = jQuery("label[for=input_8]:nth-child(1)");

  function updateFields(numSeats, ad) {
    $includedGuestCount.prop("max", numSeats);
    if (ad) {
      $adText.show("slow");
    }
    
    if (numSeats) {
      $includedDinnerReservations.show("slow");
      $paidReservationsLabel.text("Additional Paid Dinner Reservations");
    }
  }

  function hideFields() {
    $includedDinnerReservations.hide("slow");
    $adText.hide("slow");
    $paidReservationsLabel.text("Number of Dinner Reservations");
    $includedGuestCount.removeAttr("max");
  }

  $trusteeCircle.change(function() {
    jQuery(this).is(":checked") ? updateFields(10, true) : hideFields();
  });

  $emeraldSponsor.change(function() {
    jQuery(this).is(":checked") ? updateFields(10, true) : hideFields();
  });

  $diamondBuilder.change(function() {
    jQuery(this).is(":checked") ? updateFields(10, true) : hideFields();
  });

  $goldenBenefactor.change(function() {
    jQuery(this).is(":checked") ? updateFields(4, true) : hideFields();
  });

  $chaiSupporter.change(function() {
    jQuery(this).is(":checked") ? updateFields(2, true) : hideFields();
  });

  $silverPatron.change(function() {
    jQuery(this).is(":checked") ? updateFields(2, true) : hideFields();
  });

  $fullPageAd.change(function() {
    jQuery(this).is(":checked") ? updateFields(0, true) : hideFields();
  });

  $halfPageAd.change(function() {
    jQuery(this).is(":checked") ? updateFields(0, true) : hideFields();
  });

  $quarterPageAd.change(function() {
    jQuery(this).is(":checked") ? updateFields(0, true) : hideFields();
  });

  $contribution.change(function() {
    jQuery(this).is(":checked") ? updateFields(0, false) : hideFields();
  });
}

(function defer() {
  if (window.jQuery) {
    jQuery(document).ready(function(e) {
      calculate();
    });
  } else {
    setTimeout(function() {
      defer();
    }, 50);
  }
})();
