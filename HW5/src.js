function Account(_number, _contributionType, _pin, _balance, _creationDate, _user, _userType, _history) {
    var number = _number;
    var contributionType = _contributionType;;
    var pin = _pin;
    var balance = _balance;
    var creationDate = _creationDate;
    var user = _user;
    var userType = _userType;
    var history = _history;

    this.setNumber = function (value) {
        number = value;
    }

    this.getNumber = function () {
        return number;
    }

    this.setContributionType = function (value) {
        contributionType = value;
    }

    this.getContributionType = function () {
        return contributionType;
    }

    this.setPin = function (value) {
        pin = value;
    }

    this.getPin = function () {
        return pin;
    }

    this.setBalance = function (value) {
        balance = value;
    }

    this.getBalance = function () {
        return balance;
    }

    this.setCreationDate = function (value) {
        creationDate = value;
    }

    this.getCreationDate = function () {
        return creationDate;
    }

    this.setUser = function (value) {
        user = value;
    }

    this.getUser = function () {
        return user;
    }

    this.setUserType = function (value) {
        userType = value;
    }

    this.getUserType = function () {
        return userType;
    }

    this.setHistory = function (value) {
        history = value;
    }

    this.getHistory = function () {
        return history;
    }

    this.toString = function () {
        return ' Account number: ' + number + '\n Contribution type: ' + contributionType + '\n PIN: ' + pin + '\n Balance: ' + balance + '\n Date of account creation: ' + creationDate + '\n User: ' + user + '\n Type of user: ' + userType + '\n History: ' + history;
    }
}

function CurrentAccount(_number, _contributionType, _pin, _balance, _creationDate, _user, _userType, _history, _currency) {
    Account.apply(this, arguments);
    var currency = _currency;

    this.setCurrency = function (value) {
        currency = value;
    }

    this.getCurrency = function () {
        return currency;
    }

    var parentToSrting = this.toString;
    this.toString = function () {
        return parentToSrting.call(this) + '\n Currency: ' + currency;
    }
}

function SavingsAccount(percent) {
    Account.call(this);
    percent = percent;

    this.setPercent = function (value) {
        percent = value;
    }

    this.getPercent = function () {
        return percent;
    }

    var parentToSrting = this.toString;
    this.toString = function () {
        return parentToSrting.call(this) + '\n Percent: ' + percent;
    }
}

function createAccount(acc, pref) {
    acc.setNumber(document.getElementById(pref + 'number').value);
    acc.setContributionType(document.getElementById(pref + 'contributionType').value);
    acc.setPin(document.getElementById(pref + 'pin').value);
    acc.setBalance(document.getElementById(pref + 'balance').value);
    acc.setCreationDate(document.getElementById(pref + 'creationDate').value);
    acc.setUser(document.getElementById(pref + 'user').value);
    acc.setUserType(document.getElementById(pref + 'userType').value);
    acc.setHistory(document.getElementById(pref + 'history').value);
    if (pref == 'c_'){
        acc.setCurrency(document.getElementById('c_currency').value);
    } else if (pref == 's_'){
        acc.setPercent(document.getElementById('s_percent').value);
    }
    alert(acc.toString());
}

function showAccount(context) {
    var acc;
    switch (context.id) {
        case 'currentAccount':
            acc = new CurrentAccount()
            createAccount(acc, 'c_');
            break;
        case 'savingsAccount':
            acc = new SavingsAccount();
            createAccount(acc, 's_');
            break;
        default:
            acc = new Account();
            createAccount(acc, '');
            break;
    }
}

