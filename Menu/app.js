var menu = document.getElementById("menu");
var Menu = [
    {
        title: "Butter Milk Pancake",
        description: `This is a simple Pancake that is available at our place at an affordable cost.`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
        category: "Breakfast",
    },
    {
        title: "Country Delight",
        description: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
        category: "Breakfast",
    },
    {
        title: "Bacon Overflow",
        description: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
        category: "Breakfast",
    },
    {
        title: "Dinner Double",
        description: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
        category: "Lunch",
    },
    {
        title: "Egg Attack",
        description: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
        category: "Lunch",
    },
    {
        title: "American Classic",
        description: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
        category: "Lunch",
    },
    {
        title: "Steak Dinner",
        description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
        category: "Dinner",
    },
    {
        title: "Godzilla Milkshake",
        description: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
        category: "Shakes",
    },
    {
        title: "Oreo Dream",
        description: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
        category: "Shakes",
    },
    {
        title: "Quarantine Buddy",
        description: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
        category: "Shakes",
    }
];

var Displaymenu = Menu.map(function (item) {
    return `<img src=${item.img}></img>
            <h1>${item.title}</h1>
            <p>${item.description}</p>`
})
menu.innerHTML = Displaymenu;

var AllButton = document.getElementById("all");
AllButton.onclick = () => {
    var Displaymenu = Menu.map(function (item) {
        return `<img src=${item.img}></img>
           <h1>${item.title}</h1>
           <p>${item.description}</p>`
    }).join("");
    menu.innerHTML = Displaymenu;
}

var breakfastButton = document.getElementById("breakfast");
breakfastButton.onclick = () => {
    BreakFastDisplay();
};

function BreakFastDisplay() {
    var Displaymenu = Menu.map(function (item) {
        if (item.category === "Breakfast") {
            return `<img src=${item.img}></img>
            <h1>${item.title}</h1>
            <p>${item.description}</p>`
        }
    }).join("");
    menu.innerHTML = Displaymenu;
};

var LunchButton = document.getElementById("lunch");
LunchButton.onclick = () => {
    LunchDisplay();
};

function LunchDisplay() {
    var Displaymenu = Menu.map(function (item) {
        if (item.category === "Lunch") {
            return `<img src=${item.img}></img>
            <h1>${item.title}</h1>
            <p>${item.description}</p>`
        }
    }).join("");
    menu.innerHTML = Displaymenu;
};

var DinnerButton = document.getElementById("dinner");
DinnerButton.onclick = () => {
    DinnerDisplay();
};

function DinnerDisplay() {
    var Displaymenu = Menu.map(function (item) {
        if (item.category === "Dinner") {
            return `<img src=${item.img}></img>
            <h1>${item.title}</h1>
            <p>${item.description}</p>`
        }
    }).join("");
    menu.innerHTML = Displaymenu;
};

var ShakesButton = document.getElementById("shakes");
ShakesButton.onclick = () => {
    ShakesDisplay();
};

function ShakesDisplay() {
    var Displaymenu = Menu.map(function (item) {
        if (item.category === "Shakes") {
            return `<img src=${item.img}></img>
            <h1>${item.title}</h1>
            <p>${item.description}</p>`
        }
    }).join("");
    menu.innerHTML = Displaymenu;
};