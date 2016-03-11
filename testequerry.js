


$("#buttonres").bind("click", function (event) {
    
     Sum = 0;
	
	 
	 if ($(".q1").eq(0).prop("checked")) {        // for 1q
	 	Sum++;
	 }

	 if ($(".q2").eq(2).prop("checked")) {        // for 2q
	 	Sum++;
	 }
	 
	 if ($(".q3").eq(3).prop("checked")) {      // for 3q
	 	Sum++;
	 }
	 
	  
     if ($(".q4").eq(0).prop("checked") == false && $(".q4").eq(1).prop("checked") && $(".q4").eq(2).prop("checked") == false && $(".q4").eq(3).prop("checked")) {     //for 4q
     	Sum++;
     }
	
     if ($(".q5").eq(2).prop("checked") == false && $(".q5").eq(0).prop("checked") && $(".q5").eq(3).prop("checked") == false && $(".q5").eq(1).prop("checked")) {      // for 5q
     	Sum++;
     }

	 
  alert("Вы набрали: " + Sum + " баллов из 5!");

});

