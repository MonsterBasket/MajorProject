// function pageLoader(){
//   if(!nextPage.current){
//     if(x > mapSize[0] - 100) pageDirection.current = "right";
//     else if(x < 100) pageDirection.current = "left";
//     else if(y < 100) pageDirection.current = "up";
//     else if(y > mapSize[1] - 100) pageDirection.current = "down";
//     if(pageDirection.current) newPage(pageDirection.current)
//   }
//   else {
//     if(pageDirection.current === "right"){
//       if(x < mapSize[0] - 100) {
//         pageDirection.current = "";
//         nextPage.current = "";
//         pageReady.current = false;
//         return
//       }
//       else if(pageReady.current && x >= mapSize[0]) turnPage()
//     }
//     if(pageDirection.current === "left"){
//       if(x > 100) {
//         pageDirection.current = "";
//         nextPage.current = "";
//         pageReady.current = false;
//         return
//       }
//       else if(pageReady.current && x <= 0) return turnPage()
//     }
//     if(pageDirection.current === "up"){
//       if(y > 100) {
//         pageDirection.current = "";
//         nextPage.current = "";
//         pageReady.current = false;
//         return
//       }
//       else if(pageReady.current && y <= 0) return turnPage()
//     }
//     if(pageDirection.current === "down"){
//       if(y < mapSize[1] - 100) {
//         pageDirection.current = "";
//         nextPage.current = "";
//         pageReady.current = false;
//         return
//       }
//       else if(pageReady.current && y >= mapSize[1]) return turnPage()
//     }
//   }
// }

// function newPage(direction = "up", page = ""){

//   if(direction === "left"){
//     nextPage.current = page || parseInt(thisPage.current) - 100;
//     shift.current = [-mapSize[0], 0]
//   }
//   else if(direction === "right"){
//     nextPage.current = page || parseInt(thisPage.current) + 100;
//     shift.current = [mapSize[0], 0]
//   }
//   else if(direction === "up"){
//     nextPage.current = page || parseInt(thisPage.current) - 1;
//     shift.current = [0, -mapSize[1]]
//   }
//   else if(direction === "down"){
//     nextPage.current = page || parseInt(thisPage.current) + 1;
//     shift.current = [0, mapSize[1]]
//   }
//   if(maps(nextPage.current)) pageReady.current = true;
// }

// function turnPage(){
//   let horizontal = true;
//   let multiplier = 1;
//   turning.current = true;
//   if(pageDirection.current === "right") multiplier = -1;
//   else if(pageDirection.current === "up") horizontal = false;
//   else if(pageDirection.current === "down"){
//     multiplier = -1;
//     horizontal = false;
//   }

//   for (let i = 0; i < 30; i++) {
//     setTimeout(_ => {
//       if(horizontal) setNewPageX(prev => prev + (window.innerWidth / 30) * multiplier)
//       else setNewPageY(prev => prev + (window.innerHeight / 30) * multiplier)
//       if(i >= 29) return recenterPage()
//     }, i*17)
//   }
// }

// function recenterPage(){
//   if(pageDirection.current === "left"){
//     pageDirection.current = "right";
//     setX(prev => prev + mapSize[0]);
//     setNewPageX(0);
//     }
//   else if(pageDirection.current === "right"){
//     pageDirection.current = "left";
//     setX(prev => prev - mapSize[0]);
//     setNewPageX(0);
//     }
//   else if(pageDirection.current === "up"){
//     pageDirection.current = "down";
//     setY(prev => prev + mapSize[1]);
//     setNewPageY(0);
//     }
//   else if(pageDirection.current === "down"){
//     pageDirection.current = "right";
//     setY(prev => prev - mapSize[1]);
//     setNewPageY(0);
//   }
//   turning.current = false
//   let tempPage = thisPage.current
//   thisPage.current = nextPage.current;
//   nextPage.current = tempPage;
// }
