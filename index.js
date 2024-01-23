 const cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat() {
     return cats.splice(3, 0, "Ralph")
 };

 function destructivelyPrependCat() {
     return cats.splice(0, 0, "Bob")
 };

 function destructivelyRemoveFirstCat() {
     return cats.splice(0, 1)
 }

 function destructivelyRemoveLastCat() {
     return cats.splice(2, 1)
 }

 function appendCat() {
     let copyOfCats
     return copyOfCats = [...cats, "Broom"]
 }

 function prependCat() {
     let anotherCopy;
     return anotherCopy = ["Arnold", ...cats]
 }

 function removeFirstCat() {
     return cats.slice(1)
 }

 function removeLastCat() {
     return cats.slice(0, 2)
 }