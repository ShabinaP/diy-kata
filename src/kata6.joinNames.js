const joinNames = namesObj => {
return namesObj.reduce((acc, name ) => {
   if (namesObj.indexOf(name) === 0) {
       return acc + name
   }
   else if (namesObj.indexOf(name) === namesObj.length-1) {
       return acc + ` & ${name}`
       
   }
   else {
       return acc + `, ${name}`
   }
},""  )

};
 
   
    



module.exports = joinNames;
