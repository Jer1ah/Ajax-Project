$.ajax({
  url: 'https://randomuser.me/api/?results=5000',
  dataType: 'json',
  success: function(data) {
    let html = "<ul>"
    for(i = 0; i < 12; i++) {
         
       html += "<li>";
       html += "<img src=" + '"' + data.results[i].picture.medium + '">';
       html += "<div class='main'>"
       html += "<h3>" + data.results[i].name.first + " " + data.results[i].name.last + "</h3>";
       html += "<p>" + data.results[i].email + "</p>";
       html += "<p>" + data.results[i].location.city + "</p>";
       html += "<div class='popup'>";
       html += "<p class='top'>" + data.results[i].phone + "</p>";
       html += "<p>" + data.results[i].location.street + ", " + data.results[i].location.state + ", " + data.results[i].location.postcode + "</p>";
       html += "<p>" + "Birthday: " + data.results[i].dob + "</p>";
       html += "</div>";
       html += "</div>";
       html += "</li>";
    }   
      html += "</ul>"
      $("#employeeList").html(html);  
      
                    
    $("li").on("click", function () {
     var $li = '<li>' + this.innerHTML +'<li>';
     $(".overlay").show();
     $(".modal").html($li);
     $(".modal li .popup").css("display", "flex").css("flex-direction", "column");
     $(".modal img").css("width", 150).css("height", 150).css("margin-top", "2.5em");
     $(".modal li").css("flex-direction", "column").css("align-items", "center").css("text-align", "center");   
  });

   $(".overlay").on("click", function () {
     $(".overlay").hide();
  });
      
  }
});



