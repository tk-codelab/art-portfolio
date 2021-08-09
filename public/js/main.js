// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images. 
window.addEventListener('load', (event) => {
    let magicGrid = new MagicGrid({ // A simple, lightweight Javascript library for dynamic grid layouts. https://github.com/e-oj/Magic-Grid
        container: ".image-grid", // Required. Can be a class, id, or an HTMLElement.
        static: true, // Required for static content.
        animate: true, // Optional.
        gutter: 0,
    });
      
    magicGrid.listen();
});
