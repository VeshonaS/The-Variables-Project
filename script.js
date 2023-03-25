let dudename;

let aguanum;

let agenum;


$("#namae").click(function() {

    $(".no-see2").fadeIn();

    dudename = $("#nombre").val();
    $("#hold").append(`<p>What's up ${dudename}, I know this is wierd, but just work with me plz...okay?</p>`);
});

$("#sabe").click(function() {

    $(".no-see3").fadeIn();

    aguanum = $("#mizu").val();
    $("#hold2").append(`<p>That's all? Just ${aguanum} </p>`);
});

$("#edad").click(function() {

    $(".no-see32").fadeIn();

    agenum = $("#age").val();
    $("#hold3").append(`<p>${agenum}? Wow, you're young.</p>`);

});

$("#size").click(function() {

    var result = aguanum * agenum;


    console.log(result);
    
    $("#spothold").show();

    $("#spothold").append(`<p>With all the information I"ve gathered from you, ${dudename} I can tell you that... Water will be wet, for ${result} more years </p><h6>...and forever</h6><p>...enjoy :)</p>`);
    
  
});
