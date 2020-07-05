// 다른 js 파일에서 사용하기 위해 export 함 
export function log(data){
    console.log(data);
}

export const getCurrentHour = () => {
    return (new Date).getHours();
}

// Class
export default class CodeSquad {
    constructor(props){
        this.lectures = ['java', 'iOS'];
    }

    getLectures() {
        return this.lectures;
    }
    
    getTime = () => {
        return Date.now();
    }
}