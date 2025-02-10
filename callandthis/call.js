function setUsername(username){
    this.username=username

}

function createUsername(username, email, pass){
    setUsername.call(this, username)
    this.email=email
    this.password=pass
}

const a = new createUsername("hello", "jka@kfjsv","happu")
console.log(a);
