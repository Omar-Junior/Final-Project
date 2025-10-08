import React from 'react'
import "./History.css"
import f1 from "../../assets/f1.avif";
import images from '../../assets/images.png'
import teams from '../../assets/teams.jpg'



export default function 
() {
  return (
    <>
<style>
</style>
        <br />
        <div className="history">
            <h1>Everything You Need to Know About Formula 1</h1>
            <br />
            <h2>What Is Formula 1?</h2>
            <p>As the highest class of international racing for single-seater formula racing cars, Formula 1 is the pinnacle of motorsport and the world’s most prestigious motor racing competition. There really is nothing like it.
It’s a team sport (it needs to be to change all four tyres on a car in under two seconds!), though the drivers are more like fighter pilots than sportspeople. Battling extreme g-forces, making daring decisions in the blink of an eye – and at more than 370kph (230mph). To be the best, F1 drivers push themselves – and their incredibly innovative machines – to the very limit.
Drivers compete for the esteemed F1 Drivers’ Championship, while the teams fight for the F1 Teams’ Championship and prize money based on their position at the end of the season.
Each race is known as a Grand Prix, and they’re held in incredible locations around the world. The 2025 Formula 1 calendar – a year that marks the 75th anniversary of the FIA Formula 1 World Championship – features 24 Grand Prix weekends, which include six F1 Sprint races, taking place from March through December.</p>
            <img className="f1" src={f1}/>
            <br />
            <h2>How many drivers and teams race in F1?</h2>
            <p>A total of 10 teams and 20 drivers from around the world make up the current Formula 1 grid, with each squad fielding two cars.
Driver experience ranges from multiple World Champions like Lewis Hamilton, Max Verstappen and Fernando Alonso, to rookie racers in their first full-time F1 seasons such as Kimi Antonelli, Oliver Bearman and Gabriel Bortoleto.
When it comes to teams, there are those who have been in Formula 1 since the early years, such as Ferrari (competing continuously since the very first season in 1950) and McLaren, and relative newcomers like Haas who entered the sport ahead of the 2016 season.</p>
            <img className="teams" src={teams}/>
            <h2>When did Formula 1 start?</h2>
            <p>Formula 1 was formed as a World Championship competition back in 1950, with the first-ever race held at the Silverstone Circuit – a former Royal Air Force station – in the United Kingdom on May 13 of that year.
Six more events were staged in a season which saw Alfa Romeo driver Giuseppe ‘Nino’ Farina become the sport’s first World Champion – edging out team mates Juan Manuel Fangio and Luigi Fagioli.
While motorsport had been taking place since the late-1800s, with Grand Prix events growing in popularity across the following decades, 1950 marked the start of the official F1 championship that remains to this day.</p>
            <img className="images" src={images} alt="" />
        </div>
    </>
  )
}
