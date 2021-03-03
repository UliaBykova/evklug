$(function () {
  $("#accordion").accordion({
    fillSpace: true,
    collapsible: true,
    active: false,
    icons: false,
    heightStyle: "content"
  });
});

$('.accordion__subtitle').click(function () {
  if (!$(this).hasClass('active')) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
});