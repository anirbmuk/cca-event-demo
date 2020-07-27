define(function() {

    function CustomPrototype(element) {
        this.element = element;
    }

    CustomPrototype.prototype.EventTypes = {
        UPPERCASE: 'UPPERCASE',
        LOWERCASE: 'LOWERCASE'
    };

    CustomPrototype.prototype.raiseEvent = function(event, detail) {
        if (event === this.EventTypes.UPPERCASE) {
            detail = !!detail ? detail.toUpperCase() : '';
            this.element.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, detail: 'UPPERCASE: ' + detail }));
        } else if (event === this.EventTypes.LOWERCASE) {
            detail = !!detail ? detail.toLowerCase() : '';
            this.element.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, detail: 'lowercase: ' + detail }));
        } else {
            this.element.dispatchEvent(new CustomEvent(event, { bubbles: true, cancelable: true, detail }));
        }
    };

    CustomPrototype.prototype.on = function(eventType, eventHandler) {
        this.element.addEventListener(eventType, eventHandler);
    };

    CustomPrototype.prototype.off = function(eventType, eventHandler) {
        this.element.removeEventListener(eventType, eventHandler);
    };

    return CustomPrototype;

});