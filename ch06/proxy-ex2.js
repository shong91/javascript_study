//DOM 복제 
let view = new Proxy({
    selected: null
},
{
    set: function(obj, prop, newVal) {
        let oldVal = obj[prop];
        if(prop === 'selected') {
            if(oldVal) {
                oldVal.setAttribute('aria-selected', 'false');
            }
            if(newVal) {
                newVal.setAttribute('aria-selected', 'true');
            }
        }

        obj[prop] = newVal; 
        return true; 
    }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // true

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // false 
console.log(i2.getAttribute('aria-selected')) // true




