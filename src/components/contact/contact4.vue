<template>
  <div>
    <dl class="content_main_single feedback_single active">
      <p class="info">如果您对我们的工作和服务有任何意见与建议，请填写一下内容进行反馈 ，您的反馈对我们非常重要。为了使您的反馈得到及时回复和处理，请务必完整填写一下信息。谢谢！
      </p>
      <div class="feedback_box">
        <label class="top_area">
          <span class="feedback_object">反馈对象:</span>
          <select class="select_object">
            <option value="0">上海摩英教育</option>
            <option value="1">摩英教育山东分校</option>
            <option value="2">摩英教育无锡分校</option>
            <option value="3">摩英教育温州分校</option>
            <option value="4">摩英无敌熊少儿英语</option>
          </select>
        </label>
        <label class="middile_area">
          <span class="versions">内容：</span>
          <textarea name="textarea" class="textarea"></textarea>
          <span class="tips">注意：最大字数为5000字</span>
        </label>
      </div>
      <div class="btn_wrapper">
        <input type="submit" name="submit" class="submit_btn btn" value="提交">
        <input type="reset" name="reset" class="reset_btn btn" value="重置">
      </div>
    </dl>


  </div>

</template>
