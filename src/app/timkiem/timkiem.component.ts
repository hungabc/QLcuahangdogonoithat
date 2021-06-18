import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../lib/base.component';

@Component({
  selector: 'app-timkiem',
  templateUrl: './timkiem.component.html',
  styleUrls: ['./timkiem.component.css']
})
export class TimkiemComponent extends BaseComponent implements OnInit {

  spResults: any;
  searchResult: any;
  tongsl1: any;
  keyWord: any;
  minPrice: any;
  maxPrice: any;
  danhMuc: any;
  sapXep: any;
  index: any;
  size: any;
  loais: any;
  searchResponse: any;
  formGia: any;
  constructor(private injector: Injector, private fb: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.formGia = this.fb.group({
      'giaMin': [''],
      'giaMax': ['']
    });
    this.getAllLoai();
    this.getSearchResult();
    setTimeout(() => {
      this.loadScripts();
    });
  }

  getAllLoai() {
    this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.loais = res;
    });
  }

  locTheoLoai(maLoai) {
    this.reRenderSearch(this.keyWord, maLoai, this.minPrice, this.maxPrice, this.sapXep, 1, this.size);
    this.highlightLoai(maLoai);
  }

  locTheoGia() {
    let min = this.formGia.get('giaMin').value == '' || this.formGia.get('giaMin').value == null ? 0 : parseInt(this.formGia.get('giaMin').value);
    let max = this.formGia.get('giaMax').value == '' || this.formGia.get('giaMax').value == null ? 0 : parseInt(this.formGia.get('giaMax').value);
    this.reRenderSearch(this.keyWord, this.danhMuc, min, max, this.sapXep, 1, this.size);

  }

  highlightLoai(maLoai) {
    var loaiDangChon = document.getElementById('loai' + maLoai);
    loaiDangChon.className = 'highlighted-loai';

    if (maLoai != 0) {
      document.getElementById('loai' + 0).className = 'unhighlighted-loai';
    }
    var loaiKhac = this.loais.filter(x => x.maloai !== maLoai);

    loaiKhac.forEach(element => {
      let temp = document.getElementById('loai' + element.maloai);
      temp.className = 'unhighlighted-loai';
    });
  }

  //// ham de load ket qua tim kiem moi khi loc mot dieu kien (loai, gia)
  reRenderSearch(keyWord, maLoai, min, max, sapXep, index, size) {
    this._api.
      get('/api/SanPham' + '/tim-kiem-san-pham/' + keyWord + '/' + maLoai + '/' + min + '/' + max + '/' + sapXep + '/' + index + '/' + size)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.searchResponse = res;
        this.spResults = this.searchResponse.data;
        this.tongsl1 = this.searchResponse.totalItems;
        var searchResult = {
          keyWord: keyWord,
          danhMuc: 0,
          data: this.spResults,
          total: this.tongsl1,
          minPrice: min,
          maxPrice: max,
          sapXep: sapXep,
          index: index,
          size: size
        }
        localStorage.setItem('searchResult', JSON.stringify(searchResult));
      });
    this.getSearchResult();
  }

  getSearchResult() {
    if (localStorage.getItem('searchResult')) {
      this.searchResult = JSON.parse(localStorage.getItem('searchResult'));
      this.spResults = this.searchResult.data;
      this.tongsl1 = this.searchResult.total;
      this.keyWord = this.searchResult.keyWord;
      this.minPrice = this.searchResult.minPrice;
      this.maxPrice = this.searchResult.maxPrice;
      this.danhMuc = this.searchResult.danhMuc;
      this.sapXep = this.searchResult.sapXep;
      this.index = this.searchResult.index;
      this.size = this.searchResult.size;

    }
    else {
      this.searchResult = 'Empty';
    }
  }
  addToCart(it) {
    this._cart.addToCart(it);
    alert('Thêm thành công!');
  }
  loadPage(page) {
    this._api.get('/api/SanPham' + '/tim-kiem-san-pham/' + this.keyWord + '/' + this.danhMuc + '/' + this.minPrice + '/' + this.maxPrice + '/' + this.sapXep + '/' + page + '/' + this.size)
      .takeUntil(this.unsubscribe).subscribe(res => {
        this.searchResponse = res;
        this.spResults = this.searchResponse.data;
        this.tongsl1 = this.searchResponse.totalItems;
        var searchResult = {
          keyWord: this.keyWord,
          danhMuc: this.danhMuc,
          data: this.spResults,
          total: this.tongsl1,
          minPrice: this.minPrice,
          maxPrice: this.maxPrice,
          sapXep: this.sapXep,
          index: page,
          size: this.size
        }
        localStorage.setItem('searchResult', JSON.stringify(searchResult));
        this.getSearchResult();
      });
  }

  filterTheoGia() {

  }

  filterTheoLoai(maLoai) {

  }
}
