const btnTh = document.querySelectorAll('.btn-th');
const tambleBtn = document.querySelectorAll('.tamble-btn');

const productsBox = document.querySelector('.catalog-products-box');
const showMore = document.querySelector('#products-more-btn');

// Event listener for '.tamble-btn' elements
tambleBtn.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();
    });
});

// Event listeners for '.btn-th' elements
btnTh.forEach((el) => {
    el.addEventListener('click', function() {
        // Remove 'active' class from all '.btn-th' elements
        btnTh.forEach((btn) => {
            btn.classList.remove('active');
            btn.classList.remove('active-text')
        });
        // Add 'active' class to the clicked '.btn-th' element
        this.classList.add('active');
        this.classList.add('active-text')
        // Remove 'active-text' class from all '.tamble-btn'
        tambleBtn.forEach((item) => {
            item.classList.remove('active-text');
        });

    });
});


// ========= Products ==========================

let showCardClick = 9;
let showCard = showCardClick;
let countClickBntShowCards = 1;

const products = [
    {
        id: 1,
        name: 'Products Name 1',
        image: './src/img/f1.jpg',
        price: 5200
    },
    {
        id: 2,
        name: 'Products Name 1',
        image: './src/img/f2.jpg',
        price: 8800
    },
    {
        id: 3,
        name: 'Products Name 1',
        image: './src/img/f3.jpg',
        price: 8500
    },
    {
        id: 4,
        name: 'Products Name 1',
        image: './src/img/f4.jpg',
        price: 2005
    },
    {
        id: 5,
        name: 'Products Name 1',
        image: './src/img/f4.jpg',
        price: 5200
    },
    {
        id: 6,
        name: 'Products Name 1',
        image: './src/img/f5.jpg',
        price: 4200
    },
    {
        id: 7,
        name: 'Products Name 1',
        image:'./src/img/f6.jpg',
        price: 12000
    },
    {
        id: 8,
        name: 'Products Name 1',
        image: './src/img/f7.jpg',
        price: 6500
    },
    {
        id: 9,
        name: 'Products Name 1',
        image: './src/img/n1.jpg',
        price: 6500
    },
    {
        id: 10,
        name: 'Products Name 1',
        image: './src/img/n2.jpg',
        price: 6500
    },
    {
        id: 11,
        name: 'Products Name 1',
        image: './src/img/n3.jpg',
        price: 6500
    },
    {
        id: 12,
        name: 'Products Name 1',
        image: './src/img/n4.jpg',
        price: 6500
    },
    {
        id: 13,
        name: 'Products Name 1',
        image: './src/img/n5.jpg',
        price: 6500
    },
    {
        id: 14,
        name: 'Products Name 1',
        image: './src/img/n6.jpg',
        price: 6500
    },
    {
        id: 15,
        name: 'Products Name 1',
        image: './src/img/n7.jpg',
        price: 6500
    },
    {
        id: 16,
        name: 'Products Name 1',
        image: './src/img/n8.jpg',
        price: 6500
    },
]


function renderStartPage() {
    const arrCards = products.slice(0, showCardClick);
    initApp(arrCards);
}

renderStartPage();

function initApp(data) {
    data.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('products-block');
        newDiv.innerHTML = `
            <img src="${value.image}" alt="" class="products-img">
            <p class="products-name">${value.name}</p>
            <p class="products-price">${value.price.toLocaleString()} ₽ </p>
        `;
        productsBox.appendChild(newDiv);
    });

    if (products.length > showCardClick && 
            showMore.classList.contains('none')) {
        showMore.classList.remove('none');
    }
}

showMore.addEventListener('click', sliceArrCards);

function sliceArrCards() {
    if (showCard >= products.length) return;
    
    showCard += 1;
    const arrCards = products.slice(0, showCard);
    initApp(arrCards);

    showCard = productsBox.children.length

    if (showCard >= products.length) {
        showMore.classList.add('none')
    }
}


