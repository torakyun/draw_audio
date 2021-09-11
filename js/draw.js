// 波形に応じた図形の表示
var drawGraph = function(canvas, e, type, volume){
    // カラーをランダムに選択
    options = {strokeColor : '#000',
            strokeWidth : 0,
            fillColor : "rgb(" + rnd() + "," + rnd() + "," + rnd() +")"};
    // 波形に応じた図形の表示
    if (type == 'sine') {
        drawCircle(canvas, e.clientX, e.clientY, volume * 200, options);
    } else if (type == 'sawtooth') {
        drawStar(canvas, e.clientX, e.clientY, volume * 200, Math.floor(Math.random() * 360), 20, volume * 30, volume * 30, options);
    } else if (type == 'triangle') {
        drawPolygon(canvas, e.clientX, e.clientY, volume * 200, Math.floor(Math.random() * 360), 3, options);
    } else if (type == 'square') {
        drawPolygon(canvas, e.clientX, e.clientY, volume * 200, Math.floor(Math.random() * 360), 4, options);
    }

    // 乱数を返す
    function rnd(){
        return Math.floor(Math.floor(Math.random() * 255));
    }
}

// 円の描画
var drawCircle = function(canvas, cx, cy, viewRadius, options){
    var ctx, strokeColor, strokeWidth, fillColor;
    var r;

    ctx = canvas.getContext('2d');
    // カラーの指定
    strokeColor = (options && options.strokeColor) ? options.strokeColor : '#000';
    strokeWidth = (options && options.strokeWidth) ? options.strokeWidth : 0;
    fillColor   = (options && options.fillColor)   ? options.fillColor   : '#000';
    // 円の作成
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, viewRadius, 0, 2*Math.PI);
    ctx.closePath();
    // 塗り潰し
    if (fillColor !== 'transparent') {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    // 枠線の描画
    if (strokeColor !== 'transparent' && strokeWidth > 0) {
        ctx.lineWidth   = strokeWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }

    ctx.restore();

    return canvas;
}

// 正多角形の描画
var drawPolygon = function(canvas, cx, cy, viewRadius, baseRadian, points, options) {
    var i, x, y, ratio, radians, angle, oneAngle, base, height;
    var ctx, strokeColor, strokeWidth, fillColor;

    ctx = canvas.getContext('2d');
    // 距離の設定
    ratio = (1 + Math.cos(Math.PI / points)) / 2;
    viewRadius /= ratio;
    // 角変位
    oneAngle = 360 / points;
    // カラーの指定
    strokeColor = (options && options.strokeColor) ? options.strokeColor : '#000';
    strokeWidth = (options && options.strokeWidth) ? options.strokeWidth : 0;
    fillColor   = (options && options.fillColor)   ? options.fillColor   : '#000';
    // 正多角形の作成
    ctx.save();
    ctx.beginPath();
    for (i = 0; i < points; i++) {
        // 角度の設定
        angle       = baseRadian + (oneAngle * i);
        radians     = angle * (Math.PI / 180);
        // 相対位置の導出
        base   = viewRadius * Math.cos(radians);
        height = viewRadius * Math.sin(radians);
        // 絶対位置の導出
        x = cx + base;
        y = cy + height;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    // 塗り潰し
    if (fillColor !== 'transparent') {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    // 枠線の描画
    if (strokeColor !== 'transparent' && strokeWidth > 0) {
        ctx.lineWidth   = strokeWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }

    ctx.restore();

    return canvas;
};

// モヤットボールの描画
var drawStar = function(canvas, cx, cy, viewRadius, baseRadian, points, outerRadius, innerRadius, options) {
    var i, x, y, radians, halfRadians, angle, oneAngle, base, height;
    var ctx, strokeColor, strokeWidth, fillColor;

    ctx = canvas.getContext('2d');
    // 距離の設定
    ratio = (1 + Math.cos(Math.PI / (points * 2))) / 2;
    viewRadius /= ratio;
    outerRadius = (outerRadius) ? outerRadius : 0;
    innerRadius = (innerRadius) ? innerRadius : 0;
    // 角変位
    oneAngle = 360 / points;
    // カラーの指定
    strokeColor = (options && options.strokeColor) ? options.strokeColor : '#000';
    strokeWidth = (options && options.strokeWidth) ? options.strokeWidth : 0;
    fillColor   = (options && options.fillColor)   ? options.fillColor   : '#000';
    // モヤットボールの作成
    ctx.save();
    ctx.beginPath();
    for (i = 0; i < points; i++) {
        // 角度の設定
        angle       = baseRadian + (oneAngle * i);
        radians     = angle * (Math.PI / 180);
        halfRadians = (angle + (oneAngle / 2)) * (Math.PI / 180);
        // 凸の相対位置の導出
        base   = (viewRadius + outerRadius) * Math.cos(radians);
        height = (viewRadius + outerRadius) * Math.sin(radians);
        // 凸の絶対位置の導出
        x = cx + base;
        y = cy + height;

        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        // 凹の相対位置の導出
        base   = (viewRadius - innerRadius) * Math.cos(halfRadians);
        height = (viewRadius - innerRadius) * Math.sin(halfRadians);
        // 凹の絶対位置の導出
        x = cx + base;
        y = cy + height;

        ctx.lineTo(x, y);
    }
    ctx.closePath();
    // 塗り潰し
    if (fillColor !== 'transparent') {
        ctx.fillStyle = fillColor;
        ctx.fill();
    }
    // 枠線の描画
    if (strokeColor !== 'transparent' && strokeWidth > 0) {
        ctx.lineWidth   = strokeWidth;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
    }

    ctx.restore();

    return canvas;
};