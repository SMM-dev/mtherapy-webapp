(() => {
    const ABOUT_T = $('#abt_tab');
    const LOC_T = $('#loc_tab');
    const APNT_T = $('#apnt_tab');
    const REV_T = $('#rev_tab');
    const CONTENT = $('#content-pane');
    const MAP = $('#map');
    const PHONE = "Phone:<br> (123) 456-7983"; //Phone# also referenced in server.js

    const ADDRESS = "Location:<br>" +
        "677 Woodland Square Lp SE<br>" +
        "Ste - C 4<br>" +
        "Lacey, WA 98503<br><br>";

    const ABOUT_BLURB = "Do you hurt?  I specialize in helping to give relief from pain. <br>" +
        "At the Faithful Massage Therapist, each client will be treated individually to meet their personal needs.<br>" +
        "During your session we will address the problems you are facing.<br>" +
        "During our time different modalities can be used such as:<br>" +
        "Deep tissue, Swedish, trigger point, etc.<br>" +
        "Giving the body the tools it needs to heal and relax.";


    ABOUT_T.on("click", () => {
        updateContent(ABOUT_T);
    });

    LOC_T.on("click", () => {
        updateContent(LOC_T);
    });

    APNT_T.on("click", () => {
        updateContent(APNT_T);
    });

    REV_T.on("click", () => {
        updateContent(REV_T);
    });


    const updateContent = (tab) => {

        toggleMap();


        switch(tab){
            case ABOUT_T:
                CONTENT.html(ABOUT_BLURB);
                break;

            case LOC_T:
                CONTENT.html(
                    `${ADDRESS}
                    ${PHONE}
                    `
                );
                break;

            case APNT_T:
                CONTENT.html("Here is how to make an appointment");
                break;

            case REV_T:
                CONTENT.html("Here are some reviews");
                break;

            default:
                CONTENT.html("This content is currently unavailable");
                break;
        }
    };

    const toggleMap = () => {
        if (LOC_T.is(":focus")){
            MAP.show();
        } else {
            MAP.hide();
        }
    };

    //Begin with the ABOUT tab clicked
    ABOUT_T.trigger('click');
})();