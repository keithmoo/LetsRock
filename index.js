
function letsRock() {
  RPS();
  resolve();
  thereWasATie();
  winThroughLosing();
}

function RPS(){
  $('main').html(
    `
      <form>
      <legend>Rock, Paper, Or Scissors?</legend><br/>
      <input type="radio" id="rock" name="Choice" value="rock">
      <label for="Choice1"><img src='rock.png' alt='pickMe'></label><br/>
      <input type="radio" id="paper" name="Choice" value="paper">
      <label for="Choice2"><img src='paper.png' alt='DoNotPickMe'></label><br/>
      <input type="radio" id="scissors" name="Choice" value="scissors">
      <label for="Choice3"><img src='scissors.png' alt='IAmPickingThis'></label><br/>
      <button id="submitForm">Submit</button>
      </form>
    `
  )
}

function resolve(){
  $('main').on('click', '#submitForm', event => {
    event.preventDefault();
    console.log('resolved')
    let selectedOption = $('input[name=Choice]:checked').val();
    console.log(selectedOption)
    if (selectedOption === 'rock') {
      victory();
    }
    else if (selectedOption === 'scissors') {
      draw();
    }
    else {
      fail();
    }
  }
  );
}

function victory() {
  $('main').html(
    `
    <p>You threw:</p>
    <div class='pick'>
    <img src='rock.png' alt='yeahDude'>
    </div>
    <p>Opponent threw:</p>
    <div class='scissorPick'>
    <img src='scissors.png' alt='ISaidLetsRockAndPickedScissors'>
    </div>
    <div class='winner'>
    <h3>To The Victor Go The Spoils</h3>
    <p>  I hope to give you everything 
    so that I may have nothing should I be forced 
    to stand against you.</p>
    <div class='writeUp'>
    <p>Kerplunking Strikes: At the start of initiative, you may choose to use this 
    martial arts technique this round.  If you do so, roll a dN where N is the 
    current amount of ki in your ki pool.  If you do not roll an N, gain +2 to 
    all damage this round.  You may then go double or nothing and roll again.  
    You cannot continue past double or nothing.  If you do roll an N, your chakras 
    all open at once; empty your ki pool and gain 2N temp ki that last until the 
    end of the round.  You cannot go double or nothing on a roll of N.</p>
    
    <p>
    1/t: Don't Spill The Ki: If an effect sets your Ki to 0, remain at 1 Ki instead.
    // (The effect still resolves normally.  This won't work for an effect that 
    costs 3 ki while you have 3 ki currently in your pool, but does work for an 
    effect that specifically costs "all remaining ki" or an enemy effect that 
    specifically removes all remaining ki)
    </p>
    </div>
    </div>
    `
  );
}

function draw() {
  $('main').html(
    `
    <p>You threw:</p>
    <div class='pick'>
    <img src='scissors.png' alt='doh'>
    </div>
    <p>Opponent threw:</p>
    <div class='scissorPick'>
    <img src='scissors.png' alt='ISaidLetsRockAndPickedScissors'>
    </div>
    <p>You really are me...</p>
    <button id='tryAgain'>Tie Breaker</button>
    `
  );
}

function fail() {
  $('main').html(
    `
    <p>You threw:</p>
    <div class='pick'>
    <img src='paper.png' alt='whyyyyyyy'>
    </div>
    <p>Opponent threw:</p>
    <div class='scissorPick'>
    <img src='scissors.png' alt='ISaidLetsRockAndPickedScissors'>
    </div>
    <p>I sacrificed everything to have another chance through you.  You sure do make things 
    difficult.</p>
    <button id='winInstead'>*Attacks The Past To Have You Win Instead*</button>
    `
  );
}

function winThroughLosing() {
  $('main').on('click', '#winInstead', event => {
    event.preventDefault();
    victory();
  }
  );}

function thereWasATie() {
  $('main').on('click', '#tryAgain', event => {
    event.preventDefault();
    RPS();
  }
  );}

$(letsRock)