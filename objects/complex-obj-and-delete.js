let alien = {
    name: 'Navin',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand1: 'Asus'
    }
}

//console.log(alien.laptop.brand.length);

console.log(alien.laptop?.brand?.length);

console.log(alien);

delete alien.laptop

console.log(alien);