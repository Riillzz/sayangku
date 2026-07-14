// ======================================
// ELEMENT
// ======================================

const envelope =
    document.getElementById("envelope");

const letterCard =
    document.getElementById("letterCard");

const letterText =
    document.getElementById("letterText");

const letterMusic =
    document.getElementById("letterMusic");

const endingMessage =
    document.getElementById("endingMessage");

const restartButton =
    document.getElementById("restartButton");

// ======================================
// LETTER CONTENT
// ======================================

const message = `

Dear Sayang ❤️

Terima kasih yaa udah bertahan sejauh ini.

Kalau dipikir-pikir, perjalanan kita ternyata udah panjang ya.
Berawal dari dua orang yang sama sekali gak saling kenal,
lalu jadi teman,
sampai akhirnya Tuhan mempertemukan kita di waktu yang paling tepat.

Jujur, aku bukan orang yang sempurna.
Masih banyak kurangnya.
Masih sering bikin kamu kesel,
masih sering bikin kamu kecewa,
dan mungkin masih belum bisa menjadi pasangan yang selalu kamu harapkan.

Maaf ya...
Maaf kalau selama ini aku belum selalu ngerti isi kepalamu.
Maaf kalau pernah ada kata atau sikapku yang tanpa sadar bikin hati kamu terluka.

Tapi satu hal yang selalu ingin kamu tahu...

Aku gak pernah berhenti berusaha menjadi seseorang yang lebih baik,
karena aku ingin terus bertumbuh bersama kamu.

Terima kasih karena selalu sabar menghadapi sifatku.
Terima kasih karena selalu mendengarkan cerita-ceritaku yang kadang gak penting.
Terima kasih karena selalu ada di saat aku senang,
dan tetap memilih bertahan di saat aku sedang tidak baik-baik saja.

Hadirnya kamu di hidup aku bikin aku ngerasa seneng banget tau.

Sekarang setiap lagu punya kenangan.
Setiap tempat terasa lebih indah kalau ada kamu.
Bahkan hari-hari biasa pun terasa spesial hanya karena aku bisa ngobrol sama kamu.

Aku bersyukur...
Sangat bersyukur...
Karena dari miliaran manusia di dunia,
Tuhan mempertemukan aku dengan seseorang sebaik kamu.

Aku gak tahu masa depan nanti seperti apa.
Aku gak bisa janji kalau semuanya akan selalu mudah.
Pasti akan ada hari di mana kita sama-sama capek,
sama-sama keras kepala,
atau sama-sama salah paham.
Atau bahkan hari di mana kita harus mengakhiri hubungan ini.

Tapi aku ingin kita selalu memilih untuk pulang ke orang yang sama.

Pulang ke "kita".

Karena menurutku,
cinta bukan tentang siapa yang paling sempurna,
melainkan dua orang yang terus memilih satu sama lain,
meski sama-sama punya kekurangan.

Aku bangga pernah bertemu denganmu.

Dan semoga Tuhan masih mengizinkan kita terus bersama (meskipun sulit),
aku ingin terus membuat lebih banyak kenangan bersamamu.
Lebih banyak tawa.
Lebih banyak perjalanan.
Lebih banyak foto.
Lebih banyak cerita.

Sampai nanti,
setiap halaman hidup kita dipenuhi oleh kata "kita".

Terima kasih sudah menjadi rumah,
tempat paling nyaman untuk pulang.

I love you.
More than yesterday,
and I hope,
less than tomorrow. ❤️

Forever yours,

Rillzzz ❤️ Love You Sayangku

`;

// ======================================
// TYPEWRITER
// ======================================

function typeWriter(text, element){

    let i = 0;

    const typing = setInterval(()=>{

        element.textContent +=
            text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(typing);

            setTimeout(()=>{

                endingMessage
                    .classList
                    .remove("hidden");

                setTimeout(()=>{

                    endingMessage
                        .classList
                        .add("show");

                },100);

            },1500);

        }

    },40);

}

// ======================================
// OPEN LETTER
// ======================================

envelope.addEventListener("click", async () => {

    envelope.classList.add("hidden");

    letterCard.classList.remove("hidden");

    try{
        await letterMusic.play();
    }
    catch(error){
        console.log(error);
    }

    typeWriter(message, letterText);
    setInterval(createHeart,300);

});

function createHeart(){

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.fontSize =
        20 + Math.random()*30 + "px";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

restartButton.addEventListener(
    "click",
    ()=>{

        location.href =
            "index.html";

    }
);