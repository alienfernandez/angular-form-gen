fg.controller('fgEditPaletteController', function ($scope, fgConfig) {

  $scope.templates = [];
  
  var tmpls = fgConfig.fields.templates;
  var i = tmpls.length;



  $(document).ready(function(){
          $(document).scroll(function(){
              $('.thisone').css('position','');
              top = $('.thisone').offset().top;
              $('.thisone').css('position','absolute');
              $('.thisone').css('top',Math.max(0,$(document).scrollTop()));
              $('.thisone').css('width', '96%');

          });
      }
  );




    while(i--) {
    var tmpl = tmpls[i];
    
    if(tmpl.editor && tmpl.editor.visible == false) {
      continue;
    }
    
    $scope.templates.unshift(angular.copy(tmpl));
  }
  
  $scope.templateFilter = function (template) {
    return !$scope.selectedCategory || $scope.selectedCategory[template.type];
  };
  
});