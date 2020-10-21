
    alert('write one word in each text field');

    let word1 = '';
    let word2 = '';
    let word3 = '';


    document.getElementById('combine').addEventListener('click',() => {

        word1 = document.getElementById('word1').value;
        word2 = document.getElementById('word2').value;
        word3 = document.getElementById('word3').value;
         console.log(word1);
         console.log(word2);
         console.log(word3);
        let final1 = word1.trim();
        let final2 = word2.trim();
        let final3 = word3.trim();
         console.log(final1.length);
         console.log(final2.length);
         console.log(final3.length);
    
        
        let combinationStr = '';
        let combinationStr2 = '';
        let combinationStr3 = '';


        for (let i=0; i<=((final1.length)-1); i++){
            for (let y=0; y<=((final2.length)-1); y++){
                for (let z=0; z<=((final3.length)-1); z++){
                combinationStr = `${final1.charAt(i)}-`;
                console.log(combinationStr);
                
                    combinationStr2 = `${combinationStr}${final2.charAt(y)}-`;
                    console.log(combinationStr2);  
                    
                        combinationStr3 += `${combinationStr2}${final3.charAt(z)} \n`;
                        console.log(combinationStr3);
                }
            }    
             if (i > final1.length) break;  
             } 
        
        
        result.innerHTML = combinationStr3;   
    
}
)
