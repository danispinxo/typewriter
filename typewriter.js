const sentence = "My name is Dani and I approve this message.";

for (let i = 0; i < sentence.length; i++) {
  let count = i;
  setTimeout( () => {
    process.stdout.write(sentence[count]);
  }, 50 * (count + 1));
};

  setTimeout( () => {
    console.log('\n');
  }, 50 * (sentence.length + 1));