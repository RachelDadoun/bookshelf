var firstTime = 'Yes';
function Book (bookName, authorName, score) {
	this.bookName = bookName;
	this.authorName = authorName;
	this.score = score;
};


function reset(){
	document.getElementById('bookName').value = "";
	document.getElementById('authorName').value = "";
	document.getElementById('score').value = "";
}

function addBook(){
	var intScore = parseInt(document.getElementById('score').value);
	if ((document.getElementById('bookName').value == '') ||
	     (document.getElementById('authorName').value == '') ||
		 (document.getElementById('score').value == ''))
	{
	  alert("Please enter required fields");
	  return;
	}
	if (!(isNaN(intScore)))
	{
	  if  ((intScore < 0 )  ||
	        (intScore > 10 ) )
	  {
	  alert ("Score should be number between 1 - 10");
	  return;
	  }
	}
	else
	{
	  alert ("Score should be number between 1 - 10");
	  return;

	}
	var bookName = document.getElementById('bookName').value;
	var authorName = document.getElementById('authorName').value;
	var score = document.getElementById('score').value;
	var book = new Book(bookName, authorName, score);
	addToList(book);
	reset();
}

function addToList(book) {
		if (firstTime == 'Yes')
		{
			var newButton = document.createElement("button");
			newButton.innerHTML ="Reset fields";
			newButton.onclick = resetList;
			newButton.setAttribute("id", "resetL");
			firstTime = 'No';
			var tit = document.getElementById("title");
			tit.appendChild(newButton);
		}
		var newElement = document.createElement("li");
		var bookNameDiv = document.createElement("div");
		bookNameDiv.innerHTML = book.bookName;
		bookNameDiv.className = "left";
		var authorNameDiv = document.createElement("div");
		authorNameDiv.innerHTML = book.authorName;
		authorNameDiv.className = "center";
		var scoreDiv = document.createElement("div");
		scoreDiv.innerHTML = book.score;
		scoreDiv.className = "right";
		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		var ul = document.getElementById("bookList");
		ul.appendChild(newElement);
}
function resetList()
{
	var btn = document.getElementById("resetL");
	var ul = document.getElementById("bookList");
	btn.parentNode.removeChild(btn);
	ul.innerHTML = ' ';
	
}
