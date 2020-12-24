var box = document.getElementById("box");

box.animate(
    [
        {transform : "rotate(0) translate3D(-50%, -50%, 0)"},
        {transform: "rotate(30deg)", offset: 0.3 },
        {transform: "rotate(360deg) translate3D(-50%,-50%,0)"},
     ],
     {
         duration: 3000,
         iterations: Infinity
     }
)