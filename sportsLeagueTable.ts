const numberOfTeams = 6;

const games = [
  [0, 5, 1, 1], // Team 0 - Team 5 => 1:1
  [1, 4, 3, 1], // Team 1 - Team 4 => 3:1
  [2, 3, 2, 2], // Team 2 - Team 3 => 2:2
  [1, 5, 1, 2], // Team 1 - Team 5 => 1:2
  [2, 0, 1, 1], // Team 2 - Team 0 => 1:1
  [3, 4, 3, 2], // Team 3 - Team 4 => 3:2
  [2, 5, 3, 1], // Team 2 - Team 5 => 3:1
  [3, 1, 0, 1], // Team 3 - Team 1 => 0:1
  [4, 0, 2, 1], // Team 4 - Team 0 => 2:1
  [3, 5, 0, 0], // Team 3 - Team 5 => 0:0
  [4, 2, 0, 1], // Team 4 - Team 2 => 0:1
  [0, 1, 1, 2], // Team 0 - Team 1 => 1:2
  [4, 5, 2, 0], // Team 4 - Team 5 => 2:0
  [0, 3, 3, 2], // Team 0 - Team 3 => 3:2
  [1, 2, 0, 0], // Team 1 - Team 2 => 0:0
]; 


// i need to build an object where the key is a team and value is points earned from wins

type TeamRow = {
  id: number;
  teamName: string;
  points: [ scored: number, allowed: number];
  
}