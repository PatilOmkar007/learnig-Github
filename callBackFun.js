function calAge(birthYear){
    var age =2022-birthYear;
    return age;
}

function print(name,year,fun){
    var age=fun(year);
    console.log(`hi! my name is ${name} and i'm ${age} years old`);
}
print('omkar',2001,calAge);                                  