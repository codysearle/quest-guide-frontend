'use strict';

describe('myApp.ingredients module', function() {

  beforeEach(module('myApp.ingredients'));

  describe('ingredients controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var ingredientsCtrl = $controller('IngredientsCtrl');
      expect(ingredientsCtrl).toBeDefined();
    }));

  });
});