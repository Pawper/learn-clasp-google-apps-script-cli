function testData1() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const sheet = SpreadsheetApp.openById(id).getSheets()[0];
  const lastCol = sheet.getLastColumn()
  const lastRow = sheet.getLastRow()
  const range = sheet.getRange(1, 1, lastRow, lastCol);
  const rangeData = sheet.getDataRange();
  const lastCorner = sheet.getRange(lastRow, lastCol);
  lastCorner.setBackground('red');
  Logger.log(lastCorner.getValue());
  //Logger.log(rangeData.getValues());
  Logger.log(lastCol, lastRow);
  //Logger.log(range.getValues());
}

function getMyRange() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  const range = sheet.getRange(1, 4, 2, 2);
  const data = range.getValues();
  range.setValues([['test1', 'test2'], ['test3', 'test4']]);
  range.setBackground('blue');
  Logger.log(data);
}

function addColors2() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  let backColor = 'red';
  let mySize = 10;
  for(let rows = 1; rows < 51; rows++){
    for(let cols = 1; cols < 11; cols++){
      let total = rows + cols;
      if((total % 2) == 0) {
        backColor = 'red';
      } else {
        backColor = 'pink'
      }
      let range = sheet.getRange(rows,cols);
      range.setBackground(backColor);
      range.setFontColor('white');
      range.setFontSize(mySize + cols);
      range.setValue(total);
    }
  }
}

function addColors() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  let counter = 0;
  for(let i = 1; i < 51; i++){
    let backColor = 'green';
    for(let x = 0; x < 5; x++) {
      let val = 'A'.charCodeAt()+x;
      let letterVal = String.fromCharCode(val);
      Logger.log(letterVal);
      counter++;
      if((counter % 2) == 0) {
        backColor = 'pink';
      } else {
        backColor = 'yellow'
      }
      sheet.getRange(letterVal + i).setBackground(backColor);
    }
  }
}

function makeNewOne() {
  id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ'
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  Logger.log(sheets);
  const newName = 'Sheet New';
  let sheet = ss.getSheetByName(newName);
  if (sheet == null) {
    sheet = ss.insertSheet();
    sheet.setName(newName);
  }
  Logger.log(sheet.getIndex());

}

function test2() {
  const url = 'https://docs.google.com/spreadsheets/d/1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ/';
  const ss = SpreadsheetApp.openByUrl(url);
  //const sheet = ss.getSheets()[1];
  const sheet = ss.getSheetByName('New 3');
  //sheet.setName('UPDATED 100');
  if(sheet != null) {
    Logger.log(sheet.getIndex());
  } else {
    Logger.log(sheet);
  }
}


function test1() {
  const id = '1O7i2t-kgql1nXOibwLUg7hOGMOJDGlVN7DrwavGYVbQ';
  const ss = SpreadsheetApp.openById(id);
  const sheets = ss.getSheets();
  sheets.forEach((sheet, index) => {
    Logger.log(sheet.getName());
    sheet.setName('Updated ' + index);

  });
  Logger.log(sheets);
}
