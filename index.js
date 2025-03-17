
const ramenData = [
    {
        id: 1,
        name: 'Qyukotsu Ramen',
        restaurant: 'Ichiran',
        image: 'images/gyukotsu (1).jpg',
        rating: 6,
        comment: 'Sweet.'
    },
    {
        id: 2,
        name: 'Kojiro Ramen',
        restaurant: 'Menya',
        image: 'images/kojiro.jpg',
        rating: 2,
        comment: 'Yummy.'
    },
    {
        id: 3,
        name: 'Naruto Ramen',
        restaurant: 'Ramen Nagi',
        image: 'images/naruto.jpg',
        rating: 6,
        comment: 'Delicious.'
    },
    {
        id: 4,
        name: 'Nirvana Ramen',
        restaurant: 'Ramen-ya',
        image: 'images/nirvana.jpg',
        rating: 7,
        comment: 'Mouth-watering.'
    },
    {
        id:5,
        name: 'Shoyu Ramen',
        restaurant: 'Ichiran',
        image: 'images/shoyu.jpg',
        rating: 7,
        comment: 'Tasty'
    }
];
const ramenImages = document.getElementById("ramen");
const display = document.getElementById("place");
const img = document.createElement('img')
display.appendChild(img)
const p = document.createElement('p')
display.appendChild(p)

function displayRamens() {
    ramenData.forEach(function(pic){
        const image = document.createElement("img")
        image.src = pic.image
        image.id = pic.id
        ramenImages.appendChild(image)
        image.addEventListener("click", handleClick)
    })
}
function handleClick(e){
    const image = e.target
    ramenData.forEach(function(pic){
        if (pic.id === Number(image.id)){
            img.src = pic.image
            p.innerHTML = ` <span>Name: ${pic.name}</span><br>
                            <span>Restaurant: ${pic.restaurant}</span><br>
                            <span>Rating: ${pic.rating}</span><br>
                            <span>Comments: ${pic.comment}</span><br>`;
        }  
    })
}
function addSubmitListener(){
    const form = document.querySelector('#new-ramen');
    form.addEventListener("submit", function(e){
        e.preventDefault()
        const image = document.createElement("img");
        ramenImages.appendChild(image)
        const children = e.target.children
        const pic = {id:ramenData.length+1}
        for (let child of children){
            if (child.id !== "submit"){
                pic[child.id] = child.value
            }        
        }
        ramenData.push(pic)
        image.src = pic.image
        image.id = pic.id
        image.addEventListener("click", handleClick)
    })
    form.reset() 
}

    document.addEventListener('DOMContentLoaded', function main() {
        
        // Function to display ramen 
        addSubmitListener()
        displayRamens()
    })
