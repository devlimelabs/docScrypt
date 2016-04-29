(function() {
    var Counter = function(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    this.update();
};

Counter.prototype.calculate = function() {
    var text = this.quill.getText();
    if (this.options.unit === 'word') {
        text = text.trim();
        return text.split(/\s+/).length;
    } else {
        return text.length;
    }
};

Counter.prototype.update = function() {
    var length = this.calculate();
    var label = this.options.unit;
    if (length !== 1) {
        label += 's';
    }
    this.container.innerHtml = length + ' ' + label;
    console.log(length + ' ' + label);
};

Quill.registerModule('counter', Counter);
})();
