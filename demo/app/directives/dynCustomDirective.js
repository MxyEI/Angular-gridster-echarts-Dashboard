app.directive("dynCustom", function($compile,$rootScope,widgetService){
    return({
        // 注：restrict 默认值为 EA, 即可以通过元素名和属性名来调用指令。
      transclude:true,
      priority: 1000,
      restrict:"AE",
      compile: function(element, attributes) {

		    var update = function(scope,element,attributes,v) {
		    	var content = attributes.content;
		    	var type = attributes.type;
		    	var sth = widgetService.getDirective(content,type);
				element.empty();
				element.append($compile(sth)(scope));
		    }
			var linkFunction = function(scope, element, attributes) {
				update(scope,element,attributes);
				scope.$watch(function () { return attributes.content }, function (v) {
            		update(scope,element,attributes,v);
          		});
          		scope.$watch(function () { return attributes.type }, function (v) {
            		update(scope,element,attributes,v);
          		});
			};

			return linkFunction;
		}
  });
}); 