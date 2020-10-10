// Restart Game Button
console.log('connected');
var restart = document.querySelector('#b');

// Grabs all the squares
var squares = document.querySelectorAll('td');

//turn to determine whether ❌ or ⭕ is added next
var turn = 1;

// Clear all the squares
function clearBoard()
{
	// body...
     for (var i = 0; i < squares.length; i++)
     {
		squares[i].textContent = '\u00A0';
	}
	turn = 1;
}

restart.addEventListener('click',clearBoard);

// Check the square marker

function changemarker()
{
     if((this.textContent!='❌')&&(this.textContent!='⭕'))
     {
          if(turn%2!=0)
          {
               this.textContent='❌';
               turn++;
          }
          else
          {
               this.textContent='⭕';
               turn++; 
          }
     }
     checkWinner();
     checkDraw();
}

for(let i=0;i<squares.length;i++)
{
     squares[i].addEventListener('click', changemarker); 
}


//checking the winner 
function checkWinner()
{
     if((squares[0].textContent=='❌')&&(squares[1].textContent=='❌')&&(squares[2].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
          
     else if((squares[0].textContent=='⭕')&&(squares[1].textContent=='⭕')&&(squares[2].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[3].textContent=='❌')&&(squares[4].textContent=='❌')&&(squares[5].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();    
     }
     else if((squares[3].textContent=='⭕')&&(squares[4].textContent=='⭕')&&(squares[5].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[6].textContent=='❌')&&(squares[7].textContent=='❌')&&(squares[8].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[6].textContent=='⭕')&&(squares[7].textContent=='⭕')&&(squares[8].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='❌')&&(squares[3].textContent=='❌')&&(squares[6].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='⭕')&&(squares[3].textContent=='⭕')&&(squares[6].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[1].textContent=='❌')&&(squares[4].textContent=='❌')&&(squares[7].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[1].textContent=='⭕')&&(squares[4].textContent=='⭕')&&(squares[7].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='❌')&&(squares[5].textContent=='❌')&&(squares[8].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='⭕')&&(squares[5].textContent=='⭕')&&(squares[8].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[0].textContent=='❌')&&(squares[4].textContent=='❌')&&(squares[8].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();    
     }
     else if((squares[0].textContent=='⭕')&&(squares[4].textContent=='⭕')&&(squares[8].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='❌')&&(squares[4].textContent=='❌')&&(squares[6].textContent=='❌'))
     {
          alert("Player 1 Won");
          clearBoard();
     }
     else if((squares[2].textContent=='⭕')&&(squares[4].textContent=='⭕')&&(squares[6].textContent=='⭕'))
     {
          alert("Player 2 Won");
          clearBoard();
     }
}

let draw = 0;

function checkDraw()
{
     draw = 0;
     for(let k=0;k<squares.length;k++)
     {
          if((squares[k].textContent=='❌')||(squares[k].textContent=='⭕'))
          {
               draw++;
          }
     }
     if(draw==9)
     {
          alert("It's a Draw");
          clearBoard();
     }
}

// For loop to add event listeners to all the sqquares

