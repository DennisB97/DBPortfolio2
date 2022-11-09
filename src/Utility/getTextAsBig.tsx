import React from 'react';
import figlet from 'figlet';
import Big from 'figlet/importable-fonts/Big.js'


export function getTextAsBig(text : string) : string | undefined {
    figlet.parseFont('Big', Big);
    var doneText : string | undefined = undefined;
    figlet.text(text, {
        font: 'Big',
    }, function(err, data : string | undefined) {
        doneText = data;
    });

    return doneText;
}



