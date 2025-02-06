export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

export function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000); // 100000~999999 사이의 숫자
}

// 정규식을 사용하여 영어 대소문자와 숫자로만 이루어져 있는지 확인
export function isAlphanumeric(str) {
    return /^[A-Za-z0-9]+$/.test(str);
}

// 특수문자 / 공백 전부 제거
export function removeSpecialCharactersAndSpaces(str) {
    // 정규 표현식: 알파벳, 숫자를 제외한 모든 문자 제거 (공백 포함)
    return str.replace(/[^0-9]/g, '');
}


