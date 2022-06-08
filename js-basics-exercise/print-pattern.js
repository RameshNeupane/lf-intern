const printPattern = (n) => {
  for (let i = n; i >= 1; i--) {
    let asterisk = "";
    for (let j = 0; j <= i - 1; j++) {
      asterisk += "* ";
    }
    console.log(`${asterisk}\n`);
  }
};

// print first row having 5 asterisk and decreasing asterisks accordingly
printPattern(5);

// print 10 asterisk in first row
printPattern(10);
