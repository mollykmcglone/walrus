jQuery(document).ready(function() {
  jQuery("h1").hover(function() {
    alert("This is a header.");
  });

  jQuery("h2").hover(function() {
    alert("This is a second-level header.");
  });

  jQuery("p").dblclick(function() {
    alert("This is a paragraph.");
  });

  jQuery("img").dblclick(function() {
    alert("This is an image.");
  });
});
