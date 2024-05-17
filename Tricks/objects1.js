/*  Syntatic Sugar For key:value pair in Js for objects
    If the key and value are same,we can get rid of the value
*/
function getDog(name, age, breed, weight) {
  return {
    name,
    age,
    breed,
    weight,
    eat() {
      console.log("meat");
    },
  };
}

console.log(getDog("Coco", 3, "husky", 33));
