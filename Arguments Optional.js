function addTogether() {
    var secondAdder = 2;
    if (arguments.length === 2 && (typeof arguments[0] === 'number') && (typeof arguments[1] === 'number')) {
        return arguments[0] + arguments[1];
    }
    else if (arguments.length === 1 && (typeof arguments[0] === 'number')) {
        var val = arguments[0];
        return function(val) {
          if (typeof val === 'number')
              return val + secondAdder;
          else
              return undefined;
        };
    }
    else {
        return undefined;
    }
}