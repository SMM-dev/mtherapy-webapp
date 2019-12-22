(function() {


    const CONTENT = [];


    //Select all links with same-page targets, EXCEPT carousel buttons
    $("a").each(function() {
        if (this.hash && !this.hash.includes("carousel")) CONTENT.push(this);
    });

    //Attach click listener to each same-page link
    CONTENT.forEach(function(link){
        $(link).on("click", toggle);
    });

    //hide all content except welcome message on initial load
    $( document ).ready(function() {
        CONTENT[0].click();
    });

    //Hide all except content that corresponds with link clicked
    function toggle (e) {
        e.preventDefault();
        hideall();
        $(this.hash).show();
    }

    function hideall () {
        CONTENT.map(function(i) {
            $(i.hash).hide();
        });
    }

    //Bootstrap navbar change active link
    $(".nav .nav-link").on("click", function(e){
        e.preventDefault();
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
})();