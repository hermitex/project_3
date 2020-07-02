const smallBg = document.getElementById('image');

const images = [
    {
        img: '../images/audience.jpg'
    },
    {
        img: '../images/film-show.jpg'
    },
    {
        img: '../images/godfather.jpg'
    },
    {
        img: '../images/movie-out.jpg'
    },
]

images.forEach(image => {
    document.body.style.backgroundImage = image.img
})