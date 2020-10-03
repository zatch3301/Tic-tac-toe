<<<<<<< HEAD

=======
>>>>>>> upstream/master
// Restart Game Button
console.log('connected');
var restart = document.querySelector('#b');

// Grabs all the squares
var squares = document.querySelectorAll('td');

//turn to determine whether X or O is added next
var turn = 1;

// Clear all the squares
function clearBoard()
{
	// body...
     for (var i = 0; i < squares.length; i++)
     {
		squares[i].textContent = '\u00A0';
	}
<<<<<<< HEAD
	console.log(squares)
	
=======
	turn = 1;
>>>>>>> upstream/master
}

restart.addEventListener('click',clearBoard);

// Check the square marker

<<<<<<< HEAD
function changemarker(){
	if(this.textContent===''){
		this.textContent='❌';
	}else if(this.textContent==='❌'){
		this.textContent='⭕';
	}else{
		this.textContent='';
	}
=======
function changemarker()
{
     if((this.textContent!='X')&&(this.textContent!='O'))
     {
          if(turn%2!=0)
          {
               this.textContent='X';
               turn++;
          }
          else
          {
               this.textContent='O';
               turn++; 
          }
     }
     checkWinner();
>>>>>>> upstream/master
}

for(let i=0;i<squares.length;i++)
{
     squares[i].addEventListener('click', changemarker); 
}


//checking the winner 
function checkWinner()
{
     if((squares[0].textContent=='X')&&(squares[1].textContent=='X')&&(squares[2].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
          
     else if((squares[0].textContent=='O')&&(squares[1].textContent=='O')&&(squares[2].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[3].textContent=='X')&&(squares[4].textContent=='X')&&(squares[5].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();    
     }
     else if((squares[3].textContent=='O')&&(squares[4].textContent=='O')&&(squares[5].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[6].textContent=='X')&&(squares[7].textContent=='X')&&(squares[8].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[6].textContent=='O')&&(squares[7].textContent=='O')&&(squares[8].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='X')&&(squares[3].textContent=='X')&&(squares[6].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='O')&&(squares[3].textContent=='O')&&(squares[6].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[1].textContent=='X')&&(squares[4].textContent=='X')&&(squares[7].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[1].textContent=='O')&&(squares[4].textContent=='O')&&(squares[7].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='X')&&(squares[5].textContent=='X')&&(squares[8].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='O')&&(squares[5].textContent=='O')&&(squares[8].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='X')&&(squares[4].textContent=='X')&&(squares[8].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();    
     }
     else if((squares[0].textContent=='O')&&(squares[4].textContent=='O')&&(squares[8].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='X')&&(squares[4].textContent=='X')&&(squares[6].textContent=='X'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='O')&&(squares[4].textContent=='O')&&(squares[6].textContent=='O'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
}

// For loop to add event listeners to all the sqquares