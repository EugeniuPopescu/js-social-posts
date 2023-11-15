const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10"
        },
        likes: 120,
        created: "2021-09-03"
    },
    {
        id: 3,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20"
        },
        likes: 78,
        created: "2021-05-15"
    },
    {
        id: 4,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=24",
        author: {
            name: "Luca Formicola",
            image: null
        },
        likes: 56,
        created: "2021-04-03"
    },
    {
        id: 5,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29"
        },
        likes: 95,
        created: "2021-03-05"
    }
];

// svuoto il contenuto ad ogni ricarica dell pagina
document.querySelector('#container').innerHTML = '';

// ciclo foreach tutti i post
posts.forEach((item) => {

    // ho aggiunto al container nell'html la mia variabile con il contenuto
    // += la funzione che mi renderizza il mio post
    document.querySelector('#container').innerHTML += renderPost(item);

});

// like buttons & counter
let likeButtons = document.querySelectorAll('.like-button');
let likeCounters = document.querySelectorAll('.js-likes-counter');

for (let i = 0; i < likeButtons.length; i++) {
    const btn = likeButtons[i];
    const counter = likeCounters[i];
    
    btn.addEventListener('click', function(e) {
        
        e.preventDefault();

        
        const likeNumber = parseInt(counter.innerText);
        

        // SE il btn contiene la classe
        if (btn.classList.contains('like-button--liked')) {
            // toglie la classe mi-piace e decrementa il contatore
            btn.classList.remove('like-button--liked');
            counter.innerText = likeNumber - 1;
        } else {
            // aggiunge la classe mi-piace e incrementa il contatore
            btn.classList.add('like-button--liked');
            counter.innerText = likeNumber + 1;
        }
    });
}

// ciclo i bottoni
// likeButtons.forEach((btn, i) => {
    
//     btn.addEventListener('click', function(e) {
        
//         e.preventDefault();

//         btn.classList.toggle('like-button--liked');
//     });
// });

// funziona che renderizza il mio post
// item è la variabile che gli do io (puo essere diversa)
function renderPost(item) {
    // destrutturo do posts
    let { id, content, media, author, likes, created } = item;
    let { name, image } = author;


    let result = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${ getImage(image, name) }         
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${ getDate(created) }</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${content}</div>
        <div class="post__image">
            <img src="${media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">${likes}</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${id}" class="js-likes-counter">80</b> persone
                </div>
            </div> 
        </div>            
    </div>`;

    return result;
}

function getImage(image, name) {
    result = '';

    if (image == null) {
        let nomeSeparato = name.split('');
        let fName = nomeSeparato[0];
        let sName = nomeSeparato[1];
        let iniziali = fName[0] + '-' + sName[0];

        result = `<div class="profile-pic-default"><span>${iniziali}</span></div>`;
    } else {
        result = `<img class="profile-pic" src="${image}" alt="${name}">`;
    }

    return result;
} 

function getDate(date) {
    // modifica data
    // split -> mi prende la data e mi crea l'array 
    // reverse -> mi inverte i valori al contrario
    // join -> mi unisce i valori nell'array e li separa con quello che li metto nelle tonde
    return date.split('-').reverse().join('-');
}