function calculator() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    if (num1 == '' || num2 == '') {
        document.getElementById('ans').innerHTML = 'Please enter number/s'
        return
    }
    const radio_value = document.querySelectorAll('input[name="op"]')
    let op = 0
    let answer = 0
    let checked = 0
    for (let i = 0; i < radio_value.length; i++) {
        if (radio_value[i].checked) {
            op = radio_value[i].value
            checked = true
        }
    }
    if (checked == true) {
        switch (op) {
            case 'plus':
                answer = parseFloat(num1) + parseFloat(num2)
                break
            case 'minus':
                answer = num1 - num2
                break
            case 'multi':
                if (num1 == 0 && num2 == 0) {
                    answer = 'Infinity'
                } else {
                    answer = num1 * num2
                }
                break
            case 'divide':
                if (num2 == 0) {
                    answer = 'Infinity'
                } else {
                    answer = num1 / num2
                }
                break
        }
        document.getElementById('ans').innerHTML = answer
    } else {
        document.getElementById('ans').innerHTML = 'Choose Operator'
    }
}

function poem() {
    let name = document.getElementById('name').value;
    let dog = document.getElementById('dog').value;
    console.log(name);
    if (name == "" && dog == ""){
        document.getElementById('error').innerHTML = "Please enter your name and dog's name";
        return
    }
    if (name == ""){
        document.getElementById('error').innerHTML = "Please Enter your name"
        return
    }
    if(dog==""){
        document.getElementById('error').innerHTML = "Please Enter your dog's name"
        return
    }
    
    let poem1_1 =
    dog + `, my furry friend so true,
   With eyes that melt and heart of goo.
   You chase the ball with playful glee,
   And cuddle close when wanting me`

   let poem1_2 = 
   name +`'s your name, my human dear,
   Your gentle touch dispels all fear.
   We walk the park, a happy trio,
   My love for both of you will ever flow.
   `
    let poem2_1 = 
    dog + `,  with ears that perk and twitch,
    Your playful barks, a joyful switch.
    You wag your tail, a furry blur,
    My loyal friend, forever sure.`

    let poem2_2 = 
    name + ` throws the stick, you race with might,
    A bond of love, a joyful sight.
    We play and snuggle, all content,
    A perfect team, divinely sent.`

    let poem3_1 = 
    dog + `,  protector by my side,
    Your presence warm, in which I confide.
    TJ's your hero, strong and tall,
    You watch him closely, answering his call.`

    let poem3_2 = 
    `Through sunny days and stormy weather,
    Our love for each other knows no measure.
    Timi and `+ name +`, a perfect pair,
    A friendship true, a love to share.`

    let ran_num = randomNumbers(1,3);
    let hasExecuted = sessionStorage.getItem("codeExecuted");
    // let before_1 = sessionStorage.getItem("before_1")
    let count = parseInt(sessionStorage.getItem("count"));
    console.log(count);
    console.log(hasExecuted);
    console.log(ran_num);
if(!(hasExecuted)){
    // let  myArray = new Array(3);
    globalThis.myArray = new Array (3);
    console.log("array hari");
}
if((count <= 3 || count == NaN)){
    appendElement(hasExecuted);
    console.log("array eka athule")
    count = parseInt(count) + 1;
    sessionStorage.setItem("count",count)
    if (!(hasExecuted == ran_num)) {
        
      sessionStorage.setItem("codeExecuted", ran_num);
    } else{
        while ((hasExecuted == ran_num)){
            ran_num = randomNumbers(1,3)
            console.log("Code running for the second time!")
            sessionStorage.setItem("codeExecuted", ran_num);
        }
    }
    let poem_out1 = `poem${ran_num}_1`
    let poem_out2 = `poem${ran_num}_2`
    document.getElementById('out_poem').innerHTML = eval(poem_out1);
    document.getElementById('out_poem1').innerHTML = eval(poem_out2);
    return;
    }
    


if (!(hasExecuted == ran_num)) {
    count = count + 1
    sessionStorage.setItem("count",count)
  // Set a flag in local storage to indicate execution
  sessionStorage.setItem("codeExecuted", ran_num);
} else{
    while ((hasExecuted == ran_num)){
        ran_num = randomNumbers(1,3)
        console.log("Code running for the second time!")
        sessionStorage.setItem("codeExecuted", ran_num);
    }
}
let poem_out1 = `poem${ran_num}_1`
let poem_out2 = `poem${ran_num}_2`
document.getElementById('out_poem').innerHTML = eval(poem_out1);
document.getElementById('out_poem1').innerHTML = eval(poem_out2);

function appendElement(element) {
    myArray.unshift(element); // add the new element to the beginning of the array
    myArray.pop(); // remove the last element of the array
  }
function randomNumbers (min,max) {
    const random_decimal = Math.random();
    const random_integer = Math.floor(random_decimal* (max - min + 1)) + min ;
    return random_integer;
}
}