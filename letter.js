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

Dear Sayang ❤️,

Thank you for being part of my life.

Thank you for every laugh,
every story,
every little moment that became a beautiful memory.

I don't know what the future holds,
but I know one thing...

Meeting you was one of the best things
that ever happened to me.

If one day we read this again,
I hope we'll smile and remember
how beautiful this chapter was.

Forever your favorite song.

❤️
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