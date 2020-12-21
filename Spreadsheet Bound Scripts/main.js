function SELVALA1 () {
  return SpreadsheetApp.getActive().getActiveRange().getA1Notation();
}

function addForm() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName('test');
  const range = sheet.getRange('C1:C5');
  range.setFormula('=SUM(A1:B1)');
  range.setFontColor('red');
  range.setBackground('pink');
}

// const GLVAL = 'Testing Global Value';
// let COUNTER = 0;

// function onOpen() {
//   PropertiesService.getDocumentProperties().setProperty('cnt', 0)
//   const ui = SpreadsheetApp.getUi();
//   ui.createMenu("adv")
//     .addItem('showSide1', 'side1')
//     .addItem('showSide2', 'side2')
//     .addItem('showSide3', 'side3')
//     .addToUi();
// }

// function side1() {
//   const ui = SpreadsheetApp.getUi();
//   const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
//   ui.showSidebar(html);
// }
// function side2() {
//   const ui = SpreadsheetApp.getUi();
//   const html = HtmlService.createHtmlOutputFromFile('temp');
//   ui.showSidebar(html);
// }
// function side3() {
//   COUNTER = PropertiesService.getDocumentProperties().getProperty('cnt');
//   COUNTER++;
//   PropertiesService.getDocumentProperties().setProperty('cnt', COUNTER)
//   const ui = SpreadsheetApp.getUi();
//   const html = HtmlService.createTemplateFromFile('temp1').evaluate();
//   ui.showSidebar(html);
// }

// function logVal(val) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("log");
//   ss.appendRow([val]);
// }

// function onOpen() {
//   const ui = SpreadsheetApp.getUi();
//   ui.createMenu('adv')
//   .addItem('copy', 'copytolog')
//   .addToUi();
// }

// function copytolog() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getActiveSheet();
//   const range = ss.getSelection().getActiveRange();
//   const data = range.getValues();
//   let sheetLog = ss.getSheetByName('log');
//   if(sheetLog == null) {
//     sheetLog = ss.insertSheet();
//     sheetLog.setName('log');
//   }
//   const newRange = sheetLog.getDataRange();
//   const startRow = newRange.getLastRow() + 1;
//   const setRange = sheetLog.getRange(startRow, 1, range.getNumRows(), range.getNumColumns());
//   setRange.setBackground('red');
//   setRange.setValues(data);
//   sheetLog.appendRow([startRow]);
// }

// function onOpen() {
//   const ui = SpreadsheetApp.getUi();
//   ui.createMenu("New Opts")
//     .addItem("first", "first")
//     .addItem("two", "second")
//     .addSeparator()
//     .addSubMenu(
//       ui.createMenu("sub").addItem("first", "third").addItem("two", "fourth")
//     )
//     .addItem('five', 'fifth')
//     .addToUi();
// }

// function first() {
//   logOut('ran first');
// }
// function second() {
//   logOut('ran second');
// }
// function third() {
//   logOut('ran third');
// }
// function fourth() {
//   logOut('ran fourth');
// }
// function fifth() {
//   logOut('ran fifth');
// }

// function logOut(val) {
//   const ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//   ss.appendRow([val]);
// }

// function copyMe() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getActiveSheet();
//   const range = sheet.getActiveRange();
//   const data = range.getValues();
//   createASheet(data, ss, range);
//   range.setBackground("red");
//   Logger.log(data);
// }

// function createASheet(data, ss, range) {
//   const numSheets = ss.getSheets();
//   const sheetName = "Sheet " + numSheets.length;
//   let newSheet = ss.getSheetByName(sheetName);
//   if (newSheet == null) {
//     newSheet = ss.insertSheet();
//     newSheet.setName(sheetName);
//   } else {
//     // newSheet.clearContents();
//     // newSheet.clearFormats();
//     newSheet.clear();
//   }
//   const newRange = newSheet.getRange(
//     1,
//     1,
//     range.getNumRows(),
//     range.getNumColumns()
//   );
//   newRange.setValues(data);
//   Logger.log(numSheets.length);
// }

// function test2() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getActiveSheet();
//   // Logger.log(sheet.getName());
//   const selectedSel = sheet.getSelection();
//   const selRange = selectedSel.getActiveRange();
//   const data = selRange.getValues();
//   Logger.log(data);
// }

// function testSheet1() {
//   const ss = SpreadsheetApp.getActiveSpreadsheet();
//   const sheet = ss.getActiveSheet();
//   const data = sheet.getDataRange();
//   const values = data.getValues();
//   values.forEach((val)=> {
//     Logger.log(val[1]);
//   })
//   Logger.log(values);
//   Logger.log(sheet.getName());
// }
