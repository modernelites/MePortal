<template>
        <div class="load_p">
            <div class="line_wrapper">
                <div class="line_wrapper_inner">
                    <span class="line_item top_line"></span>
                    <span class="line_item right_line"></span>
                    <span class="line_item bottom_line"></span>
                    <span class="line_item left_line"></span>
                    <div class="content_wrapper">
                        <div class="date_wrapper" id="date_wrapper">
                            <span class="hours" id="hours">23 &nbsp;:&nbsp; </span>
                            <span class="minutes" id="minutes">  59&nbsp;:&nbsp;</span>
                            <span class="seconds" id="seconds"> 59</span>
                        </div>
                        <div class="progress_wrapper">
                            <div class="progress_bar"></div>
                        </div>
                        <div class="logo_wrapper">
                            <img src="./../../assets/img/load_logo@2x.png" width="196" height="32">
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
export default {
    name: 'load',
    data() {
        return {};
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.load_p {
    width: 100%;
    height: 100%;
    background: url("./../../assets/img/load_bg_small.jpg") repeat;
    position: relative;
    min-height: 100%;
}

.content_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.content_wrapper .date_wrapper {
    text-align: center;
    font-size: 28px;
    color: #000;
    padding-bottom: 20px;
}

.progress_wrapper {
    margin-bottom: 28px;
    position: relative;
    overflow: hidden;
}

.progress_bar {
    height: 2px;
    width: 100%;
    background: #000;
    animation: myanimationbar 1s linear infinite forwards;
}

.content_wrapper .date_wrapper span {
    display: inline-block;
}

.load_p .line_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 96%;
    height: 96%;
    overflow: hidden;
}

.line_wrapper_inner {
    width: 100%;
    height: 100%;
    border: 6px solid #000;
}

.line_item {
    display: inline-block;
    position: absolute;
}

.top_line {
    width: 100%;
    top: 0;
    height: 6px;
    background: url("./../../assets/img/load_across@2x.jpg") repeat;
    left: 0;
    z-index: 2;
    animation: myanimationtop 1s linear infinite forwards;
}

.right_line {
    width: 6px;
    height: 100%;
    right: 0;
    animation: myanimationright 1s linear infinite forwards;
    background: url("./../../assets/img/load_vertical@2x.jpg") repeat;
}

.bottom_line {
    width: 100%;
    height: 6px;
    background: url("./../../assets/img/load_across@2x.jpg") repeat;
    bottom: 0;
    animation: myanimationbottom 1s linear infinite forwards;
}

.left_line {
    width: 6px;
    height: 100%;
    left: 0;
    animation: myanimationleft 1s linear infinite forwards;
    background: url("./../../assets/img/load_vertical@2x.jpg") repeat;
}

@keyframes myanimationbar {
    0% {
        transform: translateX(-100%)
    }
    100% {
        transform: translateX(100%)
    }
}

@keyframes myanimationtop {
    0% {
        transform: translateX(-100%)
    }
    100% {
        transform: translateX(100%)
    }
}

@keyframes myanimationright {
    0% {
        transform: translateY(-100%)
    }
    100% {
        transform: translateY(100%)
    }
}

@keyframes myanimationbottom {
    0% {
        transform: translateX(100%)
    }
    100% {
        transform: translateX(-100%)
    }
}

@keyframes myanimationleft {
    0% {
        transform: translateY(100%)
    }
    100% {
        transform: translateY(-100%)
    }
}
</style>
