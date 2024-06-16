const insert = document.getElementById('insert');
let flag = true;


window.addEventListener('keydown', (e) => {
    const row = document.createElement('tr');

    if(flag){
        insert.innerHTML = `
    <table id = 'table'>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    </table>`
    row.innerHTML = `<td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>`

    const element = document.getElementById('table');
    element.appendChild(row);

    flag = false;
    }

    else{
        flag = false;
        row.innerHTML = `<td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>`

    const element = document.getElementById('table');
    element.appendChild(row);
    }
    

})