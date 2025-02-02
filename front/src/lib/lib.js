export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

export function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000); // 100000~999999 사이의 숫자
}