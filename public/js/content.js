"use strict";
(() => {
    const TABS = [
        $('#abt_tab'),
        $('#serv_tab'),
        $('#loc_tab'),
        $('#apnt_tab')
    ];

    const CONTENT = [
        $('#about'),
        $('#services'),
        $('#location'),
        $('#appointment')
    ];

    //hide all content except welcome message on initial load
    $( document ).ready(function() {
        toggle(CONTENT[0]);
    });

    // Attach click listeners to tabs
    for (let i in TABS){
        TABS[i].on("click", () => {
            toggle(CONTENT[i]);
        });
    }

    function toggle (tab) {
        hideall();
        tab.show();
    }

    function hideall () {
        for (let i in CONTENT){
            CONTENT[i].hide();
        }
    }
})();