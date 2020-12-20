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
