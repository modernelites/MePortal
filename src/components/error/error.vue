<template>
    <div class="error_p">
        <div class="error_p_wrapper">
            <div class="content clearfix">
                <div class="content_left">
                    <img src="./../../assets/img/error@2x.png" width="328" height="476">
                </div>
                <div class="content_right">
                    <h1 class="title_1">出错了 !</h1>
                    <h3 class="title_3">这个页面打不开了 </h3>
                    <div class="btn_wrapper">
                        <a href="javascript:;" class="refresh_btn btn"> 刷新页面</a>
                        <a href="#/home" class="back_btn btn">返回首页</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'error',
    data() {
        return {};
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error_p {
    background: #f7f7f7;
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 152px;
}

.error_p_wrapper {
    width: 600px;
    margin: 0 auto;
}

.error_p_wrapper .content {
    width: 600px;
}

.error_p .content_left {
    width: 328px;
    float: left;
}

.error_p .content_right {
    width: 272px;
    padding-left: 18px;
    float: left;
}

.error_p .content_right .title_1 {
    font-size: 60px;
    color: #000;
    font-weight: bold;
    padding-top: 12px;
    margin-bottom: 30px
}

.error_p .content_right .title_3 {
    font-size: 24px;
    color: #000;
    font-weight: bold;
    margin-bottom: 66px;
}

.error_p .content_right .btn_wrapper {
    font-size: 0;
}

.error_p .content_right .btn {
    display: inline-block;
    font-size: 12px;
    color: #000;
    width: 86px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border: 2px solid #000;
    font-weight: 500;
    transition: all .3s ease;
}

.error_p .content_right .btn:hover {
    background: #000;
    color: #fff;
}

.error_p .content_right .back_btn {
    margin-left: 22px;
}
</style>
