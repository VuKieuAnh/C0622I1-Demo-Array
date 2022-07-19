// let arr=[1,3, 4, 5, 6, 7, 8, 89, 7];
// let index = -1;
// //xac nhan vi tri cua phan tu o dau?
// let v = 7;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]===v){
//         index=i;
//         break;
//     }
// }
// if (index!= -1){
//     console.log(v + " co trong mang o vi tri " + index);
// }
// else {
//     console.log(v + " khong co trong mang");
// }

let arr=[];

function addNewElement() {
    //lay phan tu
    let newE = +document.getElementById("number").value;
    //them moi vao mang
    arr.push(newE);
    show();
    document.getElementById("number").value = "";
    document.getElementById("number").focus();
}

function show(){
    let result = "";
    for (let i = 0; i <arr.length ; i++) {
        result+= arr[i] + ",";
    }
    document.getElementById("result").innerText = result;
}
function check() {
    //b1: nhap du lieu
    let number = +prompt("Moi nhap so can kiem tra")
    //b2: kiem tra xem co trong mang hay khong
    let index=-1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==number){
            index=i;
            break;
        }

    }
    //b3: show ket luan
    if (index>-1){
        alert(number + "o vi tri thu "+ index);
    }
    else {
        alert(number + " khong co trong mang");
    }
}
