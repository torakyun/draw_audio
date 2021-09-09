# DRAW AUDIO

アナログシンセサイザーでは、基本波形を組み合わせることで楽音の合成を行う。  
合成元となる基本波形の音声を、視覚的に楽しみながら体感できるアプリケーションを開発した。

<p align="center">
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132634686-129c13f6-f7b2-4b26-8bc3-673efc21d27e.png">

## アナログシンセサイザーとは

アナログシンセサイザーは、オシレーター（Oscillator）で作った基本波形を組み合わせることで、新しい楽音の合成を行うことができる楽器である。
ここで、基本波形というのはサイン波、ノコギリ波、三角波、矩形波など単純な波形のことをいう。

<p align="center">
    <img width="1439" alt="test" src="https://user-images.githubusercontent.com/67317828/132638737-5f681956-05f7-459d-ae93-70b528086f51.png">

つまり、基本波形の特徴を覚えておくことが、新しい楽音を作る上で重要となる。  
今回は、基本波形の特徴を「聴覚的」かつ、「視覚的」にも楽しみながら体感できるWebアプリケーションを開発した。

## 使い方

画面上をクリックすると、基本波形(サイン波、ノコギリ波、三角波、矩形波)と音量がランダムに選択され音声が流れる。このとき、クリックした位置に図形が描画される。また、右下に流れる音声を視覚化したものが描画される。

### 図形の描画

### 音声の視覚化

|正弦波|ノコギリ波|三角波|矩形波|
|---|---|---|---|
|<img width="286" alt="スクリーンショット 2021-09-09 17 27 47" src="https://user-images.githubusercontent.com/67317828/132656557-eddd6ba1-b8a2-438b-8c4e-a509a2aedfde.png">|<img width="284" alt="スクリーンショット 2021-09-09 17 26 34" src="https://user-images.githubusercontent.com/67317828/132656564-14b26046-d24c-4971-b9ed-a090f965a4ef.png">|<img width="281" alt="スクリーンショット 2021-09-09 17 35 58" src="https://user-images.githubusercontent.com/67317828/132656572-4ebfc7b6-7fd0-4676-8df4-7a3744bf59d1.png">|<img width="282" alt="スクリーンショット 2021-09-09 17 41 20" src="https://user-images.githubusercontent.com/67317828/132656581-64abf9c4-8675-46ae-941f-c8ad46835a18.png">|