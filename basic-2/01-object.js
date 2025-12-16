// when we decalre object like literals that  doesn't make singalton
// when "           "               constructor    makes    "


// oject literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name":   "hitesh choudary",
    [mySym]: "Key1",
    age: 19,
    location : "jaipur",
    email: "rk@gmail.com",
    isloggedoIn: false,
    LastloginDays: ["Monday", "Sunday"],

    helloUser: function(){
        console.log(`hi ${this.name}`);
        
    }
}

JsUser.helloUser();

// console.log(JsUser.email); // dot- notation
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "rk.chatgpt@gmail.com"
// Object .freeze(JsUser)
// JsUser.email = "rk.Microsoft@gmail.com"
// console.log(JsUser);

let object = {
    email: "riya@112",
    password: "123"
}

delete object.password
console.log(object);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting();



JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


JsUser.greetingTwo();



