;
// 新建一个标签
const infoDisplay = document.createElement('div');
infoDisplay.id = 'info-display'
const body = document.body;
body.appendChild(infoDisplay);
document.addEventListener('mousemove', function (event) {
  const element = event.target;
  let shift = event.shiftKey
  let info = `
    tagName: ${element.localName} <br>
    id: ${element.id} <br>
    class: ${element.className} <br>
    size: w-${element.offsetWidth}px, h-${element.offsetHeight}px
    `
  if (shift) {
    info += `<br>
      childNodes: ${element.childNodes.length} <br>
      parentNode: ${element.parentNode.localName} <br>
      `
  }else {
    info += `<br>
      按住shift显示更多
    `
  }
  infoDisplay.innerHTML = info

});

