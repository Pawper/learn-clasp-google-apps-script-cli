const GLVAL = 'Testing Global Value';

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("adv")
    .addItem('showModal1', 'modal1')
    .addItem('showModal2', 'modal2')
    .addItem('showModal3', 'modal3')
    .addToUi();
}

function modal3() {
  const ui = SpreadsheetApp.getUi();
  const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  html.setHeight(300);
  html.setWidth(800);
  ui.showDialog(html);
}

function modal2() {
  const ui = SpreadsheetApp.getUi();
  // const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  const html = HtmlService.createHtmlOutputFromFile('temp');
  html.setHeight(300);
  html.setWidth(800);
  ui.showModelessDialog(html, 'Modeless');
}

function modal1() {
  const ui = SpreadsheetApp.getUi();
  // const html = HtmlService.createHtmlOutput('<h1>Hello World</h1><p>Tested</p>');
  const html = HtmlService.createTemplateFromFile('temp1').evaluate();
  html.setHeight(300);
  html.setWidth(800);
  ui.showModalDialog(html, 'test 1');
}

function logVal(val) {
  const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("log");
  ss.appendRow([val]);
}

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
