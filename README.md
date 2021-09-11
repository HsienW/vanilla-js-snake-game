# Vanilla JS Snake Game

- Vanilla JS practise
- Design Pattern practise

## Getting start
```
cd vanilla-js-snake-game
npm install
npm start 
click start button
```

## Development
- Run `npm start` for a dev server. Navigate to `http://localhost:8080`

## Game rule
![image](https://user-images.githubusercontent.com/20525933/132933824-1c4b95b5-2d8f-46ab-9996-38121f5935c2.png)

- The team is divided into red and blue
- The snake of the blue team use the up, down, left and right of the keyboard to control the direction
- The snake of the red team uses the keyboard W, S, A, D to control the direction
- Every time the snake grows by one square, the team score increases by one
- At the end of the game countdown, the team with the highest score wins
- During the game, the snake will die if it collides with the wall or its body
- During the game, if all snakes of one team die, the other team wins directly
- Yellow food can add one point, green food can increase two point
