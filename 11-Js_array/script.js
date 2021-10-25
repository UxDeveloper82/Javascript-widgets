var superData = {"Super Man": ["lex Luther"],
                "Batman": ["Joker", "Riddler"],
                "Spider Man": ["Green Goblin", "Vulture","Carnage"],
                 "Thor": ["Loki","Frost Giants"]};

 function writeIt() {
     for (hero in superData) {
         var villains = superData[hero];
         for(villainIdx in villains){
             let villain = villains[villainIdx];
             let listItem = makeListItem(hero, villain);
             document.write(listItem);
         }
     }
 }                

 function makeListItem(name, value) {
     let itemStr = "<li>" + name + ":&nbsp;" + value + "</li>";
     return itemStr;
 }