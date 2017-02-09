(function(){

    angular.module("app")
        .factory("quizService", QuizService);

    function QuizService(){
        return [
            {
                selected : false,
                correct : 3,
                question: "Tại sao mơ mơ ú?",
                posibilities: [
                    "Vì mơ mơ xưn",
                    "Vì mơ mơ dễ xương",
                    "Vì mơ mơ ngoan",
                    "Vì mơ mơ nùn"
                ]
            },
            {
                selected : false,
                correct : 2,
                question: "Mơ mơ hình gì?",
                posibilities: [
                    "Vuông",
                    "Tam giác đều",
                    "Tròn",
                    "Bẹp"
                ]
            },
            {
                selected : false,
                correct : null,
                question: 'Từ nào mô tả chính xác chân của mơ mơ?',
                posibilities: [
                    "1 mẩu",
                    "Đáp án 1 đúng",
                    "Tất cả đều đúng",
                    "Mơ mơ vừa ú vừa nùn vừa chân ngắn"
                ]
            },
            {
                selected : false,
                correct : 0,
                question: "Mơ mơ hợp với món gì nhất?",
                posibilities: [
                    "Gà luộc"
                ]
            }
        ]
    }

})()