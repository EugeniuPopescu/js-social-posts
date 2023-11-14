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
            image: ''
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

    // ho salvato in una variabile il contenuto del'html
    let post = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src="${item.author.image}" alt="${item.author.name}">                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${item.author.name}</div>
                    <div class="post-meta__time">${item.created}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${item.content}</div>
        <div class="post__image">
            <img src="${item.media}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">${item.likes}</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                </div>
            </div> 
        </div>            
    </div>`;
    
    // ho aggiunto al container nell'html la mia variabile con il contenuto
    document.querySelector('#container').innerHTML += post;

    // like button 
    document.querySelector('.like-button').addEventListener('click', function () {
        let button = document.querySelector('.like-button');

        if (button.classList.contains('.like-button__label')) {
            
            button.classList.remove('.like-button__label');
            button.classList.add('.like-button--liked');
        } else {
            button.classList.remove('.like-button--liked');
            button.classList.add('.like-button__label');
        }
    })

    // bonus 4
    if(item.author.image === '') {
        item.author.image = '17004.png';
    }

});
