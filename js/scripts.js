// business logic
var vowels = ['a', 'e', 'i', 'o', 'u'];
phrase = "";

// var replaceVowel = function(phrase) {
//   for (index=0; index < phrase.length; index += 1) {
//     if((vowels).includes(phrase[index])) {
//         (phrase).replace(phrase[index], "-");
//     } else {
//       phrase[index];
//     }
//   }
//   return phrase
// };

// interface logic
$(document).ready(function() {
  $("form#input").submit(function() {
    event.preventDefault();

    var newPhrase = $("input#phrase").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    var phraseString = newPhrase.split("");

    for (i = 0; i < phraseString.length; i++) {
      for (var index = 0; index < vowels.length; index++) {
        if (phraseString[i] === vowels[index])
        phraseString[i] = "-";

    var newStringArray = phraseString.join(" ");

    // var result = replaceVowel(newPhrase);
    // console.log(newPhrase);
    // console.log(typeof newPhrase);
    //
    // $("#input").hide();
    $("#resultForm").show();
    $(".modifiedPhrase").text(newStringArray);
      };
    };
  });
});
