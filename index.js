document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("banner-tablinks")[0].click();
});

function selectTab(evt, tabs) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("banner-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("banner-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" button-selected", "");
    }

    document.getElementById(tabs).style.display = "block";
    evt.currentTarget.className += " active";
}

function changeColor(id) {
    $("#"+id).css("background-color", "black");
    $("#"+id).css("color", "white");
}





// Trending indian section 

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icon i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);



document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("india-tablinks")[0].click();
});

function selectState(evt, stateName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("india-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("india-tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].className = tablinks[i].className.replace(" TID-button-selected", "");
    }

    document.getElementById(stateName).style.display = "block";
    evt.currentTarget.className += " active";
}


document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 
  
    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 
  
    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 
  
    const dragStart = (e) => {  
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 
  
    const dragging = (e) => { 
        if (!isDragging) return; 
      
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
      
        // Check if the new scroll position exceeds  
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >=  
            carousel.scrollWidth - carousel.offsetWidth) { 
              
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
      
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 
  
    const dragStop = () => { 
        isDragging = false;  
        carousel.classList.remove("dragging"); 
    }; 
  
    const autoPlay = () => { 
      
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return;  
          
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
          
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
          
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
    }; 
  
    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () =>  
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 
  
    // Add event listeners for the arrow buttons to  
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ?  
                -firstCardWidth : firstCardWidth; 
        }); 
    }); 
}); 

document.addEventListener("DOMContentLoaded", function() { 
  const carousel = document.querySelector(".carousel1"); 
  const arrowBtns = document.querySelectorAll(".wrapper1 i"); 
  const wrapper = document.querySelector(".wrapper1"); 

  const firstCard = carousel.querySelector(".card1"); 
  const firstCardWidth = firstCard.offsetWidth; 

  let isDragging = false, 
      startX, 
      startScrollLeft, 
      timeoutId; 

  const dragStart = (e) => {  
      isDragging = true; 
      carousel.classList.add("dragging"); 
      startX = e.pageX; 
      startScrollLeft = carousel.scrollLeft; 
  }; 

  const dragging = (e) => { 
      if (!isDragging) return; 
    
      // Calculate the new scroll position 
      const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
      // Check if the new scroll position exceeds  
      // the carousel boundaries 
      if (newScrollLeft <= 0 || newScrollLeft >=  
          carousel.scrollWidth - carousel.offsetWidth) { 
            
          // If so, prevent further dragging 
          isDragging = false; 
          return; 
      } 
    
      // Otherwise, update the scroll position of the carousel 
      carousel.scrollLeft = newScrollLeft; 
  }; 

  const dragStop = () => { 
      isDragging = false;  
      carousel.classList.remove("dragging"); 
  }; 

  const autoPlay = () => { 
    
      // Return if window is smaller than 800 
      if (window.innerWidth < 800) return;  
        
      // Calculate the total width of all cards 
      const totalCardWidth = carousel.scrollWidth; 
        
      // Calculate the maximum scroll position 
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
        
      // If the carousel is at the end, stop autoplay 
      if (carousel.scrollLeft >= maxScrollLeft) return; 
  }; 

  carousel.addEventListener("mousedown", dragStart); 
  carousel.addEventListener("mousemove", dragging); 
  document.addEventListener("mouseup", dragStop); 
  wrapper.addEventListener("mouseenter", () =>  
      clearTimeout(timeoutId)); 
  wrapper.addEventListener("mouseleave", autoPlay); 

  // Add event listeners for the arrow buttons to  
  // scroll the carousel left and right 
  arrowBtns.forEach(btn => { 
      btn.addEventListener("click", () => { 
          carousel.scrollLeft += btn.id === "left-icon" ?  
              -firstCardWidth : firstCardWidth; 
      }); 
  }); 
}); 

const allSkeleton = document.querySelectorAll('.skeleton')
const skeletonX = document.querySelectorAll('.skeleton-x');
const leftIcons = document.querySelectorAll('.fa-angle-left');
const rightIcons = document.querySelectorAll('.fa-angle-right');
const banner = document.querySelectorAll('.footer-banner-loading-container');
const learnMore = document.querySelectorAll('.learn-more-item');

window.addEventListener('load',function(){
    allSkeleton.forEach(item =>{
        item.classList.remove('skeleton');
    })
    skeletonX.forEach(item =>{
        item.classList.remove('skeleton-x');
    })
    leftIcons.forEach(icon => {
        icon.classList.remove('d-none');
    });
    rightIcons.forEach(icon => {
        icon.classList.remove('d-none');
    });
    banner.forEach(item=>{
        item.classList.add('footer-banner-container');
    })
    learnMore.forEach(item =>{
        item.classList.remove('d-none');
        });
});

document.addEventListener("DOMContentLoaded", function() {
    const backgroundImgElements = document.querySelectorAll('[data-bg-image]');
    
    window.addEventListener('load',function(){
    backgroundImgElements.forEach(element => {
        const imgSrc = element.getAttribute('data-bg-image');
        const img = new Image();

        img.src = imgSrc;

        img.onload = function() {
            element.style.backgroundImage = `url('${img.src}')`;
            element.classList.add('loaded');
        };
        img.onerror = function() {
            console.error(`Failed to load image at ${imgSrc}`);
        };
    });
    });
});
function navigateToPage() {
    window.location.href = "http://127.0.0.1:5500/function.html";
}




