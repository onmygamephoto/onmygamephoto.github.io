$(document).ready(function(){

});

$.ajax({
  type: "GET",
  url: "gallery-info.csv",
  // url: "https://raw.githubusercontent.com/dlansigan/test-csv/main/gallery-info.csv?token=AD37W4Y7LJLDJBIWXLJUO4S73ORUU",
  async: false,
  dataType: "text",
  success: function(response)
  {
  data = $.csv.toObjects(response);
  processCSV(data);
  }
});

function processCSV(data) {
  var galleryDiv = document.getElementById("gallery-div");
  var subsecList = [];

  for (var i = 0; i < data.length; i++) {
    if ($.inArray(data[i].subsec,subsecList) == -1) {
      subsecList.push(data[i].subsec);
    }
  }

  for (var i = 0; i < subsecList.length; i++) {
    galleryDiv.innerHTML = galleryDiv.innerHTML + "<center><div class='subsec-header-text'>" + subsecList[i] + "</div></center><div id='subsec-div-" + i + "'></div>";
  }

  for (var i = 0; i < data.length; i++) {
    var imgName = data[i].filename;
    var subsecName = data[i].subsec;
    subsecIDNo = subsecList.findIndex(function(name){return name==subsecName});
    subsecID = "subsec-div-" + subsecIDNo;
    var subsecDiv = document.getElementById(subsecID)
    // subsecDiv.innerHTML = subsecDiv.innerHTML +data[i].subsec;
    var imgFilePath = "assets/gallery-images/"+data[i].subsec+"/"+data[i].filename;
    subsecDiv.innerHTML = subsecDiv.innerHTML + `<a href='`+imgFilePath+`' data-sub-html='<h4>`+data[i].title+`</h4><p>`+data[i].description+`</p>'><div class='thumb-container'><div class='light-img-div' style="background-image: url('`+imgFilePath+`')"></div></div></a>`
  }

  for (var i = 0; i < subsecList.length; i++) {
    $("body").append("<script>lightGallery(document.getElementById('subsec-div-"+i+"'));</script>");
  }

  var getElementByCla
}
