const moment = require("moment");

exports.dateFromNow = (date) =>{
    moment().startOf('hour').fromNow();
    moment().format('MMMM Do YYYY, h:mm:ss a');
}

exports.isNewFeed = (date) =>{

    //비교할 두 날짜를 객체로 만든/가져온 후 비교하는 함수를 사용하면 된다.
    //라이브러리

    let feedDate = moment(date); //입력된 date를 사용할 수 있게 parsing
    let currentTime = moment().add(-10,'minute');//현재시간에서 10분을 뺏을때 시간을 feedDate와 비교
    
    return feedDate.isAfter(currentTime);
    //
}