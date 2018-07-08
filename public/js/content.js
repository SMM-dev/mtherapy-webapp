(() => {

const ABOUT_T = $('#abt_tab');
const LOC_T = $('#loc_tab');
const APNT_T = $('#apnt_tab');
const SUB_HEAD = [$('#ct_hdr'), $('#ct_hdr2')];
const SUB_TEXT = [$('#ct_bdy'), $('#ct_bdy2')];
const MAP = $('#map');


const AVAILABILITY =
    "<table>" +
    "<tr><td>Mon:</td> <td>10:00 am - 6:00 pm </td></tr>" +
    "<tr><td>Tue:</td> <td>10:00 am - 6:00 pm </td></tr>" +
    "<tr><td>Wed:</td> <td>Closed </td></tr>" +
    "<tr><td>Thu:</td> <td>10:00 am - 6:00 pm </td></tr>" +
    "<tr><td>Fri:</td> <td>Closed </td></tr>" +
    "<tr><td>Sat:</td> <td>1:00 pm - 4:00 pm </td></tr>" +
    "<tr><td>Sun:</td> <td>Closed </td></tr>" +
    "</table>";


const EMAIL = "faithwhaley@yahoo.com";
const EMAIL_LINK = '<a href="mailto:faithwhaley@yahoo.com" target="_blank">faithwhaley@yahoo.com</a>'
const PHONE = "(303) 807-2668"; //Phone# also referenced in server.js
const PHONE_LINK = '<a href=\"tel:13038072668\">(303) 807-2668</a>'
const ADDRESS_LINK = '<a class="blk-link" href="https://www.google.com/maps/search/?api=1&query=677%20Woodland%20Square%20Lp%20SE%20Lacey%2C%20WA%2098503">' +
    "677 Woodland Square Lp SE<br/>" +
    "Ste - C 4<br/>" +
    "Lacey, WA 98503<br/>" + '</a>';


const ABOUT_BLURB = "At The Faithful Massage Therapist, we believe in helping you live your best life, pain free. <br/>" +
    "Specializing in injury relief, we understand that your body is unique, and stay away from traditional \"one size fits all\" massages.<br/>" +
    "Each client will receive a custom consultation, and is empowered during treatment to participate in the healing process, using therapeutic massage, ion cleansing, and aromatherapy.<br/><br/>";


const APNT_MSG = "Online Booking Coming Soon..."
const APNT_MSG2 = "In the meantime, call:<br/>" + PHONE_LINK +
    "<br/><br/>or send an email to:<br/>" + EMAIL_LINK +
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

    MAP.hide();
    clearText();


    switch(tab){
        case ABOUT_T:
            SUB_HEAD[0].html('A Message From Faith:');
            SUB_TEXT[0].html(ABOUT_BLURB);
            break;

        case LOC_T:
            SUB_HEAD[0].html('Location/Phone:');
            SUB_TEXT[0].html(`${ADDRESS_LINK}<br/>${PHONE_LINK}`);
            MAP.show();
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