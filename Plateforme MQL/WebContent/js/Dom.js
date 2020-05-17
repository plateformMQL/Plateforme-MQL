function Dom(selector) {
    if (selector.startsWith("#")) {
        this.elements = [document.getElementById(selector.substring(1))];
    } else {
        var result = document.getElementsByTagName(selector);
        this.elements = [];
        for (var i = 0; i < result.length; i++) {
            this.elements.push(result.item(i));
        }
    }
}

Dom.prototype.html = function (content) {
    if (content == undefined) {
        var s = "";
        for (var i = 0; i < this.elements.length; i++) {
            s += this.elements[i].innerHTML;
        }
        return s;
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].innerHTML = content;
        }
    }
};


Dom.prototype.style = function (property, value) {

    for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style[property] = value;
    }
};


Dom.prototype.display = function (value) {

    if (value == undefined) {
        return this.elements[0].style["display"];
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style["display"] = value;
        }
    }
};


Dom.prototype.reverseDisplay = function (value) {

    for (var i = 0; i < this.elements.length; i++) {
        if (this.elements[i].style["display"] == "none" || this.elements[i].style["display"] == "") {
            this.elements[i].style["display"] = "block";
        } else {
            this.elements[i].style["display"] = "none";
        }

    }

};

Dom.prototype.val = function (value) {
    if (value == undefined) {
        var s = "";
        for (var i = 0; i < this.elements.length; i++) {
            s += this.elements[i].value;
        }
        return s;
    } else {
        for (var i = 0; i < this.elements.length; i++) {
            return this.elements[i].value = value;
        }
    }

};

Dom.prototype.attr = function (key, value) {
    for (var i = 0; i < this.elements.length; i++) {
        return this.elements[i].setAttribute(key, value);
    }
};

Dom.prototype.appendChild = function (node) {
    for (var i = 0; i < this.elements.length; i++) {
        return this.elements[i].appendChild(node);
    }
};

var $ = function (selector) {
    return new Dom(selector);
};
