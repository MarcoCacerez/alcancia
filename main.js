class MoneyBox{
    #coins;
    #bills;
    #total;
    constructor(){
        this.#coins = [];
        this.#bills = [];
        this.#total = 0;
    }

    set coins(coin){
        this.#coins.push(coin);
    }

    get coins(){
        return this.#coins;
    }

    set bills(bill){
        this.#bills.push(bill);
    }
    
    get bills(){
        return this.#bills;
    }

    showTotal(){
        this.#total = 0;
        moneybox.coins.forEach(element =>{ this.#total += element});
        moneybox.bills.forEach(element => this.#total += element);
        return this.#total;
    }

    breakMB(){
        this.#coins = [];
        this.#bills = [];
    }
}

let btnCoins = document.querySelector('#btnCoins');
let btnBills = document.querySelector('#btnBills');
let btnBreakMB = document.querySelector('#btnBreakMB');
let billsInputs = ['bill20','bill50','bill100','bill200','bill500','bill1000'];
let coinsInputs = ['coin1','coin2','coin5','coin10'];

function addCoins(){
    const coin = document.querySelector('#selectCoins').value;
    moneybox.coins = parseInt(coin);
    showCoins(moneybox.coins);
    showTotal();
}

btnBills.addEventListener('click',()=>{
    let bill = document.querySelector('#selectBills').value;
    moneybox.bills = parseInt(bill);
    showBills(moneybox.bills);
    showTotal();
});

btnBreakMB.addEventListener('click',()=>{
    moneybox.breakMB();
    showBills(moneybox.bills);
    showCoins(moneybox.coins);
    showTotal();
});

function showCoins(coins){
    coinsInputs.forEach(element => {
        document.querySelector(`#${element}`).value = 0;
    });
    coins.forEach(element => {
        switch (element) {
            case 1:
                ++document.querySelector('#coin1').value;
                break;
            case 2:
                ++document.querySelector('#coin2').value;
                break;
            case 5:
                ++document.querySelector('#coin5').value;
                break;
            case 10:
                ++document.querySelector('#coin10').value;
                break;
        }
    });
}

function showBills(bills){
    billsInputs.forEach(element => {
        document.querySelector(`#${element}`).value = 0;
    });
    bills.forEach(element => {
        switch (element) {
            case 20:
                ++document.querySelector('#bill20').value;
                break;
            case 50:
                ++document.querySelector('#bill50').value;
                break;
            case 100:
                ++document.querySelector('#bill100').value;
                break;
            case 200:
                ++document.querySelector('#bill200').value;
                break;
            case 500:
                ++document.querySelector('#bill500').value;
                break;
            case 1000:
                ++document.querySelector('#bill1000').value;
                break;
        }
    });
}

function showTotal(){
    let total = moneybox.showTotal();
    document.querySelector('#totalAmount').innerText = `$ ${total}`;
}

let moneybox = new MoneyBox();