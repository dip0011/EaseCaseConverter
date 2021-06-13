// Character, Word and line Counter 
function counter(obj) {
    var name = obj.value;
    document.getElementById("char_count").innerHTML = name.length;

    var word = name.split(/\s+/);
    console.log(word);
    document.getElementById("word_count").innerHTML = word.length;

    var line = name.split('\n');
    document.getElementById("line_count").innerHTML = line.length;
}

// for capitalized case 
function Capcase() {
    var name = document.getElementById('content').value;
    // var name = "mr dee dhameliya sidsar";
    function MyCase(name) {
        var a = name.toLowerCase().split(' ');
        for (var j = 0; j < a.length; j++) {
            a[j] = a[j].charAt(0).toUpperCase() + a[j].slice(1);
        }
        return a.join(' ');
    }
    // console.log(MyCase(name));
    document.getElementById('content').value = MyCase(name);
}

// for Sentance case 
function Sencase() {
    var name = document.getElementById('content').value;
    name = name.trim();
    name = name.toLowerCase();
    document.getElementById('content').value = name[0].toUpperCase() + name.substring(1);
}

// for Title case 
function Titlecase() {
    var name = document.getElementById('content').value;
    // var name = "mr dee dhameliya sidsar";
    function MyCase(name) {
        var a = name.toLowerCase().split(' ');
        for (var j = 0; j < a.length; j++) {
            a[j] = a[j].charAt(0).toUpperCase() + a[j].slice(1);
        }
        return a.join(' ');
    }
    // console.log(MyCase(name));
    document.getElementById('content').value = MyCase(name);
}


// for lower caes 
function Lowcase() {
    var name = document.getElementById('content').value;
    document.getElementById('content').value = name.toLowerCase();
}

// for upper case 
function Uppcase() {
    var name = document.getElementById('content').value;
    document.getElementById('content').value = name.toUpperCase();
}

// for alternating cap case 
function Altcase() {
    var name = document.getElementById('content').value;
    function MyCase(name) {
        var alter = "";
        for (var j = 0; j < name.length; j++) {
            if (j % 2 == 0) {
                alter = alter + name.charAt(j).toUpperCase();
            }
            else {
                alter = alter + name.charAt(j);
            }
        }
        return alter;
    }
    document.getElementById('content').value = MyCase(name);
}

// for inverse case 
function Invcase() {
    var name = document.getElementById('content').value;
    function MyCase(name) {
        var alter = "";
        for (var j = 0; j < name.length; j++) {
            alter = name.charAt(j) + alter;
        }
        return alter;
    }
    document.getElementById('content').value = MyCase(name);
}

// for selecting all text 
function Cpy() {
    document.getElementById('content').select();
}

// for clearing text box 
function Clr() {
    document.getElementById('content').value = "";
}