const sliderContainers = document.querySelectorAll('.slider-container');

sliderContainers.forEach(sliderContainer =>{
    const name = sliderContainer.attributes.name.value;
    const sliderPointers = document.querySelectorAll(`.slider-container[name=${name}] .pointer`);
    
    sliderPointers.forEach(pointer => {
        pointer.addEventListener('click', event =>{
            const name = pointer.attributes.name.value;
            const target = pointer.attributes.target.value;
            const sliders = document.querySelector(`.slider-container[name=${name}] .sliders`);


            sliders.attributes.slide.value = target;

            const SameNamePointers = document.querySelectorAll(`.pointer[name=${name}]`);

            SameNamePointers.forEach(pointer =>{
                pointer.classList.remove('active')
            });

            pointer.classList.add('active')

        })
    })
})

