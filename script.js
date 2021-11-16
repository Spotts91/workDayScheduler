$(document).ready(function() {
    $(".saveBtn").on('click', function() {
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        localStorage.setItem(time, value)
    });

    function hourCheck() {
        var currentHour = moment().hours();

        $("time-block").each(function() {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);

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

    
})