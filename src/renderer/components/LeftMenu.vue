<template>
  <div class="leftContent">
    <ul>
      <li>
        <span>在线音乐</span>
        <i class="el-icon-chat-line-square"></i>
        <span>反馈</span>
      </li>
      <li>
        <i class="el-icon-magic-stick"></i>
        <span>推荐</span>
      </li>
      <li>
        <i class="el-icon-monitor"></i>
        <span>电台</span>
      </li>
      <li>
        <i class="el-icon-notebook-2"></i>
        <span>歌单</span>
      </li>
      <li>
        <i class="el-icon-trophy"></i>
        <span>排行榜</span>
      </li>
      <li>
        <i class="el-icon-coordinate"></i>
        <span>歌手</span>
      </li>
      <li>
        <i class="el-icon-mic"></i>
        <span>mv</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
li {
  list-style: none;
  padding-bottom: 10px;
  font-size: 14px;
}
.leftContent {
  background-color: gainsboro;
  padding: 40px;
}
li:nth-child(1) {
  font-size: 12px;
  color: gray;
}
li:nth-child(1) > span:nth-child(1) {
  padding-right: 60px;
}
</style>