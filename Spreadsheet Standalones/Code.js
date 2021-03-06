function prepender(val, sheet) {
  sheet.insertRowBefore(1);
  let cloneArr = val.map((x) => x);
  cloneArr.push('START');
  const range = sheet.getRange(1, 1, 1, cloneArr.length);
  range.setValues([cloneArr]);  
}

function addContent2() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName('test');
  let tempArr = [sheet.getLastRow() + 1,'NEW CONTENT'];
  prepender(tempArr, sheet);
  tempArr.push('END');
  sheet.appendRow(tempArr);
}

function addContent() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName('test');
  Logger.log(sheet);
  let startPos = 5;
  let startVal = sheet.getRange(startPos, 1).getValue();
  sheet.getRange(startPos, 1).setValue(startVal + ' START');
  sheet.insertRowAfter(startPos);
  sheet.getRange(startPos + 1, 1).setValue('AFTER');
  sheet.insertRowBefore(startPos);
  sheet.getRange(startPos, 1).setValue('BEFORE');
  let tempArr = [sheet.getLastRow() + 1,'test', 2, 'hello world'];
  sheet.appendRow(tempArr);
}

function addAboveFirst() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName('test');
  sheet.insertRowBefore(1);
  sheet.getRange(1, 1).setValue('INSERTED ABOVE FIRST ROW');
}

// function test2() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const ss = SpreadsheetApp.openById(id);
//   ss.setActiveSheet(ss.getSheets()[0]);
//   const sheet = ss.getActiveSheet();
//   const range = sheet.getRange('B2:G5');
//   const dimArr = [range.getLastRow(), range.getNumRows(), range.getLastColumn(), range.getNumColumns()];
//   Logger.log(dimArr);

//   sheet.setActiveRange(range);
//   //range.setBackground('yellow');
//   Logger.log(sheet.getName());
//   const selectedSel = sheet.getSelection();
//   const selRange = selectedSel.getActiveRange();
//   const data = selRange.getValues();
//   selRange.setBackground('purple');
//   Logger.log(data);
// }

// function testData1() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const sheet = SpreadsheetApp.openById(id).getSheets()[0];
//   const lastCol = sheet.getLastColumn()
//   const lastRow = sheet.getLastRow()
//   const range = sheet.getRange(1, 1, lastRow, lastCol);
//   const rangeData = sheet.getDataRange();
//   const lastCorner = sheet.getRange(lastRow, lastCol);
//   lastCorner.setBackground('red');
//   Logger.log(lastCorner.getValue());
//   //Logger.log(rangeData.getValues());
//   Logger.log(lastCol, lastRow);
//   //Logger.log(range.getValues());
// }

// function getMyRange() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const ss = SpreadsheetApp.openById(id);
//   const sheet = ss.getSheets()[0];
//   const range = sheet.getRange(1, 4, 2, 2);
//   const data = range.getValues();
//   range.setValues([['test1', 'test2'], ['test3', 'test4']]);
//   range.setBackground('blue');
//   Logger.log(data);
// }

// function addColors2() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const ss = SpreadsheetApp.openById(id);
//   const sheet = ss.getSheets()[0];
//   let backColor = 'red';
//   let mySize = 10;
//   for(let rows = 1; rows < 51; rows++){
//     for(let cols = 1; cols < 11; cols++){
//       let total = rows + cols;
//       if((total % 2) == 0) {
//         backColor = 'red';
//       } else {
//         backColor = 'pink'
//       }
//       let range = sheet.getRange(rows,cols);
//       range.setBackground(backColor);
//       range.setFontColor('white');
//       range.setFontSize(mySize + cols);
//       range.setValue(total);
//     }
//   }
// }

// function addColors() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const ss = SpreadsheetApp.openById(id);
//   const sheet = ss.getSheets()[0];
//   let counter = 0;
//   for(let i = 1; i < 51; i++){
//     let backColor = 'green';
//     for(let x = 0; x < 5; x++) {
//       let val = 'A'.charCodeAt()+x;
//       let letterVal = String.fromCharCode(val);
//       Logger.log(letterVal);
//       counter++;
//       if((counter % 2) == 0) {
//         backColor = 'pink';
//       } else {
//         backColor = 'yellow'
//       }
//       sheet.getRange(letterVal + i).setBackground(backColor);
//     }
//   }
// }

// function makeNewOne() {
//   id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ'
//   const ss = SpreadsheetApp.openById(id);
//   const sheets = ss.getSheets();
//   Logger.log(sheets);
//   const newName = 'Sheet New';
//   let sheet = ss.getSheetByName(newName);
//   if (sheet == null) {
//     sheet = ss.insertSheet();
//     sheet.setName(newName);
//   }
//   Logger.log(sheet.getIndex());

// }

// function test2() {
//   const url = 'https://docs.google.com/spreadsheets/d/1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ/';
//   const ss = SpreadsheetApp.openByUrl(url);
//   //const sheet = ss.getSheets()[1];
//   const sheet = ss.getSheetByName('New 3');
//   //sheet.setName('UPDATED 100');
//   if(sheet != null) {
//     Logger.log(sheet.getIndex());
//   } else {
//     Logger.log(sheet);
//   }
// }


// function test1() {
//   const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
//   const ss = SpreadsheetApp.openById(id);
//   const sheets = ss.getSheets();
//   sheets.forEach((sheet, index) => {
//     Logger.log(sheet.getName());
//     sheet.setName('Updated ' + index);

//   });
//   Logger.log(sheets);
// }
