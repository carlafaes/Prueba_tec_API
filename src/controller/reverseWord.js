const reverseWords = (req, res) => {
    const { word } = req.query;
    let palindrome= false;

    function palindromeChecker(str) {
        const strReversed = str.split("").reverse().join("");
      
        strReversed === str ? palindrome=true : palindrome=false;
        return palindrome
    
      } 

    try{
        if(typeof word === 'string'){
            const text = word.split('').reverse().join('');
            
            palindromeChecker(text);
            
            res.status(200).json({ text, palindrome });
        }
        
        else{
            res.status(400).json({ error: 'Please provide a word' });
        }
    }
    catch(err){
        res.status(400).send(err,'The parameter is incorrect');
    }
}



module.exports = { reverseWords };