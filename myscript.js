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
	turn = 1;
}

restart.addEventListener('click',clearBoard);

// Check the square marker

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
}

for(let i=0;i<squares.length;i++)
{
     squares[i].addEventListener('click',changemarker); 
     checkWinner;
}


//checking winner
function checkWinner()
{
     if(squares[0]=='X')
          alert("Won");
}

// For loop to add event listeners to all the sqquares