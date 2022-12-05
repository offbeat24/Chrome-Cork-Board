const age = parssInt(prompt("How old are you ?"));

if (isNaN(age)) {
  console.log("please write num");
} else if (age < 18) {
  console.log("too young")
} else {
  console.log("O.K.");
}