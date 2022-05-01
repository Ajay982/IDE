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

