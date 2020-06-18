const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", 
    "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)", 
    "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height, 
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if(entry.isIntersecting){
          bubble.style.setProperty("left", `${directions.left}px`);
          bubble.style.setProperty("top", `${directions.top}px`);
          bubble.style.setProperty("width", `${directions.width}px`);
          bubble.style.setProperty("height", `${directions.height}px`);
          bubble.style.background = gradients[gradientIndex]
        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});