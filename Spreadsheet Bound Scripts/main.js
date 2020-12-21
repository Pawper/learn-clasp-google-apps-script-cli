function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("adv")
    .addItem('alert', 'popUp1')
    .addItem('prompt1', 'popUp2')
    .addItem('prompt2', 'popUp3')
    .addToUi();
}

function popUp3() {
  const ui = SpreadsheetApp.getUi();
  const rep = ui.prompt('Do you like Apps Script rate 1-5?', ui.ButtonSet.YES_NO_CANCEL);
  logVal(rep.getSelectedButton());
  if (rep.getSelectedButton() == ui.Button.YES) {
    logVal('YES User rated ' + rep.getResponseText());
  } else if (rep.getSelectedButton() == ui.Button.NO) {
    logVal('NO User rated ' + rep.getResponseText());
  } else {
    logVal("User Cancelled");
  }
}

function popUp2() {
  const ui = SpreadsheetApp.getUi();
  const rep = ui.prompt('Tell me your name?');
  logVal(rep.getSelectedButton());
  if (rep.getSelectedButton() == ui.Button.OK) {
    logVal(rep.getResponseText());
  } else {
    logVal("Prompt Closed");
  }
}

function popUp1() {
  const ui = SpreadsheetApp.getUi();
  const rep = ui.alert("confirm", "Do you agree?", ui.ButtonSet.YES_NO);
  logVal(rep);
  if (rep == ui.Button.YES) {
    logVal("yes was pressed");
  } else {
    logVal("no was pressed");
  }
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
