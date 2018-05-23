(() => {

const ABOUT_T = $('#abt_tab');
const LOC_T = $('#loc_tab');
const APNT_T = $('#apnt_tab');
const SUB_HEAD = [$('#ct_hdr'), $('#ct_hdr2')];
const SUB_TEXT = [$('#ct_bdy'), $('#ct_bdy2')];
const MAP = $('#map');


const AVAILABILITY =
    "Mon: 10:00 am - 6:00 pm <br/>" +
    'Tue: 10:00 am - 6:00 pm <br/>' +
    'Wed: closed <br/>' +
    'Thu: 10:00 am - 6:00 pm <br/>' +
    'Fri: closed <br/>' +
    'Sat: 1:00 pm - 4:00 pm <br/>' +
    'Sun: closed'


const EMAIL = "faithwhaleymsg@test.com";
const PHONE = "(123) 456-7983"; //Phone# also referenced in server.js
const ADDRESS = "677 Woodland Square Lp SE<br/>" +
    "Ste - C 4<br/>" +
    "Lacey, WA 98503<br/>";
const ABOUT_BLURB = "Do you hurt?  I specialize in helping to give relief from pain. <br/>" +
    "Each client is treated according to their individual needs.<br/>" +
    "During your session we will address the problems you are facing.<br/><br/>" +
    "Modalities include:<br/>" +
    "Deep tissue, Swedish, trigger point, etc.<br/>" +
    "Giving the body the tools it needs to heal and relax.";

const APNT_MSG = "Online Booking Coming Soon..."
const APNT_MSG2 = "In the meantime, call:<br/>" + PHONE +
    "<br/><br/>or send an email to:<br/>" + EMAIL +
    "<br/><br/> to schedule an appointment!";


ABOUT_T.on("click", () => {
    updateContent(ABOUT_T);
});

LOC_T.on("click", () => {
    updateContent(LOC_T);
});

APNT_T.on("click", () => {
    updateContent(APNT_T);
});


const updateContent = (tab) => {

    toggleMap();
    clearText();


    switch(tab){
        case ABOUT_T:
            SUB_HEAD[0].html('A Message From Faith Whaley:');
            SUB_TEXT[0].html(ABOUT_BLURB);
            break;

        case LOC_T:
            SUB_HEAD[0].html('Location/Phone:');
            SUB_TEXT[0].html(`${ADDRESS}<br/>${PHONE}`);
            break;

        case APNT_T:
            SUB_HEAD[0].html(APNT_MSG);
            SUB_TEXT[0].html(APNT_MSG2);
            SUB_HEAD[1].html("Hours of Operation");
            SUB_TEXT[1].html(AVAILABILITY);
            break;

        default:
            SUB_HEAD[0].html("This content is currently unavailable");
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

const clearText = () => {
    for (i of SUB_HEAD){
        i.html('');
    }
    for (i of SUB_TEXT){
        i.html('');
    }
};

//Begin with the ABOUT tab clicked
ABOUT_T.trigger('click');

})();