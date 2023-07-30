const bills = {
  hundredDollar: 100.0,
  twentyDollar: 20.0,
  tenDollar: 10.0,
  fiveDollar: 5.0,
  oneDollar: 1.0,
  quarter: 0.25,
  dime: 0.1,
  nickle: 0.05,
  penny: 0.01,
};
// 15-6=9--> 5$+4*1$
function findChange(amount) {
  let resultBills = {};
  let cashLeft = amount;
  for (let key in bills) {
    while (cashLeft >= bills[key]) {
      if (resultBills[key]) {
        resultBills[key] += 1;
      } else {
        resultBills[key] = 1;
      }
      cashLeft = (cashLeft - bills[key]).toFixed(2);
    }
  }
  return resultBills;
}
console.log(findChange(9));
//Counting Inversion Problem
