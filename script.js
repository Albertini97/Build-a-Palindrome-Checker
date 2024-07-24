document.getElementById("check-btn").addEventListener("click", function() {
    var str = document.getElementById("text-input").value;
    if (!str) {
        alert("Please input a value");
        return;
    }
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if (reverseStr === lowRegStr){
        document.getElementById("result").innerHTML = str + " is a palindrome";
    } else {
        document.getElementById("result").innerHTML = str + " is not a palindrome";
    }
});
