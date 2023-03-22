import figlet from 'figlet';
import Big from 'figlet/importable-fonts/Big.js';

/**
 * This helper function uses the figlet library to convert some given text into figlet font ascii text.
 * @param text takes as parameter the text that wants to be made in to ascii font
 * @returns the text made into Big figlet font
 */
export function getTextAsBig(text: string): string | undefined {
  figlet.parseFont('Big', Big);
  var doneText: string | undefined = undefined;
  figlet.text(
    text,
    {
      font: 'Big',
    },
    function (err, data: string | undefined) {
      doneText = data;
    }
  );

  return doneText;
}
