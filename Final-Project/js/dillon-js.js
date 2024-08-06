//jquery for lms600 page
$(document).ready(function(){
    $(function(){
        //$("#header").load("header.html");
        $("#footer").load("footer.html");
    });

    var lms600Aside1Btn = document.getElementById("aside1Btn");
    var lms600Aside2Btn = document.getElementById("aside2Btn");

    //hover effects for buttons
    $("#cartBtn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#25bf13');
            $(this).css('border', '#25bf13');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#1b8c0e');
            $(this).css('border', '#1b8c0e');
        }
    );

    $("#aside1Btn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#f2dcb6');
            $(this).css('border', '#f2dcb6');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#dec69e');
            $(this).css('border', '#dec69e');
        }
    );

    $("#aside2Btn").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#f2dcb6');
            $(this).css('border', '#f2dcb6');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#dec69e');
            $(this).css('border', '#dec69e');
        }
    );

    /* hover effects for the footer */
    $("#footerEmail").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#9f9e9e');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#525252');
        }
    );

    $("#footerPhone").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#9f9e9e');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#525252');
        }
    );

    $("#footerSubmit").hover(
        function(){
            // mouse enter
            $(this).css('background-color', '#9f9e9e');
        },
        function(){
            // mouse leave
            $(this).css('background-color', '#525252');
        }
    );
});