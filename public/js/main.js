let magicGrid = new MagicGrid({
    container: ".image-grid", // Required. Can be a class, id, or an HTMLElement.
    static: true, // Required for static content.
    animate: true, // Optional.
    gutter: 0,
});
  
magicGrid.listen();

