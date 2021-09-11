var canvas2;

// テキストボックスを作り、波形の種類を表示
var waveform = function(){
    // 波形の詳細へのリンク
    let url;
    if (type == 'sine') {
        url = "https://en.wikipedia.org/wiki/Sine_wave";
    } else if (type == 'square') {
        url = "https://en.wikipedia.org/wiki/Square_wave";
    } else if (type == 'sawtooth') {
        url = "https://en.wikipedia.org/wiki/Sawtooth_wave";
    } else if (type == 'triangle') {
        url = "https://en.wikipedia.org/wiki/Triangle_wave";
    }

    // 1回目のクリック -> テキストボックス + 波形の種類の表示
    // 2回目のクリック -> 波形の種類の変更
    if (num === 0) {
        // テキストボックスの作成
        document.getElementById("wav").classList.add("iklan");
        // "Which waveform?"の表示
        let newElement = document.createElement("p"); // 要素作成
        let newContent = document.createTextNode("Which waveform? "); // テキストノードを作成
        newElement.setAttribute("style", "display:inline;"); // 要素にidを設定
        newElement.appendChild(newContent); // 要素にテキストノードを追加
        document.getElementById("wav").insertBefore(newElement, null);
        // 波形の種類の表示
        newElement = document.createElement("a"); // 要素作成
        newContent = document.createTextNode(type); // テキストノードを作成
        newElement.appendChild(newContent); // 要素にテキストノードを追加
        newElement.setAttribute("id", "type"); // 要素にidを設定
        newElement.setAttribute("href", url); // 要素にurlを設定
        document.getElementById("wav").insertBefore(newElement, null);
        // 波形の可視化で用いるキャンバスを作成
        canvas2 = document.createElement("canvas"); // 要素作成
        document.getElementById("wav").insertBefore(canvas2, null);
    } else {
        // 波形の種類の変更
        let element = document.getElementById("type");
        element.innerHTML=type;
        element.setAttribute("href", url); // 要素にurlを設定
    }
}