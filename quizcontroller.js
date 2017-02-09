(function(){

    angular.module("app").controller("quizCtrl", QuizController);

    QuizController.$inject = ["quizService", "$state"];

    function QuizController(quizService, $state){
        var vm = this;
        vm.quizData = quizService;
        vm.activeQuiz = 0;

        vm.selectAnswer = SelectAnswer;

        function SelectAnswer(index){
            if(index == vm.quizData[vm.activeQuiz].correct || vm.quizData[vm.activeQuiz].correct == null){
                if(vm.activeQuiz==vm.quizData.length-1){
                    $state.go("info.infobasic");
                } else {
                    vm.activeQuiz++;
                    vm.quizData[vm.activeQuiz].selected = true;
                }
            }
        }
    }

})()