import React from 'react';

import ExternalButton from '../../components/ExternalButton.js'
import Header from '../../components/Header.js'

import './Grading.css';

function Grading() {
  return (
      <div class="grading">
            <div class="header-container">
                <h1> Grading </h1>
            </div>
            <div class="text-container">
                <h2> Lecture Attendance (45%) </h2>
                <p> This class will be impossible to succeed in without active participation in class and 
                    attendance to learn the material. It will be a very laid-back and open atmosphere so students should 
                    be encouraged to discuss topics. </p>
                <ul> 
                    <li> Attending over 75% of lectures: 45% </li>
                    <li> Attending over 62.5% of lectures: 40%  </li>
                    <li> Attending over 50% of lectures: 35%  </li>
                    <li> Attendance below 50%: proportional to attendance. For example, 25% attendance earns 25% * 45%  = 11.25%.  </li>
                </ul>

                <h2> Playing Session Attendance (30%) </h2>
                <p> We will have short sessions after lecture where we will practice using play money. </p>
                <ul> 
                    <li> Attending over 75% of sessions: 30% </li>
                    <li> Attending over 62.5% of lectures: 26%  </li>
                    <li> Attending over 50% of lectures: 23%  </li>
                    <li> Attendance below 50%: proportional to attendance. For example, 25% attendance earns 25% * 30%  = 7.5%.  </li>
                </ul>

                <h2> Homework (20%) </h2>
                <p> Throughout the semester, there will be weekly assignments that should take at most an hour. 
                    Homework assignments will be graded entirely based on effort and completion, with examples given 
                    of what constitutes a reasonable effort.  
                </p>

                <h2> Final Project (5%) </h2>
                <p> The course will have a final assignment requiring you to analyze some of the hands that you 
                    played during sessions over the course of the semester. Similarly to the Homework, it will be graded 
                    based on effort and completion, with examples of hand analysis provided.  
                </p>
                <p>
                    In other words, if you attend a majority of lectures and playing sessions and complete a 
                    majority of assignments, you will pass the course. While not for a grade, we will also have short 
                    weekly reading assignments. Please contact us regarding time conflicts or needed accommodations 
                    for absences. We promise to be reasonable and do not want grades to be a concern for any student 
                    engaging with the course. 
                </p>

                <p style={{'height': '100px'}}> </p>

            </div>
      </div>
  );
}

export default Grading;
