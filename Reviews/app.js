window.onload = () => {

    var image = document.getElementById("image");
    var text = document.getElementById("text");
    var backwards = document.getElementById("backwards");
    var forwards = document.getElementById("forwards");
    var surprise = document.getElementById("surprise");
    var name = document.getElementById("name");
    var profession = document.getElementById("profession");

    let reviews = [
        {
            image: "C:/Users/SAAD COMMUNICATION/Desktop/Software Side/WebApps/Reviews/image (1).jpg",
            review: "This is awesome",
            name: "My Name",
            profession: "My Profession"
        },
        {
            image: "C:/Users/SAAD COMMUNICATION/Desktop/Software Side/WebApps/Reviews/image (2).jpg",
            review: "As is this",
            name: "what a name",
            profession: "what a profession"
        },
        {
            image: "C:/Users/SAAD COMMUNICATION/Desktop/Software Side/WebApps/Reviews/image (3).jpg",
            review: "Ditto",
            name: "What's in a name",
            profession: "No Comments"
        },
        {
            image: "C:/Users/SAAD COMMUNICATION/Desktop/Software Side/WebApps/Reviews/image.jpg",
            review: "This is awesome? not quite!",
            name: "Why a name?",
            profession: "Go to Hell!"
        }
    ]

    var i = 0;
    var lengthOfReviews = reviews.length;

    //Displaying the first review

    image.src = reviews[i].image;
    name.innerHTML = reviews[i].name;
    profession.innerHTML = reviews[i].profession;
    text.innerHTML = reviews[i].review;

    //Setting the forward button so as to go towards the next review
    forwards.onclick = () => {
        i++;
        if (i < lengthOfReviews && i >= 0) {
            text.innerHTML = reviews[i].review;
            name.innerHTML = reviews[i].name;
            profession.innerHTML = reviews[i].profession;
            image.src = reviews[i].image;
        }
        if (i == lengthOfReviews) {
            i = 0;
            text.innerHTML = reviews[i].review;
            name.innerHTML = reviews[i].name;
            profession.innerHTML = reviews[i].profession;
            image.src = reviews[i].image;
        }
    }

    //Setting the backward button so as to go back to previous review

    backwards.onclick = () => {
        i--;
        if (i >= 0) {
            text.innerHTML = reviews[i].review;
            name.innerHTML = reviews[i].name;
            profession.innerHTML = reviews[i].profession;
            image.src = reviews[i].image;
        }
        if (i < 0) {
            i = 3;
            text.innerHTML = reviews[i].review;
            name.innerHTML = reviews[i].name;
            profession.innerHTML = reviews[i].profession;
            image.src = reviews[i].image;
        }
    }

    //Through this function, we will generate a random number within our desired range

    const gettingRandomInteger = (limitingInteger) => {

        return Math.floor(Math.random() * limitingInteger)

    }

    //Setting the surprise button so as to give us review at a random index

    surprise.onclick = () => {

        var RandomInteger = gettingRandomInteger(lengthOfReviews);
        image.src = reviews[RandomInteger].image;
        name.innerHTML = reviews[RandomInteger].name;
        profession.innerHTML = reviews[RandomInteger].profession;
        text.innerHTML = reviews[RandomInteger].review;
    }
}