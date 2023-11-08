let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  new WOW().init();

  const classExists =
    document.getElementsByClassName("new-address-select").length > 0;

    const dateExists = document.getElementsByClassName("selector").length > 0;
    if (dateExists) {
      // commonjs // flatpicker date input
      $(".selector").flatpickr({});
      //flatpicker for events page to dispaly today
      $(".select-date").flatpickr({
        minDate: "today",
        maxDate: new Date().fp_incr(14), // 14 days from now
        defaultDate: "today",
      });
    }
    //file input
$(".custom-file-upload .upload-change").change(function () {
  let file_val;
  if ($(this).val() == "") {
    file_val = $(".file-txt").data("title");
  } else {
    file_val = $(this).prop("files")[0].name;
  }
  $(this).next().html(file_val);
});
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
});
