define([
'knockout',
'ojs/ojcontext',
'jquery',
'util/component.prototype',
'ojs/ojinputtext',
'user-component-three/loader'
],
function (ko, Context, $, CustomPrototype) {
    
    function UserComponentTwoModel(context) {
        var self = this;

        self.composite = context.element;
        self.properties = context.properties;

        self.componentId = self.properties.componentId;
        self.userComponentTwoValue = self.properties.value;

        self.showValue = ko.observable('');

        Object.setPrototypeOf(self, new CustomPrototype(self.composite));

        self.activated = function() {
          self.on('LOWERCASE', function(event) {
            self.showValue(event.detail);
          });
        };
    };

    return UserComponentTwoModel;
});