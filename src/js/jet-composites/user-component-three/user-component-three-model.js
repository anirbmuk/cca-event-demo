define([
'knockout',
'ojs/ojcontext',
'jquery',
'util/component.prototype',
'ojs/ojinputtext',
'ojs/ojbutton'
],
function (ko, Context, $, CustomPrototype) {
    
    function UserComponentThreeModel(context) {
        var self = this;

        self.composite = context.element;
        self.properties = context.properties;

        self.componentId = self.properties.componentId;
        self.userComponentThreeValue = self.properties.value;

        Object.setPrototypeOf(self, new CustomPrototype(self.composite));

        self.callEvent = function() {
          self.raiseEvent(self.EventTypes.UPPERCASE, 'Message from third component');
          self.raiseEvent(self.EventTypes.LOWERCASE, 'Message from third component');
        }
    };

    return UserComponentThreeModel;
});