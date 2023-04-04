let area_image = document.querySelector('img')

let images = [
    '../imgs/img_one.jfif',
    '../imgs/img_two.jpg',
    '../imgs/img_three.jpg'
]

let i = -1

function show_image() {
    i++

    if (i > 2) {
        i = 0
    }

    area_image.src = images[i]

    setTimeout('show_image()', 2000)
} 