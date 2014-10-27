var firstTime = 'Yes';
var i = 0;
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
	addToList(book, 'regular');
	reset();
}

function addToList(book , mode) {
		i=i+1;
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
		if (mode =='edit')
		{
			var bookNameDiv = document.createElement("input");
			bookNameDiv.type="text";
			bookNameDiv.value = book.bookName;
			var authorNameDiv = document.createElement("input");
			authorNameDiv.type="text";
			authorNameDiv.value = book.authorName;
			var scoreDiv = document.createElement("input");
			scoreDiv.type="text";
			scoreDiv.value = book.score;
		}
		else
		{
			var bookNameDiv = document.createElement("div");
			bookNameDiv.innerHtml = book.bookName;
			var authorNameDiv = document.createElement("div");
			authorNameDiv.innerHtml = book.authorName;
			var scoreDiv = document.createElement("div");
			scoreDiv.innerHtml = book.score;		
		}
		
		bookNameDiv.className = "left";
		authorNameDiv.className = "left";
		scoreDiv.className = "center";
		
		var xButton = document.createElement("button");
		xButton.innerHTML = "X";
		xButton.setAttribute("onclick", "resetLi(this)");
		xButton.setAttribute("id", "resetLi" + i );
		xButton.className = "right";
		
		var upButton = document.createElement("button");
		upButton.innerHTML = "Edit";
		upButton.setAttribute("onclick", "replaceInput(event)");
		upButton.setAttribute("id", "resetLi" + i );
		upButton.className = "left";

		newElement.appendChild(bookNameDiv);
		newElement.appendChild(authorNameDiv);
		newElement.appendChild(scoreDiv);
		newElement.appendChild(upButton);
		newElement.appendChild(xButton);
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
function resetLi(o)
{
o.parentElement.remove();
var ul = document.getElementById("bookList");
var btn = document.getElementById("resetL");
if (ul.innerHTML.trim() =='')
{
	btn.remove();

}
}
function replaceInput (e) 
{
divs = e.target.parentElemnt.childern();	
var bookName = divs[0].innerHtml;
var authorName = divs[1].innerHtml;
var score = divs[2].innerHtml;
var book = new Book(bookName, authorName, score);
e.target.parentElemnt.remove();	
addToList(book , 'edit');
}
