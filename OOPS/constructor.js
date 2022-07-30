function Alien(name, cpu){

    this.name = name,
    this.cpu = cpu,

    this.work = function () {
        console.log('hello World');
    }

}



let alien1 = new Alien('Asus', 'i5')
let alien2 = new Alien('dell', 'i5')

console.log(alien1);
console.log(alien2);

alien2.name = 'hp'
console.log(alien2);

alien1.work()
