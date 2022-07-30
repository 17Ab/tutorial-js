let laptop = {
    name: 'Asus',
    cpu: 'i5',
    ram: '8 gb',

    greet: function () {
        console.log(this.name);
    }
}

laptop.greet()