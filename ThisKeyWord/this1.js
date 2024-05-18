class Client {
    constructor() {
        this.clientid = ''
    }

    changeClientId(clientid) {
        this.clientid = clientid
    }

    getClientId() {
        return this.clientid
    }

    sayHello() {
        console.log(`Hello ${this.clientid}`)
    }
} 

const newContract = new Client()
newContract.changeClientId('3343')
newContract.sayHello()

console.log(newContract.getClientId())