let onbtn = document.querySelector('.on');
let image = document.querySelector('.img');

onbtn.addEventListener('click', function(){
      image.src = "https://www.w3schools.com/Js/pic_bulbon.gif"
});

let offbtn = document.querySelector('.off');

offbtn.addEventListener('click', function(){

    image.src = "https://www.w3schools.com/Js/pic_bulboff.gif"
    
})




// let color = document.querySelector('#color');
// let change = document.querySelector('.change');

// change.addEventListener('click', function(){
//     alert(12)

// })
