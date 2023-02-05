const  plural =(number, titles)=> {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return number + ' ' +titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
const declension = ['год', 'года', 'лет'];

export const _calculateAge =(date)=>{
    const d = date.split('/');
    if( typeof d[2] !== "undefined" ) {
        date = d[2]+'.'+d[1]+'.'+d[0];
        return plural((((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0),declension)
    }
    return 0;
}

