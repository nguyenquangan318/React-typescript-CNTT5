let input = "hello world apple banana orange pumpkin cucumber"
function checkWord(inputString: string): string {
    //B1: Tách chuỗi ban đầu thành mảng các từ
    //["hello", "world", ....]
    let result = "";
    let words = inputString.split(" ");
    //B2: Xét từng từ con trong mảng
    words.forEach((word) => {
        //B3: Kiểm tra ký tự trùng lặp
        let charSet = new Set(word);
        if (charSet.size === word.length) {
            //B4: Kiểm tra độ dài so với từ dài nhất hiện tại
            if (word.length > result.length) {
                result = word;
            }
        }
    })
    return result;
}
console.log(checkWord(input));
