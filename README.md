# Beanie-Bandit

Javascript game where beanies need to be caught and visors must be avoided.

## Where Did All These Beanies and Visors Come From?

Thanks to global warming (aka climate change) beanies are falling from the sky. It just so happens the Beanie Bandit is in town and they want as many beanies as possible.

Another side effect of climate change (arguably the worst side effect) is visors raining from the sky. Beanie Bandit despises visors! Why make a hat with no head covering?!? Beanie Bandit must avoid the falling visors at all costs!

## Game Explanation

### Objective

Collect as many beanies as possible in the alloted time while avoiding the visors! Three visor grabs and the game is over!
The player can move horizontally to catch the beanies and dodge the visors as they are falling from the ever-warming sky!
Player's score increases by 1 for each touched. If three visors are touched, the game is over.

## Development

### Wireframe

![wireframe](/Assets/wireframe.png)

### Finished Product

![gameplay screenshot](/Assets/Gameplay.png)

### MVP

- [x] Staggered/random beanies and visors falling down screen
- [x] Game score that increments when beanies collide with player and decrement when visors collide with player
- [x] Player can move horizontally to collect and dodge beanies and visors respectively
- [x] Game countdown; game over when time reaches 0
- [x] Visors collided count display on-screen and end game when player hits three visors
- [x] New Game / Reset button

### Stretch Goals

- [x] Random beanie images instead of 1 beanie image
- [ ] Horizontal moving enemies at bottom of screen that player must jump or crouch to dodge
- [x] Powerup 'special' beanies and powerdown 'special' visors
- [x] Dyamic background that changes from blue to red as timer counts down

### Technologies Used

- JavaScript, Canvas API, CSS (some grid), HTML
- Google.com (the search engine)
- Weston, Jason, Andy

### Code Highlights

Difficulties finding a way to move beanies without moving all of them at once.

- Create a "spawn" array to keep track of falling objects on screen.
- Write create/spawn functions for visors, beanies, powerups, powerdowns

  - Different intervals for different classes (type of objects)
  - Add objects to "spawn" array as they are created
    ![spawn function](/Assets/Spawn_Functions.png)

- Function to make onscreen objects "fall"
  - Remove objects from spawn array once they reach certain 'y' positon
    ![drop function](/Assets/Make_Objects_Fall.png)

### Refactoring, Bug Fixes, Improvements

- Group more functions to prevent code repeats
- Fix power-ups/power-downs (late additions)
  - If rainbow hat is grabbed and another is grabbed, speed is back to normal
- Add instructions/explain what power-ups/power-downs are
- Size elements, canvas, filltexts, etc so they work on different screen sizes
- Make it more visually pleasing (read: change chartreuse color)

## References

For beanies:

- sportsbasement.com
- https://cdn.shopify.com/s/files/1/0442/0203/3317/products/PhotoRoom_20210222_020308_620x.png?v=1614020090
- https://shop.sportsbasement.com/products/acrylic-watch-hat
- https://www.nixon.com/products/jorgensen-wool-beanie-navy
- https://www.on-running.com/en-us/products/merino-beanie
- https://www.tracksmith.com/products/prospect-beanie
- https://www.shopneedco.com/products/skull-tag-beanie
- https://madehereonline.com/products/organic-cotton-beanie-by-rustek
- https://pngset.com/download-free-png-ehdtr

For visors:

- https://www.greatgolfmemories.com/mastersvisorw.html
- https://www.titleist.com/product/tour-visor/154HA1T.html
- https://www.pgatoursuperstore.com/sp-20-hats%3A-arobill-visor/2000000008917.html
- https://league-legacy.com/collections/visors
- http://clipart-library.com/clip-art/145-1458372_transparent-visors-red-sun-visor-cap-png.htm
- https://www.facebook.com/towntalkheadwear/

For greenhouse gases:

- https://www.pinclipart.com/maxpin/iTxRio/
- https://www.flaticon.com/premium-icon/ch4_2354749
-

For player image:

- https://the-youtooz.fandom.com/wiki/Oliver_Tree_(1FT)

For search engine:

- google.com

For music:

- Oliver Tree "Let Me Down"
- MP3:
  - https://www.youtube.com/watch?v=CX6ewov0qds&t=8s
