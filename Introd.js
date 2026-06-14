function details(user){
    const users= {
        Name: 'Daniel Kondo',
        Age: 25,
        favoriteProgramLanguage: "Python",
    };
    return 'my name is'+' '+ users.Name +' '+ 'I am'+' '+ users.Age+' '+'My favorite programming Language is'+' '+users.favoriteProgramLanguage
}

console.log(details())