for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`First ${i}`);
  }, 1000);
}


for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(`Second ${i}`);
  }, 1000);
}
