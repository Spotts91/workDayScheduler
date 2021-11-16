$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value)
    });

    function hourCheck() {
        var currentHour = moment().hours();

        $(".time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);
            console.log(hourBlock)

            if(hourBlock < currentHour) {
                $(this).addClass("past");
            }
            else if(hourBlock === currentHour) {
                $(this).removeClass("past")
                $(this).addClass("present")
            }
            else{
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourCheck();
    var interval = setInterval(hourCheck, 15000);
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));



    $("#currentDay").text(moment().format("dddd, MMMM Do"))
});