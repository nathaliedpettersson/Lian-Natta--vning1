const imgUrl = new URL('img/poop.jpg', import.meta.url);

const img = document.createElement('img');
img.src = imgUrl.href;
document.body.append(img);