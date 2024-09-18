let togglebox = document.querySelector("#opened"); // box
let head = document.querySelector("#openedhead"); // title and img
let body = document.querySelector("#openedbody"); // ul content
let openclose = document.querySelector('#openclose'); // button container

body.innerHTML=`
         <ul>
              <li class="topone">Explore the world of management</li>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
            </ul>
        `
openclose.innerHTML = `<img width="40px" class="open" src="assets/close arrow.png" alt="">`;
openclose.addEventListener("click", () => {
    if (togglebox.classList.contains('sidebarleft')) {
        // If it's currently open, close it
        togglebox.classList.remove('sidebarleft');
        togglebox.classList.add('closedleft');
        
        head.classList.remove('head');
        head.classList.add('closedhead');
        
        body.classList.remove('body');
        body.classList.add('closedbody');
        body.innerHTML=`<div class="number">1</div>`
        openclose.innerHTML = `<img width="40px" class="close" src="assets/right.png" alt="">`;
    } else {
        // If it's currently closed, open it
        togglebox.classList.remove('closedleft');
        togglebox.classList.add('sidebarleft');
        
        head.classList.remove('closedhead');
        head.classList.add('head');
        
        body.classList.remove('closedbody');
        body.classList.add('body');
        body.innerHTML=`
         <ul>
              <li class="topone">Explore the world of management</li>
            <li>Technical Project Management</li>
            <li>Threadbuild</li>
            <li>Structure your pointers</li>
            <li>4SA Method</li>
            </ul>
        `
        openclose.innerHTML = `<img width="40px" class="open" src="assets/close arrow.png" alt="">`;
    }

    console.log('clicked');
});

// if (head.classList.contains('head')) {
//     openclose.innerHTML = `<img width="40px" class="open" src="assets/close arrow.png" alt="">`;
// } else if(head.classList.contains('closedhead')) {
//     openclose.innerHTML = `<img width="40px" class="close" src="assets/right.png" alt="">`;
// }
