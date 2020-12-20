function test2() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  Logger.log(ss.getUrl());
  Logger.log(ss.getId());
  Logger.log(ss.getName());
}







/** @OnlyCurrentDoc */

function testmacro() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  spreadsheet.getCurrentCell().setValue('Hello');
  spreadsheet.getRange('B1').activate();
  spreadsheet.getCurrentCell().setValue('World');
  spreadsheet.getRange('A1:B1').activate();
  spreadsheet.getActiveRangeList().setFontWeight('bold')
  .setFontSize(20)
  .setBackground('#0000FF');
  spreadsheet.getRange('D1').activate();
  spreadsheet.getCurrentCell().setValue('Done');
};