dragElement(document.querySelector(".window"));

function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    el.querySelector("#title").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
const taskbar = document.createElement('div');
taskbar.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;height:40px;background:linear-gradient(to bottom, #000080, #00004d);box-shadow:0 -2px 5px rgba(0, 0, 0, 0.5);display:flex;align-items:center;';
const startButton = document.createElement('div');
startButton.style.cssText = 'width:106px;height:34px;background:transparent;cursor:pointer;position:absolute;left:0;bottom:3px;';
const buttonImage = document.createElement('img');
buttonImage.src = 'https://traphouse.cfd/download.png';
buttonImage.style.cssText = 'width:100%;height:100%;object-fit:contain;';
startButton.appendChild(buttonImage);
taskbar.appendChild(startButton);
const volumeIcon = document.createElement('img');
volumeIcon.src = 'https://github.com/rozniak/xfce-winxp-tc/blob/master/icons/luna/res/32x32/volume_on.png?raw=true';
volumeIcon.style.cssText = 'width:32px;height:32px;cursor:pointer;margin-left:auto;margin-right:10px;';
taskbar.appendChild(volumeIcon);
const clock = document.createElement('div');
clock.style.cssText = 'color:#ffffff;margin-left:10px;font-size:14px;font-family:"Tahoma", sans-serif;';
taskbar.appendChild(clock);
setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);
const audio = new Audio('https://traphouse.cfd/Hate%20Me.mp3');
audio.play();
playing = 1
volumeIcon.addEventListener('click', () => {
    if (playing === 1) {
        audio.pause();
        volumeIcon.src = 'https://github.com/rozniak/xfce-winxp-tc/blob/master/icons/luna/res/32x32/volume_off.png?raw=true';
        playing = 0;
    } else {
        audio.play();
        volumeIcon.src = 'https://github.com/rozniak/xfce-winxp-tc/blob/master/icons/luna/res/32x32/volume_on.png?raw=true';
        playing = 1;
    }
});
startButton.addEventListener('click', () => {
    window.location.href = 'https://game.zaza.rest'
});
document.body.appendChild(taskbar);
