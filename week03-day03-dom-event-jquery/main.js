console.log('in the main.js');

$(function(){
  console.log('DOM loaded (jQuery)');

  var newListItem = $( '<li>new item added by jQuery</li>').addClass( '.garish' );
  
  console.log()

});

document.addEventListener('DOMContentLoaded', function(){  //wait for DOM to be ready before running the JS
  console.log('DOM loaded -- other');
  console.log(document.body);




                        //when usig query you need the css versions of code to reference them
                        //this would not work without saying .selected
  var selectedListItems = document.querySelectorAll('.selected');
  console.log('selectedListItems:', selectedListItems);

  for (var i = 0; i < selectedListItems.length; i++){
    console.log('selectedListItemsStyle', selectedListItems[i].style);
    selectedListItems[i].style.color = 'red';//adds red to the third bullet point
  //goes through the li and picks the chosen element to modify

  }

  var newListItem = document.createElement('li'); //create the li element but it is not in the html code yet. it is just in the DOM

  newListItem.innerHTML = 'in New York'; //access the html via DOM
  newListItem.setAttribute('class', 'selected');//add the "selected" CSS class to newListItem


  var listContainer = document.getElementById('item-list'); //

  listContainer.appendChild(newListItem); //"add this to the li"


  console.log('------- DOM -------');
  var pickMeButton = document.getElementById('pickMeBtn');

  pickMeButton.addEventListener('click', function(){ //anonymous function
    alert('Picked!');

    pickMeButton.innerHTML = 'Clicked'; //allows the button text to be chamged via the DOM

  });



});

// var changedPickMeButton = document.getElementById('pickMeBtn');
//
// changedPickMeButton.addEventListener('click', function(){
//   alert('')
// });
