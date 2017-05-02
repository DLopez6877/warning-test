$(function() {

  $("#formOne").submit(function(event) {
    var warningArray = [];
    var symptomsArray = [];
    var copingArray = [];

    $("input:checkbox[name=warning]:checked").each(function(){
      var warningChecked = $(this).val();
      warningArray.push(warningChecked);
    });
    $("input:checkbox[name=symptoms]:checked").each(function(){
      var symptomsChecked = $(this).val();
      symptomsArray.push(symptomsChecked);
    });
    $("input:checkbox[name=coping]:checked").each(function(){
      var copingChecked = $(this).val();
      copingArray.push(copingChecked);
    });

    if (copingArray.length >= 2 ) {
      $("#fine").show();
      $("#formOne").hide();
    } else if (warningArray.length >= 3 && symptomsArray.length >= 2) {
      $("#therapist-resources").show();
      $("#formOne").hide();
    } else if (warningArray.length >= 3 && symptomsArray.length < 2) {
      $("#warning-resources").show();
      $("#formOne").hide();
    } else if (symptomsArray.length >= 2 && warningArray.length < 3){
      $("#symptoms-resources").show();
      $("#formOne").hide();
    } else {
      $("#fine").show();
      $("#formOne").hide();
    }
    event.preventDefault();
  });
});
