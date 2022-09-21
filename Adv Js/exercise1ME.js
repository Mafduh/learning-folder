
// For all of these, what is the value of a when the function gets called with the alert()
// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
// a = 3 correct

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
// a = 5 after both funtions are run

//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}
// error the functions must be run in succession resulting in a = hello

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
// a = test correct

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);
// a = 5 , a = 2 in the order js reads the var is still true resulting in a = 5, a = 5;
// the var a was already stored and then chage so js wouldnt reread it