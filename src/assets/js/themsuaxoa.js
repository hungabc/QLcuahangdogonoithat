// Loại sp
function ThemLoaiSP() {
    $("#titlesua").html("Thêm Loại Sản Phẩm");
    $("#Maloai").val("");
    $("#Tenloai").val("");
    $("#Mota").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Sản Phẩm");
    $.get("/loaisp/getOneLoaisp", { id: id }, function (data) {
        $("#Maloai").val(data.maloai)
        $("#Maloai").style='cursor:not-allowed'
        $("#Tenloai").val(data.tenloai);
        $("#Mota").val(data.mota);
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
// Sản phẩm
function Themsanpham() {
    $("#titlesua").html("Thêm sản phẩm");
    $("#Masp").val("");
    $("#Tensp").val("");
    $("#Mota").val("");
    $("#Hinhanh").val("");
    $("#Soluong").val("");
    $("#Maloai").val("");
    $("#Giaban").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Sản Phẩm");
    $.get("/Admin/get1SanPham", { id: id }, function (data) {
        $("#Masp").val(data.masp)
        $("#Masp").style='cursor:not-allowed'
        $("#Tensp").val(data.tensp);
        $("#Mota").val(data.mota);
        $("#Hinhanh").val(data.hinhanh);
        $("#Soluong").val(data.soluong);
        $("#Maloai").val(data.maloai)
        $("#Giaban").val(data.giaban)
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
// Hãng sp
function ThemHangSP() {
    $("#titlesua").html("Thêm Hãng sản phẩm");
    $("#Mahang").val("");
    $("#Tenhang").val("");
    $("#Diachi").val("");
    $("#Sodienthoai").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Hãng Sản Phẩm");
    $.get("/HangSP/get1HangSP", { id: id }, function (data) {
        $("#Mahang").val(data.mahang)
        $("#Mahang").style='cursor:not-allowed'
        $("#Tenhang").val(data.tenhang);
        $("#Diachi").val(data.diachi);
        $("#Sodienthoai").val(data.sodienthoai);
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
// Hóa đơn nhập
function ThemHoaDonNhap() {
    $("#titlesua").html("Thêm Hóa Đơn Nhập");
    $("#Mahdn").val("");
    $("#Ngaylap").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Hóa Đơn Nhập");
    $.get("/HoaDonNhap/get1HoaDonNhap", { id: id }, function (data) {
        $("#Mahdn").val(data.mahdn)
        $("#Mahdn").style='cursor:not-allowed'
        $("#Ngaylap").val(data.ngaylap);
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
// Hóa đơn bán
function ThemHoaDonBan() {
    $("#titlesua").html("Thêm Hóa Đơn Bán");
    $("#Mahdb").val("");
    $("#Madh").val("");
    $("#Ngaylap").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Hóa Đơn Bán");
    $.get("/HoaDonBan/get1HoaDonBan", { id: id }, function (data) {
        $("#Mahdb").val(data.mahdb)
        $("#Mahdb").style='cursor:not-allowed'
        $("#Madh").val(data.madh);
        $("#Ngaylap").val(data.ngaylap);
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
// Khách hàng
function Themkh() {
    $("#titlesua").html("Thêm Khách Hàng");
    $("#Makh").val("");
    $("#Tenkh").val("");
    $("#Gioitinh").val("");
    $("#Ngaysinh").val("");
    $("#Diachi").val("");
    $("#Sodienthoai").val("");
    $("#Mail").val("");
    $("#Pass").val("");
    $("#aoe").val("1");
    $("#anhienma").show("");
    $("#myModal").modal("show");
}
function Sua(id) {
    $("#titlesua").html("Sửa Thông Tin Khách Hàng");
    $.get("/KhachHang/get1KhachHang", { id: id }, function (data) {
        $("#Makh").val(data.makh)
        $("#Makh").style='cursor:not-allowed'
        $("#Tenkh").val(data.tenkh);
        $("#Gioitinh").val(data.gioitinh);
        $("#Ngaysinh").val(data.ngaysinh);
        $("#Diachi").val(data.diachi);
        $("#Sodienthoai").val(data.sodienthoai)
        $("#Mail").val(data.Mail)
        $("#Pass").val(data.Pass)
        $("#aoe").val("0");
        $("#anhienma").hide();
    });
    $("#myModal").modal("show");
}
setTimeout(function() {
    $('#tbao').fadeOut('slow');
}, 5300); 
