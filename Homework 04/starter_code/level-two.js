/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// STEP ONE: WE WANT TO BUILD A CLICK HANDLER THAT "LISTENS" FOR WHEN A USER CLICKS ON ONE OF THE THREE BALLS. CAN JS-ARENA CONTROL THE CLICK SIMILAR TO BALLEL IN LEVEL ONE?
    // YES & NO. YES, ARENA-EL CONTAINS ALL THE BALLS. ADD A FUNCTION THAT TARGETS ANY OF THEM, PERHAPS?
// STEP TWO: WE WANT EACH CLICK TO REPRESENT 10 POINTS 
// STEP THREE: WE WANT THE GAME TO CALL A WINNER AT 100 PPOINTS. SAME AS DECLARE WINNER FUNCTION IN LEVEL ONE

arenaEl.addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) {
      score += 10;
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else {
        declareWinner();
      }
    }
  })
  
  function declareWinner() {
    document.body.classList.add('game-over');
  }


