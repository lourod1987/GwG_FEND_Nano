function sum(...nums) {
  let total = 0;
  
  for (const num of nums) {
    total += num;
  }
  return total;
}

function difference(...nums) {
  let total = 0;
  
  for (const num of nums) {
    total -= num;
  }
  
  return total;
}

function product(...nums) {
  let total;
  
  for (const num of nums) {
    total *= num;
  }
  
  return total;
}

function quotient(...nums) {
  let total;
  
  for (const num of nums) {
    total /= num;
  }
  return total;
}