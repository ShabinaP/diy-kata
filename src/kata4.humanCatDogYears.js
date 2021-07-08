const humanCatDogYears = humanYears => {
    {
        let catYears, dogYears;
        //if(humanYears <= 0 || typeof humanYears !== 'number'){
         // return [0,0,0];
        //}
        if(humanYears === 1){
            catYears = 15;
            dogYears = 15;
        }
        if(humanYears === 2){
            catYears = 15 + 9;
            dogYears = 15 + 9;
        }
          if(humanYears > 2){
            catYears = (16) + (4 * humanYears);
            dogYears = (18) + (5 * humanYears);
        }
        return [humanYears, catYears, dogYears];
}};

module.exports = humanCatDogYears;
