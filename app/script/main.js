(() => {
    class Test {
        constructor(name) {
            this.name = name
        }
        SayHello() {
            console.log(`Hello!I'm ${this.name}`)
        }
    }
})()