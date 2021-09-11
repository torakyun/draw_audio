# DRAW AUDIO

[アナログシンセサイザー][draw_audio]は、基本波形を組み合わせることで楽音の合成を行う楽器である。  
合成元となる基本波形の音声を、視覚的に楽しみながら体感できるアプリケーションを開発した。  
[DRAW AUDIO][draw_audio]

<p align="center">
    <!-- <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132634686-129c13f6-f7b2-4b26-8bc3-673efc21d27e.png"> -->
    <!-- <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132818136-32f292fa-dc60-4db0-a3b7-62087ec47d58.gif">
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132818337-793d0022-6500-4367-916a-697d13d8f157.gif"> -->
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132818476-8c5dc971-934f-4f48-ae27-3599929e7600.gif">

## アナログシンセサイザーとは

[アナログシンセサイザー][draw_audio]は、[オシレーター(VCO: Voltage-Controlled Oscillator)][oscillator]で作った基本波形を組み合わせることで、新しい楽音の合成を行うことができる楽器である。(詳しくは、[オシレーター(VCO)][oscillator]で作った波形を、[フィルター(VCF)][filter]で加工し、[アンプ(VCA)][amplifier]で音量を調節するという手順を踏む。)  
ここで基本波形というのは、[サイン波][sine]、[ノコギリ波][sawtooth]、[三角波][triangle]、[矩形波][square]などの単純な波形のことをいう。  

<p align="center">
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132638737-5f681956-05f7-459d-ae93-70b528086f51.png">
    参照: <a href=https://www.gizmodo.jp/2017/06/how-to-synth.html>シンセサイザーってなに？ 仕組みから楽しみ方までを解説</a>

つまり、基本波形の特徴を覚えておくことが、新しい楽音を作る上で重要となる。  
今回は、基本波形の特徴を「聴覚的」かつ、「視覚的」にも楽しみながら体感できるWebアプリケーションを開発した。

## 使い方

画面上をクリックすると、基本波形([サイン波][sine]、[ノコギリ波][sawtooth]、[三角波][triangle]、[矩形波][square])と音量がランダムに選択され音声が流れる。  
このとき、クリックした位置に図形が描画される。  
また、右下に音声を視覚化したものが描画される。

### テキストボード

３Dで設計し、常にカーソル位置の方向をむき続けるようにした。

<p align="center">
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132819417-f1ea86db-695f-410a-8964-de3c0c312ff1.gif">

### 図形の描画

クリックした位置に図形が描画される。  
波形の種類によって図形の形が決まり、音量によって大きさが決まる。色はランダムに選ばれる。

|[サイン波][sine]|[ノコギリ波][sawtooth]|[三角波][triangle]|[矩形波][square]|
|---|---|---|---|
|<img width="400" alt="スクリーンショット 2021-09-09 18 29 10" src="https://user-images.githubusercontent.com/67317828/132661015-73f7290f-a4fa-4f80-aa2a-9616a45b32c6.png">|<img width="400" alt="スクリーンショット 2021-09-09 18 18 33" src="https://user-images.githubusercontent.com/67317828/132660144-7550b6ab-1d94-4fe9-a856-04e6676367a1.png">|<img width="400" alt="スクリーンショット 2021-09-09 18 17 01" src="https://user-images.githubusercontent.com/67317828/132660154-81d1c210-f91e-466e-b8cd-3dd3c9febb16.png">|<img width="400" alt="スクリーンショット 2021-09-09 18 23 07" src="https://user-images.githubusercontent.com/67317828/132660181-d1b5bc99-0c04-4433-bec3-0d62bdaa6a52.png">|

### 音声の視覚化

ページの右下に音声を視覚化したものが描画される。  
上の段には、基本波形の種類が表示され、詳細な説明(wikipedia)へのリンクとなっている。  
下の段には、リアルタイムで流れる音声を視覚化したものを描画される。

|[サイン波][sine]|[ノコギリ波][sawtooth]|[三角波][triangle]|[矩形波][square]|
|---|---|---|---|
|<img width="281" alt="スクリーンショット 2021-09-09 17 27 47" src="https://user-images.githubusercontent.com/67317828/132656557-eddd6ba1-b8a2-438b-8c4e-a509a2aedfde.png">|<img width="281" alt="スクリーンショット 2021-09-09 17 26 34" src="https://user-images.githubusercontent.com/67317828/132656564-14b26046-d24c-4971-b9ed-a090f965a4ef.png">|<img width="281" alt="スクリーンショット 2021-09-09 17 35 58" src="https://user-images.githubusercontent.com/67317828/132656572-4ebfc7b6-7fd0-4676-8df4-7a3744bf59d1.png">|<img width="281" alt="スクリーンショット 2021-09-09 17 41 20" src="https://user-images.githubusercontent.com/67317828/132656581-64abf9c4-8675-46ae-941f-c8ad46835a18.png">|

[draw_audio]: https://torakyun.github.io/draw_audio/
[analog_synthesizer]: https://en.wikipedia.org/wiki/Analog_synthesizer
[oscillator]: https://en.wikipedia.org/wiki/Voltage-controlled_oscillator
[filter]: https://en.wikipedia.org/wiki/Voltage-controlled_filter
[amplifier]: https://en.wikipedia.org/wiki/Variable-gain_amplifier
[sine]: https://en.wikipedia.org/wiki/Sine_wave
[sawtooth]: https://en.wikipedia.org/wiki/Sawtooth_wave
[triangle]: https://en.wikipedia.org/wiki/Triangle_wave
[square]: https://en.wikipedia.org/wiki/Square_wave