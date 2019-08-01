function getJson(url) {
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
let data = getJson('https://api.myjson.com/bins/1as1kd');
let intervalId =  setInterval(interval, 4000);
function init(){
  $("#main_image").html(( `<img src="${data[0].big_image}"/>`)) ;
  $("#0").css('background-color', 'rgb(27, 26, 26)');
  $("#title").html(data[0].title);
  $("#description").html(data[0].description);
  $.each(data, function(index, element) {
   $("#" + index).html(( `<img src="${element.thumb_image}"/>`)) ;
 });
}
// klik na thumb sliku
$("#thumb_table").click(function(event){
  let x = event.target.parentNode.id;
  displayImages(x);
});
let i = 0;
// klik na desnu strelicu
$("#right_arrow").click(function(event){
  clearInterval(intervalId);
  i++;
  if(i == 9){
    i = 0;
  }
    displayImages(i);
    intervalId =  setInterval(interval, 4000);
});
//klik na levu strelicu
$("#left_arrow").click(function(event){
  clearInterval(intervalId);
  i--;
  if(i < 0){
    i = 8;
  }
    displayImages(i);
    intervalId = setInterval(interval, 4000);
});
// funkcija za izbacivanje slika
function displayImages(x){
  $("#thumb_table").find("div").css('background-color', 'white');
  $("#main_image").hide().html(( `<img src="${data[x].big_image}"/>`)).fadeIn(500);
  $("#title").html(data[x].title);
  $("#description").html(data[x].description);
  $("#" + x).css('background-color', 'rgb(27, 26, 26)');
}
function interval(){ 
  i++;
  if(i == 9){
    i = 0;
  }
  displayImages(i);
 };
 init();

