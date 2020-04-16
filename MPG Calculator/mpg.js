
     "use strict";
        var $ = function(id) {
            return document.getElementById(id);
        };
        var calculateMpg = function(miles, gallons) {
			var mpg = (miles / gallons);
			mpg = mpg.toFixed(1);
			return mpg;
		};
		var processEntries = function() {
            var miles = parseFloat($("miles").value);
            var gallons = parseFloat($("gallons").value);

            if (isNaN(miles)){
                alert("Miles must be numeric.");
                $("miles").focus();
            } 
            else if (miles <= 0) {
            	alert("Miles must be greater than zero.");
            	$("miles").focus();
            }
            else if (isNaN(gallons)) {
            	alert("Gallons must be numeric.");
            	$("gallons").focus();
            }
            else if (gallons <= 0) {
            	alert("Gallons must be greater than zero");
            	$("gallons").focus();
            }
            else {
                $("mpg").value = calculateMpg(miles, gallons);
            }
        };
        var clearEntries = function() {
			$("miles").value = "";
			$("gallons").value = "";
			$("mpg").value = "";
		};
		window.onload = function() {
            $("calculate").onclick = processEntries;
            $("miles").focus();
            $("clear").onclick = clearEntries;
            $("miles").ondblclick = clearEntries;
        };


        