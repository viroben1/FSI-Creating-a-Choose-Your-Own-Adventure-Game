let Left = "You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?"
let Follow = "You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven."
let Stay = "You live happily amongst the cats for the rest of your days."
let Spreadtheword = "After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless."
Continueon = "You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?"
let Ladder = "After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home."
let Staircase = "After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever."
let Right = "You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?"
let Pastthedragon = "The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:"
var Stay1 = "You and the dragon have an uplifting conversation about local politics and become lifelong friends."
let Run = "Quickly, you run back to the cave's entrance. Sheepish, you return home."
let Awayfromthedragon = "After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?"
let Drawit = "You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch."
let Pickit = "You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust."

switch (anawer) {
    case 0:
      answer = "left";
      break;
    case 1:
        answer = "followe";
      break;
    case 2:
        answer = "stay";
      break;
    case 3:
        answer= "Spreadtheword";
      break;
    case 4:
        answer = "Continueon";
      break;
    case 5:
        answer = "ladder";
      break;
    case 6:
        answer = "Staircase";
      break;
    case 7:
        answer = "right";
     break;
    case 8:
        answer = "Pastthedragon"; 
     break;
    case 9:
        answer= "Stay1";
      break;
     case 10:
        answer = "run";
       break;
      case 11:
        answer ="Awayfromthedragon";
       break;
      case 12:
        answer = "Drawit";
       break;
     default:
        answer = "Pickit";   
     }