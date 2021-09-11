// 波形の種類と音量
var type, volume;
var volume_divide = 8;

// 各種ブラウザ対応
window.AudioContext = window.AudioContext || window.webkitAudioContext;
// AudioContextのインスタンスを作成
var context = new AudioContext();
// 出力先
var destinationNode = context.destination;
// 音量：gainNode
var gainNode = context.createGain();
// 周波数
var frequency = 440;
// 接続：gainNode => destinationNode
gainNode.connect(destinationNode);
//analyserNodeを作成
var analyserNode = context.createAnalyser();
//高速フーリエ変換のデータサイズ(2のべき乗)
analyserNode.fftSize = 2 ** 11;
// 接続：gainNode => analyserNode
gainNode.connect(analyserNode);

// オシレーター：波形生成
var oscillatorNode = context.createOscillator();

// typeとvolumeを選択
var createAudio = function(){
    // 音量：gainNode
    volume = Math.random() / 2 + 0.5;
    // 波形
    type = rnd_wav();

    // 乱数を返す
    function rnd_wav(){
        const wav = ['sine', 'sawtooth', 'triangle', 'square'];
        return wav[Math.floor(Math.random() * 4)];
    }
}

// 再生する
var play = function(){
    // 既に流れている場合は停止
    if (num>0) {
        oscillatorNode.stop(0);
    }

    // オシレーター：波形生成
    oscillatorNode = context.createOscillator();
    // 波形を設定
    oscillatorNode.type = type;
    // 周波数を設定
    oscillatorNode.frequency.value = frequency;
    // 接続：oscillatorNode => gainNode
    gainNode.gain.value = volume / volume_divide;
    oscillatorNode.connect(gainNode);

    console.log(type + ", " + volume);
    // 再生
    oscillatorNode.start(0);
}

// 波形の可視化
var visualization = function(canvas){

    let canvasCtx = canvas.getContext("2d");

    let intervalid = window.setInterval(function(){
        //時間領域の波形描画に必要なデータを取得
        let times = new Uint8Array(analyserNode.fftSize);
        analyserNode.getByteTimeDomainData(times);
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        canvasCtx.beginPath();
        //オシロスコープ
        for(let i=0; i<times.length; i++){
            //正規化(0〜1)
            let x = (i/times.length) * canvas.width;
            let y = (0.5-times[i]/255) * canvas.height / 3 * volume_divide + 40;
            //線の開始座標とパスを定義
            if(i === 0){
                canvasCtx.moveTo(x, y);
            } else {
                canvasCtx.lineTo(x, y);
            }
            //線を引く
            canvasCtx.stroke();
        }
    }, 10);
}