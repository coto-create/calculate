let box = "";
const boxarray = [];
let sign = ""; // 符号を保存

//  numberbuttonclick関数　数字を押すと数字が羅列してwindowに表示される
const numberbuttonclick = (num) => {
  box = box + num;
  $(".window").text(box);
};

/数字を押した時にnumberbuttonclick関数を実行/ 
$("#one").on("click", function () {
  numberbuttonclick("1");
});
$("#two").on("click", function () {
  numberbuttonclick("2");
});
$("#third").on("click", function () {
  numberbuttonclick("3");
});
$("#four").on("click", function () {
  numberbuttonclick("4");
});
$("#five").on("click", function () {
  numberbuttonclick("5");
});
$("#six").on("click", function () {
  numberbuttonclick("6");
});
$("#seven").on("click", function () {
  numberbuttonclick("7");
});
$("#eight").on("click", function () {
  numberbuttonclick("8");
});
$("#nine").on("click", function () {
  numberbuttonclick("9");
});
$("#zero").on("click", function () {
  numberbuttonclick("0");
});

/*　【符号を押した時の処理】
　boxarrayの配列にboxという変数を追加
　boxを空にする
  符号を変数signに保存
  boxの表示に空のテキストを追加
*/
$("#plus, #minus ,#times , #divide").on("click", function () {
  boxarray.push(box);
  box = ""; 

  switch (this.id) {
    case "plus":
      sign = "+"
      break;
    case "minus":
      sign = "-"
      break;
    case "times":
      sign = "*"
      break;
    case "divide":
      sign = "/"
      break;
  }

$(".window").text(box);
});

/*【＝を押した時の処理】
入力された値（box)をboxarayに追加
totalを初期化
文字列を数値化してtotalに加算
四則演算
totalの結果を表示
*/
$("#equal").on("click", function () {
  boxarray.push(box);
  let total = 0;

  let num1 = Number(boxarray[0]);
  let num2 = Number(boxarray[1]);

  switch (sign) {
    case "+":
      total = num1 + num2
      break;
    case "-":
      total = num1 - num2
      break;
    case "*":
      total = num1 * num2
      break;
    case "/":
      total = num1 / num2
      break;
  }
  
  $(".window").text(total);
});



/*
let box = "";
const boxarray = [];
let operator = ""; // 四則演算のための演算子を保持

// 数字ボタンのクリック処理
function numberbuttonclick(num) {
  box += num;  // 数字を連結
  $(".window").text(box);  // 表示を更新
}

// 数字ボタンのクリックイベント
$("#one").on("click", function () { 
  numberbuttonclick("1");
});
$("#two").on("click", function () { 
  numberbuttonclick("2"); 
});
$("#third").on("click", function () { 
  numberbuttonclick("3"); 
  });
$("#four").on("click", function () { 
  numberbuttonclick("4"); 
});
$("#five").on("click", function () { 
  numberbuttonclick("5"); 
});
$("#six").on("click", function () { 
  numberbuttonclick("6"); 
});
$("#seven").on("click", function () { 
  numberbuttonclick("7"); 
});
$("#eight").on("click", function () { 
  numberbuttonclick("8"); 
});
$("#nine").on("click", function () { 
  numberbuttonclick("9"); 
});
$("#zero").on("click", function () { 
  numberbuttonclick("0"); 
});

// 四則演算のボタンクリック時の処理
$("#plus, #minus ,#times , #divide").on("click", function () {
  boxarray.push(box);  // 現在の数字を配列に追加
  box = "";  // boxをリセット

  // 演算子を保存
  if (this.id === "plus") {
    operator = "+";
  } else if (this.id === "minus") {
    operator = "-";
  } else if (this.id === "times") {
    operator = "*";
  } else if (this.id === "divide") {
    operator = "/";
  }

  $(".window").text(box);  // 表示をリセット
});

// "=" ボタンを押したときの処理
$("#equal").on("click", function () {
  boxarray.push(box);  // 最後の入力も配列に追加

  let result = 0;
  if (boxarray.length >= 2) {
    let num1 = Number(boxarray[0]);  // 最初の数字
    let num2 = Number(boxarray[1]);  // 次の数字

    // 選択された演算子に基づいて計算
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    }
  }

  $(".window").text(result);  // 結果を表示
  boxarray.length = 0;  // 配列をリセット
  box = "";  // boxもリセット
});
*/