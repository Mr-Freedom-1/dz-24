/*-------------Завдання №1-------------*/
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
// }

// let user1 = new User('Mike', 'MK_18', '18');
// let user2 = new User('', 'NGR', '22');

// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

/*-------------Завдання №2-------------*/
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getName(isAdmin){
//         return isAdmin ? console.log(this.#name || this.login) : console.log('Fermission denied');
//     }
// }

// let user1 = new User('Mike', 'MK_18', '18');
// let user2 = new User('', 'NGR', '22');

// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

// user1.getName(true);
// user2.getName(true);
// user2.getName(false);

/*-------------Завдання №3-------------*/
// class User{
//     #name;
//     constructor(name, login, age){
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//     }
//     getName(isAdmin){
//         return isAdmin ? console.log(this.#name || this.login) : console.log('Fermission denied');
//     } 
//     ChangeName(name, password){
//         if (password == '123'){
//             console.log(`Name Changed from ${this.#name} to ${this.#name = name}`);
//         } else{
//             console.log('Fermission denied');
//         }
//     }
// }

// let user1 = new User('Mike', 'MK_18', '18');
// let user2 = new User('', 'NGR', '22');

// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);

// user1.getName(true);
// user2.getName(true);
// user2.getName(false);

// console.log(user1);
// console.log(user2);
// user1.ChangeName('Bill', '123');
// user2.ChangeName('Tom', '12345');
// console.log(user1);
// console.log(user2);

/*-------------Завдання №4-------------*/
// class User{
//     constructor(name, login, age){
//         this.name = name;
//         this.login = login;
//         this.age = age;
//     }
// }

// class Admin extends User{
//     #isAdmin = true;
//     constructor(name, login, age, isAdmin){
//         super(name, login, age);
//         this.#isAdmin = isAdmin;
//     }    
//     getUserName(user){
//         console.log(user.name); 
//     }
// }

// let user1 = new User('Mike', 'MK_18', '18');
// let user2 = new User('', 'NGR', '22');
// let admin = new Admin();
// admin.getUserName(user1);

/*-------------Завдання №5-------------*/
class User{
    #phone;
    constructor(name, phone){
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin){
        let arr = this.#phone.split('-');
        return isAdmin ? console.log(this.#phone) : 
        console.log(`${arr[0]}-******-${arr[3]}`);
    }
}

let user1 = new User('Mike', '067-888-88-99');
let user2 = new User('Tom', '099-888-88-99');

user1.getPhone(false);
user2.getPhone(false);
user1.getPhone(true);
user2.getPhone(true);