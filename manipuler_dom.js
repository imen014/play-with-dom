let div_head = document.querySelector('.div_head');

//first element
let h1 = document.createElement('h1');
h1.innerHTML = "mon premier h1 using dom tools";
div_head.appendChild(h1);

//second element
let h2 = document.createElement('h2');
h2.innerHTML = "the elements in this page are created only using dom";
div_head.appendChild(h2);

let h3 = document.createElement('h3');
h3.innerHTML = "this is so funny !";
div_head.appendChild(h3);

let h4 = document.createElement('h4');
h4.innerHTML = "the way we add elements here !";
div_head.appendChild(h4);

let h5 = document.createElement('h5');
h5.innerHTML = "is so sooooooooooooo";
div_head.appendChild(h5);

let h6 = document.createElement('h6');
h6.innerHTML = "funny !";
div_head.appendChild(h6);

let body = document.querySelector('.body_container');

let h2b = document.createElement('h2');
h2b.innerHTML = "lets playing with body now !";
body.appendChild(h2b);

let a = document.createElement('a');
a.href = "www.body.com";
a.innerText = "body link";
body.appendChild(a);

let ul = document.createElement('ul');
ul.name = "list1";
ul.id = "ul1";
body.appendChild(ul);

//list elemnts
let item1 = document.createElement('li');
item1.innerText  = "make breakfast";
let item2 = document.createElement('li');
item2.innerText = "playing piano";
ul.appendChild(item1);
ul.appendChild(item2);

let img = document.createElement('img');
img.src = "femme.JFIF";
img.alt = "image flour"
body.append(img);

let list = document.getElementById('ul1');

let p = document.createElement('p');
p.innerHTML = "there s someone playing";
list.appendChild(p);





