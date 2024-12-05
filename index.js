// code your solution here
function superbowlWin(records) {
    // Use find() to search for the first object where the result is "W"
    const win = records.find(record => record.result === "W");
    
    // If a win is found, return the year, otherwise return undefined
    return win ? win.year : undefined;
  }
  const superbowlRecords = [
    { year: 2000, result: "L" },
    { year: 2001, result: "W" },
    { year: 2002, result: "L" },
  ];
  
  console.log(superbowlWin(superbowlRecords)); 
  const superbowlRecord = [
    { year: 2000, result: "L" },
    { year: 2002, result: "L" },
  ];
  
  console.log(superbowlWin(superbowlRecord)); 
      