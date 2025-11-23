🏏 CricScore - Virtual Cricket Scorecard

CricScore is a fully functional, browser-based cricket scoring prototype designed to track matches ball-by-ball. It provides a seamless interface for managing teams, tracking live scores, calculating run rates, and generating detailed innings summaries without the need for a backend server.

🚀 Features

Match Setup: Configure team names and match duration (number of overs).

Squad Management: Input names for playing 11s and select the batting team.

Live Scoring Interface:

Ball-by-ball run tracking (0-7 runs).

Extras handling (Wides, No Balls).

Wicket management with new batsman prompts.

Strike Rotation: Automatic strike rotation on odd runs and over completion.

Real-time Statistics:

Current Score & Overs.

CRR (Current Run Rate) calculation.

RRR (Required Run Rate) calculation during the 2nd innings chase.

Projected Score estimation.

Undo Functionality: Mistake correction logic to revert the last ball's data.

State Persistence: Uses localStorage to save match progress, allowing page reloads without data loss.

Comprehensive Summaries:

Innings Summary: Detailed batting and bowling scorecards after the 1st innings.

Match Summary: Side-by-side comparison of both innings with a final result banner (e.g., "Team A won by 4 wickets").

🛠️ Tech Stack

HTML5: Semantic structure for application pages.

CSS3: Custom styling with responsive design, flexbox layouts, and gradient aesthetics.

JavaScript (ES6+): Core logic for scoring, DOM manipulation, and local storage management.

📂 Project Structure

├── index.html            # Match Setup (Team names & Overs)
├── page2.html            # Player Entry & Toss
├── score.html            # 1st Innings Scoreboard
├── score2.html           # 2nd Innings Scoreboard (Chase Logic)
├── innings_summary.html  # Mid-match summary
├── match_summary.html    # Final match result & combined scorecards
├── style.css             # Global styling sheet
└── script.js             # Application logic & state management


📸 Screenshots

<!-- Upload your screenshots to your repo and link them here -->

Match Setup

Live Scoreboard

Match Summary







🏁 How to Run / Live Demo

The website is fully deployed and ready to use. You can access the live version here:

👉 crickscoremmcoe.netlify.app

🧩 Logic Overview

State Management

The application uses the browser's localStorage to maintain the "Match State". This includes:

teamScore: Runs, wickets, balls, overs.

matchStats: Individual player stats (runs scored, balls faced, wickets taken, economy).

matchState: Current Striker, Non-Striker, and Bowler.

Chase Logic

In the second innings (score2.html), the app automatically calculates the target based on the first innings score. It introduces the Required Run Rate (RRR) logic to assist the chasing team in tracking their progress against the target.

🤝 Contributing

Contributions are welcome! If you have ideas for improvements (e.g., wagon wheels, ball-by-ball commentary logs), feel free to fork the repo and submit a pull request.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License

Distributed under the MIT License. See LICENSE for more information.

Created with ❤️ for Cricket Fans.
