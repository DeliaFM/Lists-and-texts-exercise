$(document).ready(function() {
  console.log("ready!");

// Exercise 1

let nameArray = ['Jakub', 'Simon', 'Sofie', 'Delia'];

$('ul').attr('id', 'itemList');

let ul = $('#itemList');
nameArray.forEach(function (item) {
  ul.append($('<li></li>').text(item));
});

$('itemList').html(ul);

$("ul li").last().css("font-weight", "bold");


// Exercise 2 
let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};

let newHeading = document.createElement("h2");
$(newHeading).append(additionalBlock.title);

let newParagraph = document.createElement("p");
$(newParagraph).append(additionalBlock.text);

$("body").append(newHeading, newParagraph);


});


/*
Exercise 1
- Get your solution of the fourth exercise from the html day
- Create and include a scripts.js file just like before
- Create an array with random names and yours
- Using forEach to add each name to the <ul> list
      DOM solution: 
      nameArray.forEach(function(item) {
          let li = document.createElement("li");
          let xName = document.createTextNode(item);
          li.appendChild(xName);
          document.getElementById('itemList').appendChild(li);
      });

- (Optional) Your name should be bold

Exercise 2
- Work with the same files as in the previous exercise

Create this object:
  let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

- Add a new block at the end of the page, the title should be in a heading, the text should be in a paragraph block
*/