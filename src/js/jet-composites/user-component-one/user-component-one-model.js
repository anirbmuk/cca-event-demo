define([
'knockout',
'ojs/ojcontext',
'jquery',
'util/component.prototype',
'ojs/ojinputtext',
'user-component-two/loader'
],
function (ko, Context, $, CustomPrototype) {
    
    function UserComponentOneModel(context) {
        var self = this;

        self.composite = context.element;
        self.properties = context.properties;

        self.componentId = self.properties.componentId;
        self.userComponentOneValue = self.properties.value;

        self.showValue = ko.observable('');

        Object.setPrototypeOf(self, new CustomPrototype(self.composite));

        self.activated = function() {
          self.on(self.EventTypes.UPPERCASE, function(event) {
            self.showValue(event.detail);
          });
        };
    };

    return UserComponentOneModel;
});