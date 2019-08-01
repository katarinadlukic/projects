
let data = [
  {
    "big_image":"slika1.jpg",
    "thumb_image":"slika1_thumb.png",
    "title":"Slika1",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika2.jpg",
    "thumb_image":"slika2_thumb.png",
    "title":"Slika2",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika3.jpg",
    "thumb_image":"slika3_thumb.png",
    "title":"Slika3",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika4.jpg",
    "thumb_image":"slika4_thumb.png",
    "title":"Slika4",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika5.jpg",
    "thumb_image":"slika5_thumb.png",
    "title":"Slika5",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika6.jpg",
    "thumb_image":"slika6_thumb.png",
    "title":"Slika6",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika7.jpg",
    "thumb_image":"slika7_thumb.png",
    "title":"Slika7",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika8.jpg",
    "thumb_image":"slika8_thumb.png",
    "title":"Slika8",
    "description":"Ovde ide opis"
  },
  {
    "big_image":"slika9.jpg",
    "thumb_image":"slika9_thumb.png",
    "title":"Slika9",
    "description":"Ovde ide opis"
  }
]

function init(){
  $("#main_image").html(( `<img src="${data[0].big_image}"/>`)) ;
  $("#0").css('background-color', 'rgb(27, 26, 26)');
  $("#title").html(data[0].title);
  $("#description").html(data[0].description);
  $.each(data, function(index, element) {
   $("#" + index).html(( `<img src="${element.thumb_image}"/>`)) ;
 });
}
// display images
function displayImages(x){
  $("#thumb_table").find("div").css('background-color', 'white');
  $("#main_image").html(( `<img src="${data[x].big_image}"/>`));
  $("#title").html(data[x].title);
  $("#description").html(data[x].description);
  $("#" + x).css('background-color', 'rgb(27, 26, 26)');
}

// klik na thumb sliku
$("#thumb_table").click(function(event){
  let x = event.target.parentNode.id;
  displayImages(x);
});
let i = 0;
// klik na desnu strelicu
$("#right_arrow").click(function(event){
  i++;
  if(i == 9){
    i = 0;
  }
  displayImages(i);
});
//klik na levu strelicu
$("#left_arrow").click(function(event){
  i--;
  if(i < 0){
    i = 8;
  }
  displayImages(i);
});
init();

