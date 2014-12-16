var jQuery, $;

(function() {

    jQuery = $ = function(sel) {
        return new MyQuery(sel);
    };

    var MyQuery = function(sel) {
   
        var i, l
        
        selAction = {
            'default': document.getElementsByTagName(sel),
            '#': [ document.getElementById(sel.slice(1)) ],
            '.': document.getElementsByClassName(sel.slice(1)),
        },
            
        nodes = selAction[sel.charAt(0)] || selAction.default;
        
        for (i = 0, l = nodes.length ; i < l; i++) { this[i] = nodes[i]; }
        this.length = nodes.length;
        return this;
    };

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
    var i, j, l
    if(!obj) return this;
    for (i = 0, l = this.length; i < l; i += 1) { 
        for(j in obj){
            if (obj.hasOwnProperty(j)) this[i].style[j] = obj[j]; 
        }
    }
    return this;
};

$('.test-class').css({color: 'red'});