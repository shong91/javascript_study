// module
// Node.js 기반의 back-end 개발 시, 


// 객체를 임포트함. (export default 할 시에는 {} 하지 않음 (default 이기 때문))
// import log, {getTime, getCurrentHour} from './mylogger';
import {getCurrentHour, CodeSquad} from './CodeSquad';
import _ from './utility';

_.log('my first test data');
// log(`getTime is ${getTime()}`);
_.log(`current Hour is ${getCurrentHour()}`);

const cs = new CodeSquad();
_.log(`lectures if Codesquad are ${cs.getLectures()}`);
