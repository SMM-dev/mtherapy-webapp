(() => {
'use strict';

const TABS = [
    $('#abt_tab'),
    $('#loc_tab'),
    $('#apnt_tab')
];

const CONTENT = [
    $('#about'),
    $('#location'),
    $('#appointment')
];


$( document ).ready(function() {
    toggle(CONTENT[0]);

});

TABS[0].on("click", () => {
    toggle(CONTENT[0]);
});

TABS[1].on("click", () => {
    toggle(CONTENT[1]);
});

TABS[2].on("click", () => {
    toggle(CONTENT[2]);
});

function toggle (div) {
    // Hide all
    hideall();
    div.show();
}

function hideall () {
    for (let i in CONTENT){
        CONTENT[i].hide();
    }
}
})();