(function () {

    angular
          .module("turtleFacts")
          .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics', 'DataServices'];

    function ListController (quizMetrics, DataServices) {
      // List controller logic
      var vm = this;

      vm.quizMetrics = quizMetrics;
      vm.data = DataServices.turtlesData;
      vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
      vm.search = "";      // Adding the Search property to be used in the ng-model
      vm.changeActiveTurtle = changeActiveTurtle;
      vm.activateQuiz = activateQuiz;

      function changeActiveTurtle (index) {
        vm.activeTurtle = index;
      }

      function activateQuiz () {
        quizMetrics.changeState(true);
      }

    }

}) ();
