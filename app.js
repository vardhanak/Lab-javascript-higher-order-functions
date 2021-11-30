//1
var foods = ["pizza", "burger", "fingerShips", "donuts", "springRoll"];
var modifiedFood=foods.slice(1,foods.length-1);
console.log(modifiedFood);

//2
const foods1 = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
foods1.splice(2,0,'noodles','icecream');
console.log(foods1);

//3
const numberArray = [12,324,213,4,2,3,45,4234];
var isEven=numberArray.filter(num=>num%2==0);
console.log(isEven);

let isPrime=(numberArray)=>{
    let res=numberArray.filter((num)=>{
        if(num==2||num==1){
            return num;

        }else{
            let i=num-1;
            flag=true;
            while(i>1){
                if(num%i==0){
                    flag=false;
                    break;
                }else{
                    i--;
                }
            }
            if(flag){
                return num;
            }
        }
    });
    return res;
};
console.log(isEven(numberArray));
console.log(isPrime(numberArray));

//4
let reject = (numberArray) => {
    let res = numberArray.filter((num) => {
      let i = num - 1,
        flag = false;
      while (i > 1) {
        if (num % i == 0) {
          flag = true;
          break;
        } else {
          i--;
        }
      }
      if (flag) {
        return num;
      }
    });
    return res;
  };
  let newarr = reject(numberArray);
  console.log(newarr);

//5
let even=numberArray.filter((num)=>num%2==0);
  console.log(even);

//6
const myArray = [11, 34, 20, 5, 53, 16];
let findSquareOfNumbers=myArray.map(function(m){
return m*m;
});
console.log(findSquareOfNumbers)

//7
let myArray2 = [2, 3, 5, 10];
let multipy=myArray2.reduce(function(a,b){
return a*b;
});
console.log(multipy)
