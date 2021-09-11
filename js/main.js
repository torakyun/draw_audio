
// clickした回数
var num = 0;

canvas.addEventListener('mousedown',get);
function get(e){
    console.log(e.clientX + ", " + e.clientY);
}

canvas.addEventListener('mousedown', e => {
    // typeとvolumeを選択
    createAudio();
    console.log(type, volume);
    // 波形の種類を表示
    waveform();
    // 再生する
    play();
    // 波形の可視化
    visualization(canvas2);
    // 図形の描画
    drawGraph(canvas, e, type, volume);

    num++;
});