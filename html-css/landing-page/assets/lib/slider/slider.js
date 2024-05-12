const sliderContainers = document.querySelectorAll('.slider-container');

console.log(sliderContainers)

window.onresize = () => {
    sliderContainers.forEach(sliderContainer =>{
        const name = sliderContainer.attributes.name.value;
        const pointers0 = document.querySelectorAll(`.pointer[target="0"]`);
        const sliders = document.querySelector(`.slider-container[name="${name}"] .sliders`);


        sliders.attributes.slide.value = 0;
        disablePointers(name)
        activePointers(pointers0)
    })
}

sliderContainers.forEach(sliderContainer =>{
    const name = sliderContainer.attributes.name.value;
    console.log('name :', name);
    const sliderPointers = document.querySelectorAll(`.slider-container[name="${name}"] .pointer`);
    console.log('sliderPointers :', sliderPointers);
    
    sliderPointers.forEach(pointer => {
        pointer.addEventListener('click', event =>{
            const name = pointer.attributes.name.value;
            const target = pointer.attributes.target.value;
            const sliders = document.querySelector(`.slider-container[name=${name}] .sliders`);


            sliders.attributes.slide.value = target;

            disablePointers(name)

            pointer.classList.add('active')

        })
    })
})

function disablePointers(name){

    const SameNamePointers = document.querySelectorAll(`.pointer[name=${name}]`);

    SameNamePointers.forEach(pointer =>{
        pointer.classList.remove('active')
    });
}

function activePointers(pointers){
    pointers.forEach(pointer => {
        pointer.classList.add('active')
    })
}