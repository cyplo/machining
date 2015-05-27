jQuery(function ($) {
    var _superModal = $.fn.modal, _hide;

    // hint: use _superModal.Constructor.DEFAULTS with Bootstrap 3
    $.extend(_superModal.defaults, {
        locked: false
    });

    _hide = _superModal.Constructor.prototype.hide;

    $.extend(_superModal.Constructor.prototype, {
        lock: function () {
            this.options.locked = true;
        },
        unlock: function () {
            this.options.locked = false;
        },
        hide: function () {
            if (this.options.locked) {
                return;
            }
            _hide.apply(this, arguments);
        }
    });
});