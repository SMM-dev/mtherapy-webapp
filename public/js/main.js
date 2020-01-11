$(document).ready(function(){
    // Attach smooth scroll effect to all local-target anchor tags
    $('a[href^="#"]').click(function(e) {
        // Prevent the jump and the #hash from appearing on the address bar
        e.preventDefault();
        // Scroll the window, stop any previous animation, stop on user manual scroll
        $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
    });
});