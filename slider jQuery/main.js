    let data = getJson('https://api.myjson.com/bins/1as1kd');
    let intervalId =  setInterval(interval, 2000);
    let color = "gray"; // boja pozadine i bordera
    let time = 3000; // tajmer za autoplay
    let showText = true; // sa ili bez texta
    let i = 0;
    function getJson(url) { // ajax poziv
      return JSON.parse($.ajax({
          type: 'GET',
          url: url,
          dataType: 'json',
          global: false,
          async: false,
          success: function (data) {
              return data;
          }
      }).responseText);
    }

    function init(color){ // onload
        $("#main_image").html(( `<img src="slike/${data[0].big_image}"/>`)) ;
        $("#image_box").css('height', "300px");
        if (showText){
          imageText(0);
          $("#image_box").css('height', "370px");
          $("#image_box").css('background-color', color);
          $("#0").css('background-color', color);
        }
        $.each(data, function(index, element) {
          $("#" + index).html(( `<img src="slike/${element.thumb_image}"/>`)) ;
        });
    }
   
    $("#thumb_table").click(function(event){  // klik na thumb sliku
      let x = event.target.parentNode.id;
      displayImages(x, color);
    });
 
    $("#right_arrow").click(function(event){   // klik na desnu strelicu
      clearInterval(intervalId);
      i++;
      if(i == 9){i = 0;}
        displayImages(i, color);
        intervalId =  setInterval(interval,time);
    });
   
    $("#left_arrow").click(function(event){  //klik na levu strelicu
      clearInterval(intervalId);
      i--;
      if(i < 0){i = 8;}
        displayImages(i, color);
        intervalId = setInterval(interval, time);
    });
    
    function displayImages(x,color){ // funkcija za izbacivanje slika
      $("#thumb_table").find("div").css('background-color', 'white');
      $("#main_image").hide().html(( `<img src="slike/${data[x].big_image}"/>`)).fadeIn(500);
      $("#image_box").css('height', "300px");
      if (showText){
        imageText(x);
        $("#image_box").css('height', "370px");
        $("#image_box").css('background-color', color);
        $("#" + x).css('background-color', color);
      }
    }
   
    function interval(){  // funkcija za autoplay
      i++;
      if(i == 9){ i = 0; }
      displayImages(i, color);
     };
  
     function imageText(x){ // prikaz texta ispod slike
      $("#title").html(data[x].title);
      $("#description").html(data[x].description);
     }
     init(color);


