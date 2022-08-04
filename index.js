let left = ("You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?")
let follow = ("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
let stay = ("You live happily amongst the cats for the rest of your days.")
let spreadTheWord = ("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.")
let continueOn = ("You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?")
let ladder = ("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
let stairCase = ("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
let Right = ("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?")
let pastTheDragon = ("The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:")
let stay1 = ("You and the dragon have an uplifting conversation about local politics and become lifelong friends.")
let run = ("Quickly, you run back to the cave's entrance. Sheepish, you return home.")
let awayFromTheDragon =   ("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?")
let drawIt = ("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.")
let pickIt = ("You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.")

let answer = window.prompt("do you go right or left") 
  
    if  (answer === "left") {
      answer = window.prompt(left);
    }
     if (answer === "follow"){
       answer = window.prompt(follow);
     }
          if (answer === "stay"){
            answer = window.prompt(stay);
          }
            else if (answer ==="spreadTheWord"){
              answer = window.prompt(spreadTheWord);
            } else {
              window.alert(continueOn);
            } 
            if (answer === "ladder") {
              answer = window.alert(ladder);
          }
            if (answer === "stairCase"){
              answer = window.alert("stairCase");
        }
          if (answer === "right"){
            answer = window.alert(Right);
      } else {
          answer = window.alert(pastTheDragon);
       }
         if (answer ==="stay"){
          answer = window.prompt(stay1);
         }else {
            answer = window.alert(run);
            }
              if (answer === "away"){
                answer = window.prompt(awayFromTheDragon);
              }
                if(answer === "drawIt"){
                  answer = window.prompt(drawIt);
                }else{
                  answer = window.alert(pickIt);
                }
           
           
              
    
      