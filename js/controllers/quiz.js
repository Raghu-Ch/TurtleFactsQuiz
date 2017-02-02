(function () {

      angular
             .module("turtleFacts")
             .controller("quizCtrl", QuizController);

      QuizController.$inject = ['quizMetrics', 'DataServices'];

      function QuizController (quizMetrics, DataServices) {

          var vm = this;

          vm.quizMetrics = quizMetrics;
          vm.dataServices = DataServices;
          vm.questionAnswered = questionAnswered;
          vm.activeQuestion = 0;
          vm.setActiveQuestion = setActiveQuestion;

          var numQuestionsAnswered = 0;

          function setActiveQuestion () {
            var breakOut = false;
            var quizLength = DataServices.quizQuestions.length - 1;

            while (!breakOut) {
                  vm.activeQuestion = vm.activeQuestion < quizLength?++vm.activeQuestion:0;

                  if (DataServices.quizQuestions[activeQuestion].selected === null)
                  breakOut = true;
            }
          }

          function questionAnswered () {

            var quizLength = DataServices.quizQuestions.length;

            if (DataServices.quizQuestions[vm.activeQuestion].selected !== null){
                numQuestionsAnswered++;

                if (numQuestionsAnswered >= quizLength) {
                     // Finilise the quiz
                }
            }

            vm.setActiveQuestion();
          }
      }

}) ();
