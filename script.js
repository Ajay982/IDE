var left = document.getElementById('left');
var right = document.getElementById('right');
var bar = document.getElementById('dragbar');

const drag = (e) => {
    e.preventDefault();
  document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
  left.style.width = (e.pageX - bar.offsetWidth / 2) + 'px';
}

bar.addEventListener('mousedown', () => {
  document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {
  document.removeEventListener('mousemove', drag);
});

const input = document.querySelector('textarea');
const gutter = document.querySelector('.gutter');
let val = input.value;
let numOfLines = 1;
 
function update(e) {
    val = input.value;
    
    let lineBreaks = val.match(/\n/gi) || [];
    let numOfSpans = gutter.childElementCount;
    numOfLines = lineBreaks.length ? lineBreaks.length + 1 : 1;
    
    gutter.innerHTML = ""
    for(var i = 0; i < numOfLines; i++) {
        console.log('creating no', i)
        var el = document.createElement('span');
        el.innerHTML = i+1;
        gutter.appendChild(el);
    }
}
 
input.addEventListener('input', update);

