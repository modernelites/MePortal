<template>
    <div class="course_mask">
        <div class="course_shade">这是遮罩层</div>
        <div class="course_modal_box">
            <div class="modal_box_top">
                <h3 class="title_3">选择课程</h3>
                <a href="javascript:;" class="close_btn"></a>
            </div>
            <div class="modal_box_middle">
                <form action="" method="">
                    <label>
                        <input type="radio" name="radio" class="radio radio_1">
                        <span class="text">智慧家长</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" class="radio radio_2">
                        <span class="text">96期青少年领袖特训营</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" class="radio radio_3">
                        <span class="text">摩英性格分析</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" class="radio radio_4 assistant">
                        <span class="text">助教</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" class="radio radio_5 volunteer">
                        <span class="text">义工</span>
                    </label>
                </form>
            </div>
            <div class="modal_box_bottom">
                <input type="submit" name="submit" class="submit_btn btn" value="确认">
                <input type="reset" name="reset" class="reset_btn btn" value="取消">
            </div>
        </div>
</template>
<script>
export default {
    name: 'course_mask',
    data() {
        return {};
    },
    created() {
        
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
