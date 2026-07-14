// ======================================
// OUR SYMPHONY v4
// ======================================

// ======================================
// ELEMENT
// ======================================

const playButton = document.getElementById("playButton");
const startBook = document.getElementById("startBook");
const music = document.getElementById("music");
const vinyl = document.querySelector(".vinyl");
const stars = document.getElementById("stars");
const bookViewer = document.getElementById("bookViewer");
const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const pageNumber = document.getElementById("pageNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const letterButton = document.getElementById("letterButton");

// ======================================
// HERO BUTTON
// ======================================

playButton.addEventListener("click", async () => {

    try{
        await music.play();
        vinyl.style.animation = "spin 5s linear infinite";
        playButton.textContent = "🎵 Shape Of My Heart 🎵";
        playButton.disabled = true;
        playButton.style.opacity = ".8";
        // Scroll ke Track 01
        setTimeout(() => {
            document.querySelector(".track").scrollIntoView({
                behavior:"smooth"
            });
        },3000);
        // Scroll ke Memory Book
        setTimeout(() => {
            document.querySelector(".memory-book").scrollIntoView({
                behavior:"smooth"
            });
        },20000);
    }
    catch(error){
        console.log(error);
    }
});

// ======================================
// OPEN BOOK
// ======================================

startBook.addEventListener("click", () => {
    document.querySelector(".book-cover")
        .classList.add("hidden");
    bookViewer.classList.remove("hidden");
    currentPage = 0;
    showMemory(currentPage);
});
// ======================================
// INTRO ANIMATION
// ======================================

function introAnimation(){

    const tl = gsap.timeline();

    tl

    .from(".vinyl",{

        scale:0.6,
        opacity:0,
        duration:1

    })

    .from(".hero h1",{

        y:40,
        opacity:0,
        duration:.8

    },"-=0.4")

    .from(".hero p",{

        y:20,
        opacity:0,
        duration:.6

    },"-=0.3")

    .from("#playButton",{
            
        y:10,
        scale:0.9,
        duration:0.5,
        ease:"power2.out"
    },"-=0.2")

    .from(".subtitle",{

        opacity:0,
        duration:.5

    });

}

introAnimation();

// ======================================
// AURORA
// ======================================

gsap.to(".blue",{

    x:80,
    y:-60,
    duration:10,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"

});

gsap.to(".red",{

    x:-70,
    y:60,
    duration:12,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"

});

// ======================================
// STARS
// ======================================

for(let i=0;i<120;i++){
    const star=document.createElement("div");
    star.className="star";
    star.style.left=Math.random()*100+"%";
    star.style.top=Math.random()*100+"%";
    const size=Math.random()*2+1;
    star.style.width=size+"px";
    star.style.height=size+"px";
    star.style.opacity=Math.random();
    stars.appendChild(star);
    gsap.to(star,{
        opacity:0.2+Math.random()*0.8,
        duration:1+Math.random()*2,
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut"
    });
}

// ======================================
// SCROLL ANIMATION
// ======================================

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });

},{
    threshold:.3
});
document.querySelectorAll(
    ".track-content, .book-cover"
).forEach(section=>{
    observer.observe(section);
});

// ======================================
// MEMORIES
// ======================================

const memories = [

{
    image:"assets/photos/01.jpg",
    caption:"Hari pertama yang selalu aku ingat ❤️"
},

{
    image:"assets/photos/02.jpg",
    caption:"Aku mulai sadar kalau kamu adalah rumah."
},

{
    image:"assets/photos/03.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/04.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/05.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/06.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/07.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/08.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/09.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/10.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/11.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/12.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/13.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/14.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/15.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/16.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/17.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/18.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/19.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/20.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/21.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/22.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/23.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/24.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/25.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/26.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/27.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/28.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/29.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
},

{
    image:"assets/photos/30.jpg",
    caption:"Terima kasih sudah menjadi bagian terindah dalam hidupku."
}

];

let currentPage = 0;

// ======================================
// OPEN BOOK
// ======================================

startBook.addEventListener("click", () => {

    document.querySelector(".book-cover")
        .classList.add("hidden");

    bookViewer.style.display = "flex";

    currentPage = 0;

    showMemory(currentPage);

});

// ======================================
// SHOW MEMORY
// ======================================

function showMemory(index){

    memoryImage.src = memories[index].image;

    memoryCaption.textContent =
        memories[index].caption;

    pageNumber.textContent =
        `${index + 1} / ${memories.length}`;
}

// ======================================
// PAGE ANIMATION
// ======================================

function changePage(index){

    memoryImage.classList.add("page-changing");
    memoryCaption.classList.add("page-changing");

    setTimeout(()=>{

        showMemory(index);

        memoryImage.classList.remove(
            "page-changing"
        );

        memoryCaption.classList.remove(
            "page-changing"
        );

    },300);

    const flip=new Audio("assets/music/flip.mp3");

    flip.play();

}

// ======================================
// NEXT BUTTON
// ======================================

nextBtn.addEventListener("click",()=>{

    if(currentPage < memories.length - 1){

        currentPage++;

        changePage(currentPage);

    }

    else{

        openHeartSection();

    }

});

// ======================================
// PREVIOUS BUTTON
// ======================================

prevBtn.addEventListener("click",()=>{

    if(currentPage > 0){

        currentPage--;

        changePage(currentPage);

    }

});

// ======================================
// HEART COLLAGE
// ======================================

const heartPhotos = [

    "assets/photos/01.jpg",
    "assets/photos/02.jpg",
    "assets/photos/03.jpg",
    "assets/photos/01.jpg",
    "assets/photos/02.jpg",
    "assets/photos/03.jpg",
    "assets/photos/01.jpg",
    "assets/photos/02.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/03.jpg",
    "assets/photos/01.jpg"

];

const heartPositions = [];

for(let i = 0; i < 30; i++){

    const t = (Math.PI * 2 * i) / 30;

    const x =
        16 * Math.pow(Math.sin(t),3);

    const y =
        13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t);

    heartPositions.push({
        x:50 + x * 2,
        y:50 - y * 2
    });

}

function createHeartCollage(){

    const container =
        document.getElementById(
            "heartContainer"
        );

    container.innerHTML = "";

    heartPhotos.forEach((photo,index)=>{

        const img =
            document.createElement("img");

        img.src = photo;

        img.classList.add("heart-photo");

        img.style.left =
        Math.random()*100 + "%";

        img.style.top =
        Math.random()*100 + "%";

        container.appendChild(img);

        setTimeout(()=>{

           img.style.left =
    heartPositions[index].x + "%";

img.style.top =
    heartPositions[index].y + "%";

        },300);

    });

}

function openHeartSection(){

    const heart =
        document.getElementById(
            "heartSection"
        );

    heart.classList.remove("hidden");

    heart.scrollIntoView({
        behavior:"smooth"
    });

    createHeartCollage();

    setTimeout(()=>{

        letterButton.classList.add(
            "show"
        );

        document
            .querySelector(".final-track")
            .scrollIntoView({
                behavior:"smooth"
            });

    },5000);

}

setInterval(()=>{

    const heart=document.createElement("div");

    heart.className="floating-heart";
    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-30px";
    heart.style.fontSize=(18+Math.random()*20)+"px";
    heart.style.animationDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },11000);

},700);

// ======================================
// END
// ======================================