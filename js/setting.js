// ロード時、背景とリサイズの設定
window.onload = function(){
    drawBackground();
    fitCanvasSize();
    window.onresize = fitCanvasSize;
}

// 背景の描画
var drawBackground = function(){

}

// <canvas id="???"> の???を指定してcanvasを取得
var document = $(document)
var canvas = document.getElementById("myCanvas");

// Canvas のサイズをクライアントサイズに合わせる
var fitCanvasSize = function(){
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}