let banker = 1600;
let carpenter = 800;
let farmer = 400;


$("#partyMembers").hide();

function charSelectNext(){
let storeTotalMoney = $("#charSelect :selected").val();
    console.log(storeTotalMoney);
    $("#charSelectMenu").remove();
    $("#partyMembers").show();
}

$("#nextCharSelect").click(function(){
charSelectNext();
});

function partyMembersNext(){
  let memberOne =  $("#memberOne").val();
  let memberTwo =  $("#memberTwo").val();
  let memberThree =  $("#memberThree").val();
  let memberFour =  $("#memberFour").val();
  let memberFive =  $("#memberFive").val();
  console.log(memberOne, memberTwo, memberThree, memberFour, memberFive)
  $("#partyMembers").remove();
}


$("#nextPartyMembers").click(function(){
 partyMembersNext();
});



