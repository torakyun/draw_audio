/*
 * グローバル変数
 */
var wrapper = null;             // キャンバスの親要素
var canvas = null;                  // キャンバス
var g = null;                       // コンテキスト
var $id = function(id){ return document.getElementById(id); };  // DOM取得用
var img = new Image();          //画像用

/*
 * 定数
 */
var IMG_COOLMAN = "coolman.png";

/*
 * キャンバスのサイズをウインドウに合わせて変更
 */
function getSize(){
    // キャンバスのサイズを再設定
    canvas.width = wrapper.offsetWidth;
    canvas.height =  wrapper.offsetHeight;
    // 画像を表示
    g.drawImage(img, 0, 0, canvas.width, canvas.height);
}

/*
 * リサイズ時
 */
window.addEventListener("resize", function(){
    getSize();
});

/*
 * 起動処理
 */
window.addEventListener("load", function(){
    // キャンバスの親要素情報取得（親要素が無いとキャンバスのサイズが画面いっぱいに表示できないため）
    wrapper = $id("wrapper");
    // キャンバス情報取得
    canvas = $id("canvas");
    g = canvas.getContext("2d");

    // キャンバスをウインドウサイズにする
    getSize();

    // 画像生成
    img.src = IMG_COOLMAN;
    img.onload = function(){
        g.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
});
