let inputbox = document.querySelector('input');
function receavedata(value) {
    inputbox.value = value;
}
let data = '';
function checkvalue(item) {
    if (item.innerText == '=') {
        receavedata(eval(data));
    }
    else if (item.innerText == 'AC') {
        receavedata('');
        data = '';
    }
    else if (item.innerText == 'C') {
        data = data.substring(0, (data.length) - 1);
        receavedata(data);
    }
    else {
        console.log(item.innerText);
        data += item.innerText;
        inputbox.value = data;
    }
}

