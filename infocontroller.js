(function(){

    angular.module("app")
        .controller("infoCtrl", InfoController);

    InfoController.$inject = ['$location', '$anchorScroll'];

    function InfoController($location, $anchorScroll){
        var vm = this;
        vm.goAnchor = GoAnchor;
        $anchorScroll.yOffset = 50;
        function GoAnchor(anchor){
            $location.hash(anchor);
            $anchorScroll();
        }
    }

})()