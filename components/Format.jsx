// Date format: mm dd, yyyy at hh:mm
function FormatDate({ date }) {
    date=new Date(date);
    const month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return month[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();//+' at '+date.getHours()+':'+date.getMinutes();
}

// Views/Likes format: 1.2k, 1.2m, 1.2b, 
function FormatCount({ count }) {
    let newCount = count;
    if (count>=1000) {
        newCount=count/1000;
        if (count>=1000000) {
            newCount=count/1000000;
            if (count>=1000000000) {
                newCount=count/1000000000;
                newCount=newCount.toFixed(1)+'b';
            } else {
                newCount=newCount.toFixed(1)+'m';
            }
        } else {
            newCount=newCount.toFixed(1)+'k';
        }
    }
    return newCount;
}

export { 
    FormatDate, 
    FormatCount 
};