<template>
  <div class="portrait">
    <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <form class="avatar-form">
            <div class="modal-header">
              <button class="close" data-dismiss="modal" type="button">&times;</button>
              <h4 class="modal-title" id="avatar-modal-label">上传照片</h4>
            </div>
            <div class="modal-body">
              <div class="avatar-body">
                <div class="row">
                  <div class="col-md-8">
                    <div class="avatar-wrapper"></div>
                  </div>
                  <div class="col-md-4">
                    <div class="avatar-preview preview-lg" id="imageHead"></div>
                    <h3 class="preview_head">预览头像</h3>
                  </div>
                </div>
                <div class="avatar-upload">
                  <input class="avatar-src" name="avatar_src" type="hidden">
                  <input class="avatar-data" name="avatar_data" type="hidden">
                  <button class="uploading_btn" type="button" style="height: 35px;">重新上传</button>
                  <span id="avatar-name"></span>
                  <input class="avatar-input hide" id="avatarInput" name="avatar_file" type="file">
                </div>
                <div class="avatar_split_line"></div>
                <div class="row avatar-btns clearfix">
                  <div class="col-md-6 left_btn_area">
                    <a href="javascript:;" class="avatar_btn left_btn btn-block avatar-save fa fa-save" data-dismiss="modal" @click="confirm()">
                      确认</a>
                  </div>
                  <div class="col-md-6 right_btn_area">
                    <a class="right_btn avatar_btn" data-dismiss="modal"> 取消</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>
  </div>
</template>
<script>
  import myfun1 from './../../../static/lib/portrait/js/jquery-1.10.2.js';
  import myfun2 from './../../../static/lib/portrait/js/bootstrap-3.3.4.js';
  import myfun3 from './../../../static/lib/portrait/js/cropper.js';
  import myfun4 from './../../../static/lib/portrait/js/sitelogo.js';
  import myfun5 from './../../../static/lib/portrait/js/html2canvas.min.js';
  import myfun6 from './../../../static/lib/portrait/js/verify-size.js';
  // import $ from 'jquery';
  export default {
    name: 'portrait',
    data() {
      return {};
    },
    mounted() {
      let _this = this;
      $('#avatarInput').on('change', function (e) {
        var filemaxsize = 1024 * 5; //5M
        var target = $(e.target);
        var Size = target[0].files[0].size / 1024;
        if (Size > filemaxsize) {
          alert("图片过大，请重新选择!");
          $(".avatar-wrapper").children().remove;
          return false;
        }
        if (!this.files[0].type.match(/image.*/)) {
          alert('请选择正确的图片!');
        } else {
          var filename = document.querySelector("#avatar-name");
          var texts = document.querySelector("#avatarInput").value;
          var teststr = texts;
          let testend = teststr.match(/[^\\]+\.[^\(]+/i);
          filename.innerHTML = testend;
        }
      });
    },
    methods: {
      confirm: function () {
        var img_lg = document.getElementById('imageHead');
        // 截图小的显示框内的内容
        html2canvas(img_lg, {
          allowTaint: true,
          taintTest: false,
          onrendered: function (canvas) {
            canvas.id = "mycanvas";
            //生成base64图片数据
            var dataUrl = canvas.toDataURL("other/jpeg");
            var newImg = document.createElement("img");
            newImg.src = dataUrl;
            imagesAjax(dataUrl)
          }
        });

        function imagesAjax(src) {
          let imgBase64 = {};
          imgBase64.base64Str = src;
          imgBase64.UserID = JSON.parse(window.localStorage.getItem("user")).UserID;
          $.ajax({
            url: 'http://127.0.0.1:8081/me/File/File_Upload_base64',
            // url: 'http://www.myjy.biz:8081/me/File/File_Upload_base64', 
            // url: 'http://172.16.0.222:8081/me/File/File_Upload_base64',
            data: imgBase64,
            type: "POST",
            dataType: 'json',
            crossDomain: true,
            xhrFields: {
              withCredentials: true
            },
            success: function (re) {
              let path = re.Data.path + re.Data.fileName;
              if (re.Status == 200) {
                $('.user_pic img').attr('src', path);
                let user = JSON.parse(window.localStorage.getItem("user"));
                user.FilePath = 'http://127.0.0.1:8081/' + path;
                window.localStorage.setItem('user', JSON.stringify(user));
              } else {
                this.$layer.alert("图片上传失败!");
              }
            }
          });

        }
      }
    }
  };

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./../../../static/lib/portrait/css/bootstrap.css";
  @import "./../../../static/lib/portrait/css/cropper.min.css";
  @import "./../../../static/lib/portrait/css/sitelogo.css";
  @import "https://cdn.bootcss.com/font-awesome/4.6.0/css/font-awesome.min.css";
  .modal-header {
    line-height: 68px;
    padding: 20px 15px;
  }

  .modal-lg {
    width: 704px;
  }

  .fa-save:before,
  .fa-floppy-o:before {
    content: ' ';
  }

  .avatar-body {
    padding: 0;
  }

  /* .avatar-preview {} */

  .preview-lg {
    border-radius: 50% !important;
  }

  .cropper-view-box {
    outline: 1px solid #f8e71c !important;
    outline-color: #f8e71c !important;
    outline-style: dashed !important;
    border-radius: 50% !important;
    border: 1px solid #f8e71c !important;
  }

  .cropper-point {
    background-color: #f8e81c !important;
  }

  .cropper-point.point-se:before {
    background-color: #f8e81c !important;
  }

  .modal-title {
    font-size: 16px;
    color: #000;
  }

  .modal-header .close {
    margin-top: -12px;
    font-size: 45px;
    font-weight: 100;
  }

  /* .uploading_btn {} */

  .preview_head {
    font-size: 16px;
    color: #656565;
    text-align: center
  }

  .uploading_btn {
    border: none;
    outline: none;
    background: transparent;
    padding-top: 20px;
    color: #f6a623;
    font-size: 20px;
    height: auto !important;
    padding-bottom: 20px;
  }

  .row.avatar-btns {
    margin: 0;
    text-align: center;
    padding: 24px 0 10px;
  }

  .row.avatar-btns .left_btn_area {
    text-align: right;
  }

  .row.avatar-btns .right_btn_area {
    text-align: left;
  }

  .row.avatar-btns .avatar_btn {
    display: inline-block;
    width: 130px;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    border-radius: 50px;
    border: 2px solid #979797;
    outline: none;
    background-color: transparent;
    color: #656565;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease;
    text-decoration: none;
    cursor: pointer;
    text-align: center
  }

  .row.avatar-btns .avatar_btn:hover {
    background: #f24d4d;
    color: #fff;
    border-color: #f24d4d;
  }

  .avatar_split_line {
    margin-left: -15px;
    margin-right: -15px;
    width: 100%;
    height: 2px;
    background: #e5e5e5;
  }

</style>

<style>
  .preview-lg {
    border-radius: 50% !important;
  }

  .cropper-view-box {
    outline: 1px solid #f8e71c !important;
    outline-color: #f8e71c !important;
    outline-style: dashed !important;
    border-radius: 50% !important;
    border: 1px solid #f8e71c !important;
  }

  .cropper-point {
    background-color: #f8e81c !important;
  }

  .cropper-point.point-se:before {
    background-color: #f8e81c !important;
  }

</style>
