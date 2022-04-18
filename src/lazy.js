const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const urlImage = imagen.dataset.src;

    imagen.src = urlImage;

    loadedImages++;
    printLog();

    observer.unobserve(container); // div container
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});


export const registerImage = (image) => {
    observer.observe(image)
};