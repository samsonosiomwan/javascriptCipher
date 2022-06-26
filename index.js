const cryptography =(cipherKey, cipherData)=>{
    cipherKey = cipherKey.toString()
    cipherData = cipherData.toString()

    const alphabetSignature =  ["a","b","c","d", "e","f","g","h","i","j","k"]

    const keys = []
    const keySets = cipherKey.split('.')

    for(let i=0; i<keySets.length;i++){
        if(i%2==0){
            keys.push({a:keySets[i], b:keySets[i+1]})

        }
    }

    keys.forEach((elem)=>{
        let char1 = alphabetSignature[elem.a]
        let char2 = alphabetSignature[elem.b]

        let regex1 = new RegExp(char1, 'g')
        let regex2 = new RegExp(char2, 'g')

        data = data.replace(regex1, "!&").replace(regex2, char1).replace(/!&/g, char2 )
    }
    )

    return data
}