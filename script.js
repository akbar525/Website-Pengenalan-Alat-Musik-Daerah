function mulaiBelajar(){

document.getElementById("home").style.display="none";
document.getElementById("menu").style.display="block";

}

function kembaliHome(){

document.getElementById("menu").style.display="none";
document.getElementById("home").style.display="block";

}

function kembaliMenu(){

document.getElementById("materiPage").style.display="none";
document.getElementById("quizPage").style.display="none";
document.getElementById("menu").style.display="block";

}

function showMateri(){

document.getElementById("menu").style.display="none";
document.getElementById("materiPage").style.display="block";

let data=[

{nama:"Angklung",img:"img/angklung.jpg",audio:"audio/angklung.mp3",desk:"Angklung adalah alat musik multitonal yang dimainkan dengan cara digoyangkan sehingga bambu-bambunya saling bergetar dan menghasilkan nada. Setiap tabung bambu memiliki ukuran berbeda untuk menghasilkan nada yang beragam, alat musik ini berasal dari daerah jawa barat."},

{nama:"Gamelan",img:"img/gamelan.jpg",audio:"audio/gamelan.mp3",desk:"Ansambel musik tradisional dari Jawa dan Bali."},

{nama:"Sasando",img:"img/sasando.jpg",audio:"audio/sasando.mp3",desk:"Alat musik petik dari NTT."},

{nama:"Kolintang",img:"img/kolintang.jpg",audio:"audio/kolintang.mp3",desk:"Alat musik dari Sulawesi Utara."},

{nama:"Tifa",img:"img/tifa.jpg",audio:"audio/tifa.mp3",desk:"Alat musik pukul dari Papua."},

{nama:"Saluang",img:"img/saluang.jpg",audio:"audio/saluang.mp3",desk:"Alat musik tiup dari Sumatera Barat."},

{nama:"Kecapi",img:"img/kecapi.jpg",audio:"audio/kecapi.mp3",desk:"Alat musik petik dari Jawa Barat."},

{nama:"kecaping",img:"img/kecaping.jpg",audio:"audio/kecaping.mp3",desk:"Alat musik tradisional sulawesi selatan."},

{nama:"Talempong",img:"img/talempong.jpg",audio:"audio/talempong.mp3",desk:"Alat musik dari Sumatera Barat."},

{nama:"Gendang",img:"img/gendang.jpg",audio:"audio/gendang.mp3",desk:"Alat musik pukul tradisional."}

];

let html="";

data.forEach(m=>{

html+=`

<div class="materiCard">

<h3>${m.nama}</h3>

<img src="${m.img}">

<p>${m.desk}</p>

<audio controls>
<source src="${m.audio}">
</audio>

</div>

`;

});

document.getElementById("materi").innerHTML=html;

}

function showQuiz(){

document.getElementById("menu").style.display="none";
document.getElementById("quizPage").style.display="block";

}

function cekJawaban(){

let kunci=["a","a","a","a","a","a","a","a","a","a"];

let skor=0;
let review="";

for(let i=1;i<=10;i++){

let jawab=document.querySelector('input[name="q'+i+'"]:checked');

if(jawab){

if(jawab.value===kunci[i-1]){

skor++;
review+="<p>Soal "+i+" : Benar</p>";

}else{

review+="<p>Soal "+i+" : Salah</p>";

}

}else{

review+="<p>Soal "+i+" : Tidak dijawab</p>";

}

}

let nilai=skor*10;

document.getElementById("hasil").innerHTML="Nilai Anda : "+nilai;

document.getElementById("review").innerHTML=review;

}

function ulangQuiz(){

for(let i=1;i<=10;i++){

let pilihan=document.getElementsByName("q"+i);

for(let j=0;j<pilihan.length;j++){

pilihan[j].checked=false;

}

}

document.getElementById("hasil").innerHTML="";
document.getElementById("review").innerHTML="";

}
