/**
 * Receives "Report Question Issue" submissions and stores them as rows in a Google Sheet.
 * Free, no server needed. Setup steps are in the chat / README below.
 *
 * 1. Create a Google Sheet (any name, e.g. "SATLab Question Reports").
 * 2. In the Sheet: Extensions → Apps Script → paste this whole file, replacing what's there → Save.
 * 3. Deploy → New deployment → type "Web app"
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy and approve the permission prompt.
 * 4. Copy the "Web app URL" (ends in /exec) and paste it into REPORT_ENDPOINT at the top of report.js.
 */

var HEADERS = ['Received', 'Status', 'Page', 'Module', 'Question #', 'Question ID', 'Message', 'URL', 'User agent'];

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Reports') || ss.insertSheet('Reports');
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sh;
}

function doPost(e) {
  try {
    var r = JSON.parse(e.postData.contents);
    // Keep abuse small: cap field lengths.
    var cut = function (s, n) { return String(s == null ? '' : s).slice(0, n); };
    // A cell starting with = + - @ (or a tab/CR) would be run as a formula by Sheets: store it as plain text.
    var safe = function (s, n) { var v = cut(s, n); return /^[=+\-@\t\r]/.test(v) ? "'" + v : v; };
    if (!cut(r.message, 2000).trim()) throw new Error('empty message');
    sheet_().appendRow([
      new Date(), 'New', safe(r.page, 100), safe(r.module, 200), safe(r.questionNumber, 20), safe(r.questionId, 100),
      safe(r.message, 2000), safe(r.url, 500), safe(r.userAgent, 300)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Visiting the URL in a browser shows this, so you can tell the deployment is live.
function doGet() {
  return ContentService.createTextOutput('SATLab report receiver is running.');
}
