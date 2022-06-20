function checkPalindrome(string){
    const len = string.length;
    console.log(len);

    for(let i=0; i<len/2; i++){
        console.log(len/2);
        if(string[i] !== string[len - 1 - i]){
            return "It is not a palindrome";
        }
    }
    return "It is a palindrome";
}
console.log(checkPalindrome("123"));