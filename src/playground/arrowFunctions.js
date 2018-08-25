const getFirstName = (x) => x.split(' ')[0];

console.log(getFirstName('Sagar Singh'));

const multiplier = {
    numbers: [2,3,4,5,6],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((x) => x*this.multiplyBy);
    }
}

console.log(multiplier.multiply());