function tablecreate(){
    let body = document.getElementsByTagName('body')[0];//najde element kam budeme zapisovat,vezme prvni body ktery najde
    let table = document.createElement('table');//vytcarime tabulku
    table.style.width = '40%';
    table.setAttribute('border', '1');//1 = plna cara
    let tbody = document.createElement('tbody');//vytvori telo tabulky
    for (let i = 0; i < 8; i++) {//projde 8 krat
        let tr = document.createElement('tr');//radky
        for (let j = 0; j < 8; j++) {
            let td = document.createElement('td');// vytvari sloupce
            //td.appendChild(document.createTextNode(''));
            td.style.height = '50px';
            if ((i + j) % 2 == 0){
              td.style.backgroundColor = 'black';
            }
            tr.appendChild(td)//pridame sloupec do radku (propojime)
        }
        tbody.appendChild(tr);//radek prida do tabulky
    }
    table.appendChild(tbody);//vlozilo sloupce a radky co jsme vytvorili od tabulky
    body.appendChild(table);
}
tablecreate();