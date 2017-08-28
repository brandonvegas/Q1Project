var RepData = [];
var $div = $("<div>", {id: "foo", "class": "brandontest"});
$(document).ready(function(){


//these are variables
  var url= 'https://galvanize-cors-proxy.herokuapp.com/http://whoismyrepresentative.com/getall_mems.php?zip=';
  var $userInput;



//31023&output=json

  $('button').click(function() {
    $userInput= $("#something").val();
    $userInput = parseInt($userInput);
    $userInput += "&output=json";
    url+=$userInput;
    // console.log(url)
    $.ajax({
      method: "GET",
      url: url+=$userInput
    })
    .then(function(data) {
        console.log(data);
        RepData.push(jQuery.parseJSON(data));
    var LoopThis = RepData[0].results;
    console.log(data);
    for (var i = 0; i < LoopThis.length; i++) {
      console.log(LoopThis[i]);
      // $("#RepName").text(RepData[0].results[0].name)
       $(".informationDump").append(data).text(RepData.results[0]);
      //$(".informationDump").append($div).text(RepData[0].results[0].party);
      // // $("#CongressInformation").append($div).text(RepData[0].results[0].district);
      // // $("#CongressInformation").append($div).text(RepData[0].results[0].phone);
      //  $("#CongressInformation").append($div).text(RepData[0].results[0].office);
      //  //$("#CongressInformation").append($div).text(RepData[0].results[0].link);
      // // $("#CongressInformation").append($div).text(RepData[0].results[1].name);
      // // $("#CongressInformation").append($div).text(RepData[0].results[1].party);
      // // $("#CongressInformation").append($div).text(RepData[0].results[1].district);
      // // $("#CongressInformation").append($div).text(RepData[0].results[1].phone);
      //  $("#CongressInformation").append($div).text(RepData[0].results[1].office);
      //  //$("#CongressInformation").append($div).text(RepData[0].results[1].link);
      // // $("#CongressInformation").append($div).text(RepData[0].results[2].name);
      // // $("#CongressInformation").append($div).text(RepData[0].results[2].party);
      // // $("#CongressInformation").append($div).text(RepData[0].results[2].district);
      // // $("#CongressInformation").append($div).text(RepData[0].results[2].phone);
      //  $("#CongressInformation").append($div).text(RepData[0].results[2].office);
      //  //$("#CongressInformation").append($div).text(RepData[0].results[2].link);
    }
    })
  })
});
