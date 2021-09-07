import React from 'react';

import LandingButton from './../../components/LandingButton.js'
import Header from './../../components/Header.js'

import './Landing.css';

function Landing() {
  return (
      <div class="landing">
          <div class="photo">
            <img class="photo" src="https://i.pinimg.com/originals/e1/48/3c/e1483c7b75c486d124d9d1f1a70ea429.png" alt="flush"/>
          </div>

          <div class="text-container">
            <h1> STAT 198 </h1>
            <h2> Introduction to Poker </h2>

            <div style={{height: '40px'}} />

            <p><b>Instructors: </b> Kevin An, Aidan Reilly</p>

            <h3>Lectures</h3>
            <ul>
                <li>Mondays, 7PM – 8PM</li>
                <li>Wednesdays, 7PM – 8PM</li>
            </ul>

            <h3>Playing Sessions</h3>
            <ul>
                <li>Mondays, 8PM – 9PM</li>
                <li>Wednesdays, 8PM – 9PM</li>
            </ul>

            <div style={{height: '40px'}} />

            <h3>Course Description</h3>
            <p>The purpose of this course is to teach students poker fundamentals, both to help them improve at the game and learn wider applications of the game theory found in poker. While we believe students of all skill levels will benefit from the course, it is primarily targeted at beginners and those with an advanced understanding of the game may already be familiar with most material.</p>
            <p>The course will focus on 6-max No Limit Texas Hold’em, the most popular variant of Poker played today. We will begin by covering the rules of the game, basic strategic principles, before diving into the mathematics and heuristics used by strong players. While not the focus of the course, we will additionally briefly touch on the psychological aspects of poker, including some common tells and reads found in live play. Specific topics will include (but are not limited to): Position, Preflop Ranges, Pot Odds, Equity, Bankroll Management, Blocker Effects, Polarization, Exploitative Adjustments, Tells.</p>
            <p>Learning poker theory is beneficial for reasons outside of improving at the game. Thinking about decisions in terms of their expected value while minimizing variance is a valuable skill with many applications in statistics, mathematics, game theory, economics, investing and finance.</p>
            <p>Poker skill is highly valued by many financial firms, with relevant material often appearing on interviews and books on poker theory often finding their way on to the reading list for new hires. Carnegie Mellon and Facebook have put major effort (and have succeeded) into creating Superhuman Poker AI due to far reaching applications to other imperfect information systems. While we will focus solely on poker itself, a strong understanding of poker remains very useful off the table.</p>

            <div style={{height: '40px'}} />

            <h3>Prerequisites</h3>
            <p>For success in this course, it is recommended that you have completed a lower division probability course (STAT 20/STAT 21/STAT 88/UGBA 88) as there will be many fundamental statistical concepts covered. If you have not taken any of these classes before, you are still welcome to take the course, but be aware you may find some of the material more difficult.
            To succeed in this course, students must come with an open mind and willingness to learn. The only way to improve at poker is through focused play and study.</p>

            <div style={{height: '40px'}} />

            <h3>Objectives</h3>
            <ol>
                <li>Understanding the rules of poker</li>
                <li>Understand basic and advanced poker concepts</li>
                <li>Understand more general strategic principles found in imperfect information games</li>
                <li>Be able to use an understanding of poker strategy to play a fundamentally sound game</li>
                <li>Understand Expected Value and Variance and how they apply to other disciplines, including game theory, probability, finance</li>
            </ol>

            <div style={{height: '40px'}} />

            <table>
                <thead>
                    <tr>
                    <th></th>
                    <th>Topic</th>
                    <th>Lectures</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Introduction to Poker</td>
                        <td>Course Expectations, Rules of Poker, Poker Terminology, Common Misconceptions, How to Properly Study and Improve</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Introduction to Poker</td>
                        <td>
                            <p>Introduction to Expected Value, Edge in Poker, Rock Paper Scissors, Strategic Principles & Game Theory Optimal Play</p>
                            <p><b>Reading: </b> How to Study Poker</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Introduction to Theory</td>
                        <td>
                            <p>Variance and Bankroll Management, Positional Advantage, Hand Ranges, Rating Hands Preflop</p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Introduction to Theory</td>
                        <td>
                            <p>Introduction to Ranges, Reasons for Open Raising from Each Position, Range Charts & Dynamic Adjustments</p>
                            <p><b>Reading: </b> More on Ranges in Poker</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Preflop Play</td>
                        <td>
                            <p>Why Not to Limp & How to Exploit Limpers, Required Fold Equity, The ISO Triangle and Sizing, Pot Odds & Implied Odds</p>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Preflop Play</td>
                        <td>
                            <p>Fold Equity continued, Introduction to 3-betting and 4-betting, Reasons to 3 and 4-Bet, Range Charts</p>
                            <p><b>Reading: </b> Mathematics of Betting and Pot Odds</p>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Continuation Betting</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Value Betting</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Value & Continutation Betting</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Value & Continutation Betting (continued)</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Facing Bets</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>3 Betting</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Buffing on Later Streets</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>3-Bet Pots and Stack Depth</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Course End</td>
                        <td>Concluding Examples, Reads, Tells, Poker Psychology, Mental Game</td>
                    </tr>
                </tbody>
            </table>

            <div style={{height: '100px'}} />

        </div>
      </div>
  );
}

export default Landing;
