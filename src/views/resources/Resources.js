import React from 'react';

import ExternalButton from '../../components/ExternalButton.js'
import Header from '../../components/Header.js'

import './Resources.css';

function Resources() {
  return (
      <div class="resources">
            <div class="header-container">
                <h1> Resources </h1>
            </div>
            <div class="text-container">
                <p> While our course will not be working directly from any textbook, we highly recommend the 
following books for students looking to study outside of the class:  </p>
                <ul> 
                    <li> <i> The Theory of Poker </i> by David Sklanksy </li>
                    <li> <i> The Grinder’s Manual </i> by Peter Clarke </li>
                    <li> <i> The Mathematics of Poker </i> by Bill Chen and Jerrod Ankenman </li>
                    <li> <i> Modern Poker Theory </i> by Michael Acevedo </li>
                </ul>

                <p style={{'height': '15px'}}> </p>
                <p> Material for the weekly readings will be regularly pulled from/inspired by these sources. We 
will be playing all of our practice sessions on the website pokernow.club. As we will be studying the 
game primarily from a mathematical perspective, we strongly encourage that students download the 
following chrome extension which will track player statistics and be helpful in finding and fixing weaknesses: </p>

            </div>
            <div class="button-container">
            <ExternalButton link="https://chrome.google.com/webstore/detail/pokernowhud/cfollcpmoefbhkckhkmhlapkfnicljeh?hl
=e n-US" text="Pokernow HUD"/>
            </div>
      </div>
  );
}

export default Resources;
