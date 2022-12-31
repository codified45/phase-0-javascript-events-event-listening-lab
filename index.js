
const input = document.getElementById('button');

function clickAlert() {
    alert('I was clicked!');
  }

function addingEventListener() {
      input.addEventListener('click', clickAlert);
}

addingEventListener();


// This is also ok but above is slightly better. Doesn't pass the learn test though because its looking for Adding not add

// input.addEventListener('click', function() {
//     alert('I was clicked');
// });
