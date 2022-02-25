let key = 'C';
let quality = '';

let keys = ['A', 'B', 'C', 'D', 'E','F','G'];
let qualitys = ['#','b', ''];

let keyText = document.querySelector('.key-text');

document.querySelector('.key-display').addEventListener('click', () => {
    newKey();
})

function newKey() {
    keyNum = Math.floor(Math.random() * keys.length);
    qualNum = Math.floor(Math.random() * qualitys.length);
    key = keys[keyNum];
    quality = qualitys[qualNum];
    keyText.textContent = key + quality;
}
