const photo = document.getElementById('photo');
const destello = document.getElementById('destello');

photo.addEventListener('click', () =>{
  if (destello.style.visibility === "visible"){
    destello.style.visibility = "hidden";
  } else {
    destello.style.visibility = "visible";
  }
  

});

