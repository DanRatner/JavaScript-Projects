"use strict";

var url = "https://rebrickable.com/api/v3/lego/sets/?key=20b9c91bccfbb2fe386f96991bd4c0ac&search=minecraft"

$(document).ready(function(){

    $.getJSON(url, function(data){
        var html = ""
        $.each(data.results, function(i, item){
            html += "<h2>" + item.name + "</h2>"
            html += "<p>" + item.year + "</p>"
            html += "<img src=" + item.set_img_url + ">"
            html += "<p><a href=" + item.set_url + " >Website</a></p>"
            
        });
        $("#lego").html(html)
      });

      

});