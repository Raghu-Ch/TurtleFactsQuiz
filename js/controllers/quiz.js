(function () {

      angular
             .module("turtleFacts")
             .controller("quizCtrl", QuizController);

      QuizController.$inject = ['quizMetrics', 'DataServices'];

      function QuizController (quizMetrics, DataServices) {

          var vm = this;

          vm.quizMetrics = quizMetrics;
          vm.dataServices = dataServices;
      }

}) ();
