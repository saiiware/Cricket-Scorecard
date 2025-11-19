// Wait for the HTML document to be fully loaded before running any script
document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    //              INDEX PAGE LOGIC
    // ==========================================
    
    // Find the "Next" button from INDEX PAGE
    // (Make sure your HTML button has id="next-button-page1")
    const page1NextButton = document.getElementById("next-button-page1");

    // This 'if' block ensures this code ONLY runs on Page 1
    if (page1NextButton) {
        
        page1NextButton.addEventListener("click", function(event) {
            // Prevent default form submission if it's inside a form tag
            event.preventDefault(); 
            
            // 1. Get the values from the input fields
            const team1Name = document.getElementById("team1-name").value;
            const team2Name = document.getElementById("team2-name").value;
            const numOvers = document.getElementById("num-overs").value;

            // 2. Simple validation
            if (!team1Name || !team2Name || !numOvers) {
                alert("Please fill in all team names and the number of overs.");
                return; // Stop the function if fields are empty
            }

            // 3. Store the values in localStorage
            localStorage.setItem("team1Name", team1Name);
            localStorage.setItem("team2Name", team2Name);
            localStorage.setItem("numOvers", numOvers);
            
            // 4. Redirect to Page 2
            window.location.href = "page2.html";
        });
    }


    // ==========================================
    //               PAGE 2 LOGIC
    // ==========================================

    // Find the dropdown unique to Page 2
    const battingDropdown = document.getElementById("batting-team-dropdown");

    // This 'if' block ensures this code ONLY runs on Page 2
    if (battingDropdown) {

        // --- 1. POPULATE DROPDOWN & LABELS ---
        const storedTeam1 = localStorage.getItem("team1Name");
        const storedTeam2 = localStorage.getItem("team2Name");

        // Find the options to update their text
        const team1Option = battingDropdown.querySelector("option[value='team1']");
        const team2Option = battingDropdown.querySelector("option[value='team2']");

        // Update the text if we have data
        if (storedTeam1 && team1Option) team1Option.textContent = storedTeam1;
        if (storedTeam2 && team2Option) team2Option.textContent = storedTeam2;


        // --- 2. BACK BUTTON LOGIC ---
        const backButton = document.getElementById("back-button");
        if (backButton) {
            backButton.addEventListener("click", function(event) {
                event.preventDefault();
                // Go back to Page 1
                window.location.href = "index.html";
            });
        }


        // --- 3. NEXT BUTTON LOGIC (Validation & Saving) ---
        const page2NextButton = document.getElementById("page2-next-button");

        if (page2NextButton) {
            page2NextButton.addEventListener("click", function(event) {
                event.preventDefault();

                let team1Players = [];
                let team2Players = [];
                let allFieldsFilled = true;

                // A. Collect & Validate Team 1 (IDs: Player1 to Player11)
                for (let i = 1; i <= 11; i++) {
                    let input = document.getElementById(`Player${i}`);
                    if (!input || input.value.trim() === "") {
                        allFieldsFilled = false;
                    } else {
                        input.style.border = ""; // Remove highlight if fixed
                        team1Players.push(input.value.trim());
                    }
                }

                // B. Collect & Validate Team 2 (IDs: t2-player1 to t2-player11)
                // Note: I used 't2-player' ID pattern in the HTML below to avoid duplicate IDs
                for (let i = 1; i <= 11; i++) {
                    let input = document.getElementById(`t2-player${i}`);
                    if (!input || input.value.trim() === "") {
                        allFieldsFilled = false;
                    } else {
                        input.style.border = "";
                        team2Players.push(input.value.trim());
                    }
                }

                // C. Validate Dropdown Selection
                if (battingDropdown.value === "default") {
                    allFieldsFilled = false;
                } else {
                    battingDropdown.style.border = "";
                }

                // D. Final Check
                if (!allFieldsFilled) {
                    alert("Please fill in ALL player names and select the batting team.");
                } else {
                    // Save Arrays to LocalStorage (must use JSON.stringify for arrays)
                    localStorage.setItem("team1Players", JSON.stringify(team1Players));
                    localStorage.setItem("team2Players", JSON.stringify(team2Players));

                    // Determine actual batting team name
                    let battingTeamName = (battingDropdown.value === "team1") ? storedTeam1 : storedTeam2;
                    localStorage.setItem("battingTeam", battingTeamName);

                    // Redirect to Page 3
                    window.location.href = "score.html";
                }
            });
        }
    }

});


// --- PAGE 3 LOGIC ---
const matchHeader = document.getElementById("match-header");

if (matchHeader) {
    const t1 = localStorage.getItem("team1Name") || "Team 1";
    const t2 = localStorage.getItem("team2Name") || "Team 2";
    matchHeader.textContent = `${t1} VS ${t2}`;
}
const score = {
    runs: 0,
    wickets: 0,
    lastResult: 0,
    fullover: 0,
    balls: 0,
    overs: 0
};

function updateScore(result) //Function to update the score
{
    if(result === 0)
    {
        score.runs+=0;
        score.lastResult=0;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 1)
    {
        score.runs++;
        score.lastResult=1;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 2)
    {
        score.runs+=2;
        score.lastResult=2;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 3)
    {
        score.runs+=3;
        score.lastResult=3;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 4)
    {
        score.runs+=4;
        score.lastResult=4;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 5)
    {
        score.runs+=5;
        score.lastResult=5;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 6)
    {
        score.runs+=6;
        score.lastResult=6;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 7)
    {
        score.runs+=7;
        score.lastResult=7;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 'W')
    {
        score.wickets++;
        score.lastResult='W';
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 'WD')
    {
        score.runs++;
        score.lastResult='WD';
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
        
    }
    else if(result === 'NB')
    {
        score.runs++;
        score.lastResult = 'NB'
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }


    
}

function resetScore() //Function to reset score to 0/0
{
    score.runs = 0;
    score.wickets = 0;
    score.balls = 0;
    score.fullover = 0;
    score.overs = 0;
    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}

function undoScore(lr) //Function to undo last selection
{
    if(lr === 0)
    {
        score.runs-=0;;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
        
    }
    else if(lr === 1)
    {
        score.runs--;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 2)
    {
        score.runs-=2;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 3)
    {
        score.runs-=3;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 4)
    {
        score.runs-=4;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 5)
    {
        score.runs-=5;
    }
    else if(lr === 6)
    {
        score.runs-=6;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 7)
    {
        score.runs-=7; 
    }
    else if(lr === 'W')
    {
        score.wickets--;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 'WD')
    {
        score.runs--;
    }
    else if(lr === 'NB')
    {
        score.runs--;
    }

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}

