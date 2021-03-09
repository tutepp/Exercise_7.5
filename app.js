function tinhToan() {
   let diemLy = parseFloat(document.getElementById('ly').value);
    let diemHoa = parseFloat(document.getElementById('hoa').value);
    let diemSinh = parseFloat(document.getElementById('sinh').value);
    document.getElementById('ket-qua').innerHTML = ('Diem Trung Binh La:') + (diemLy + diemHoa + diemSinh)/3;
}

function nhietDo() {
    let doC = parseFloat(document.getElementById('nhietdo').value);
    document.getElementById('nhiet-do').innerHTML= "Nhiệt độ F là:" + (doC*9/5+32);
}

function hinhTron() {
    let banKinh = parseFloat(document.getElementById('tron').value);
document.getElementById('dien-tich').innerText = "Diện tích hình tròn là:" + (banKinh*banKinh*Math.PI);

}
function chuVi() {
let banKinhChuVi = parseFloat(document.getElementById('chuvi').value);
document.getElementById('chu-vi').innerHTML = ("Chu vi hình tròn:") + (banKinhChuVi*2*Math.PI);
}
