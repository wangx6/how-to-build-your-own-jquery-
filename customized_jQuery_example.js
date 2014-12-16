var jQuery, $;

(function() {
    'use strict';

    jQuery = $ = function(sel) {
        return new MyQuery(sel);
    };

    var MyQuery = function(sel) {
   
        var i, l,


        /**
        *    Based on selector type we determine which Action to take
        *    Note: JS select only one obj when use getElementById. We
        *    We therefore wrap "[]" around the selected item
        *
        *    return this for chaining
        */
        selAction = {
            'default': document.getElementsByTagName(sel),
            '#': [ document.getElementById(sel.slice(1)) ],
            '.': document.getElementsByClassName(sel.slice(1)),
        },

        
        /**
        *    Based on the first char to determine selAction
        */
        nodes = selAction[sel.charAt(0)] || selAction.default;

        
        /**
        *   "this" is an object and node is an array. We therefore need
        *   manually assign the length to "this". Otherwise, it will be
        *   undefined.
        */
        for (i = 0, l = nodes.length ; i < l; i++) { this[i] = nodes[i]; }
        this.length = nodes.length;
        return this;
    };


    /**
    *    Expose the prototype of MyQuery class to jQuery.fn
    *    so that you wont accidentaly polute the jQuery.prototype
    *    and it is easy to type :)
    */
    jQuery.fn = MyQuery.prototype = {
        hide: function() {
            for (var i = 0, l = this.length; i < l; i += 1) { this[i].style.display = 'none'; }
            return this;
        },
        remove: function() {
            for (var i = 0, l = this.length; i < l; i += 1) { this[i].parentNode.removeChild( this[i] ); }
            return this;
        }
    };
}());

$('p').hide().remove();

/**
*    Add function on the fly
*    Add css
*
*    @param {obj} - obj - css style propertiers
*    return this to maintaine the chain
*/
$.fn.css = function(obj) {
    var i, j, l;
    if(!obj) return this;
    for (i = 0, l = this.length; i < l; i += 1) {
        for(j in obj){
            if (obj.hasOwnProperty(j)) this[i].style[j] = obj[j];
        }
    }
    return this;
};

$('.test-class').css({color: 'red'});
















