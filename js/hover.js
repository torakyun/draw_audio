/*
Copyright (c) 2021 by Rian Ariona (https://codepen.io/ariona/pen/JopOOr)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// why it doesn't work on firefox?
var card = $(".card");

$(document).on("mousemove",function(e) {
  var ax = -($(window).innerWidth()/2- e.pageX)/20;
  var ay = ($(window).innerHeight()/2- e.pageY)/10;
  card.attr("style", "transform: translateZ(200px) rotateY("+ax+"deg) rotateX("+ay+"deg);-webkit-transform: translateZ(200px) rotateY("+ax+"deg) rotateX("+ay+"deg);-moz-transform: translateZ(200px) rotateY("+ax+"deg) rotateX("+ay+"deg)");
});