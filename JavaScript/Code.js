const GLOBAL_VAL = 'Hello World!';

function test1(){
  const a = 'value';
  const b = `val1`;
  const c = "val2";
  //var d = 10;
  let e = true;
  e = false;
  Logger.log(a,b,c,e,GLOBAL_VAL);
}
function test2(){
  Logger.log(GLOBAL_VAL);
}

function test3(val,val1) {
 Logger.log(val,val1); 
  return `${val} ${5+5} ${val1}`;
}

function test4() {
  const a = 'Hello';
  const b = 'World';
  const temp = test3(a,b);
  Logger.log(temp);
}

function test5() {
  const temp = test3('Hi', 'Coders');
  Logger.log(temp);
}

function output2() {
  const today = new Date();
  //Logger.log(today);
  const day = 1000*60*60*24;
  const nextWeek = new Date(today.getTime() + (day * 7));
  //Logger.log(nextWeek);
  
  let a = 0.5;
  //Logger.log(Math.floor(a));
  //Logger.log(Math.ceil(a));
  for(let i=0; i<100;i++) {
    let ranNum = Math.floor(Math.random()*10)+1; //1-10
    //Logger.log(ranNum);
  }

  const myObj = {
    'first': 'Laurence',
    'last': 'Svekis'
  }
  
  const myStr = JSON.stringify(myObj);
  Logger.log(myObj.first);
  Logger.log(myStr);
  const myObj2 = JSON.parse(myStr);
  myObj2.first = 'John';
  Logger.log(myObj2);
  Logger.log(myObj);
  
  
}













function output1() {
  for(let i = 0; i < 10; i++) {
    //Logger.log('Counter : ' + i);
  }
  let x = 0;
  while(x < 10) {
    x++;
    //Logger.log('Counter : ' + x);
  }
  const arr = ['Laurence','Svekis','One'];
  //Logger.log(arr.length);
  for(let y = 0; y < arr.length; y++) {
    //Logger.log(arr[y]);
  }  
  arr.forEach((ele,index) => {
    //Logger.log(ele,index);
  });
  const myArray = [];
  for(let q = 0; q< 10; q++){
    //let temp = `item ${q}`;
    const temp = {
      'first': 'Myname'+q,
      'last': 'Laster'+q
    };
    myArray.push(temp);
  }
  //Logger.log(myArray);
  myArray.forEach((person) => {
    //Logger.log(person.first + person.last);
  })
  const newArray = myArray;
  newArray[2] = 'NEW ITEM';
  myArray[5] = 'MY ARRAY HERE';
  //Logger.log(myArray);
  Logger.log(newArray); 
}

function output() {
  const obj = {'first name': 'Laurence', 'last': 'Svekis', 'val1':'One','val2':'Two'};
  let x = 1;
  //Logger.log(obj['val'+1]);
  //Logger.log(obj['val'+2]);
  //Logger.log(obj.last);
  //Logger.log(obj['first name']);
  /*
  Comment lines
  Many lines
  */
  const arr = ['Laurence', 'Svekis', 'One'];
  Logger.log(arr[0]);
  
  const myObj = {
    'first' : 'Laurence',
    'last' : 'Svekis',
    'fullName' : function() {
      Logger.log('Get the full name');
      return this.first + ' ' + this.last;
    }
  }
  let fullN = myObj.fullName();
  Logger.log(fullN);
  const doc = DocumentApp.create('New Doc');
  arr.push('New');
  Logger.log(arr.length);
  arr.reverse();
  arr.sort();
  const last = arr.pop();
  Logger.log(last);
  const first = arr.shift();
  Logger.log(first);
  arr.unshift('FIRST');
  arr.push('LAST');
  Logger.log(arr);
}