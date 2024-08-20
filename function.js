const allSkeleton = document.querySelectorAll('.skeleton');
const breakTags = document.querySelectorAll('.break-tag-container');
const containers = document.querySelectorAll('.class-container')
const banner = document.querySelectorAll('.footer-banner-loading-container');
const learnMore = document.querySelectorAll('.learn-more-item');

window.addEventListener('load',function(){
    allSkeleton.forEach(item =>{
        item.classList.remove('skeleton');
    });
    breakTags.forEach(item =>{
        item.classList.remove('break-tag-container');
        });
    containers.forEach(item=>{
        item.classList.remove('class-container');
    });
    banner.forEach(item=>{
        item.classList.add('footer-banner-container');
    })
    learnMore.forEach(item =>{
        item.classList.remove('d-none');
        });
});


document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.main-image');
    const skeleton = document.querySelector('.skeleton');
    window.addEventListener('load',function(){
    image.onload = function() {
        //skeleton.style.display = 'none'; // Hide the skeleton
        image.classList.add('loaded'); // Show the image
    };
    
    image.src = image.src; 
});
});
