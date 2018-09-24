<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/">目录</router-link>
        </li>
        <li>
          关于我
        </li>
      </ul>
    </header>
    <div class="main">
      <router-view></router-view>
    </div>
    <footer>
      © sunyuu
    </footer>
    <div >
      <div class="music-icon" @click="isShowMusic = !isShowMusic"></div>
      <iframe  class="music" v-show="isShowMusic" frameborder="no" border="0" marginwidth="0" marginheight="0" width=280 height=400 src="//music.163.com/outchain/player?type=0&id=2435468007&auto=0&height=400"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isShowMusic: false
    }
  },
  mounted() {}
}
</script>

<style lang="scss">
@import url('./assets/style/base.scss');
@import url('./assets/style/nprogress.scss');

header {
  height: 160px;
  overflow: hidden;

  ul {
    width: 800px;
    margin: 100px auto 0;

    li {
      float: left;
      font-size: 18px;
      margin-right: 20px;

      a {
        color: rgba($color: #000000, $alpha: 0.85);

        &:hover {
          color: #ff5d3d;
        }
      }
    }
  }
}

.main {
  width: 800px;
  margin: 0 auto;
}

footer {
  margin-top: 100px;
  text-align: center;
  font-size: 16px;
}

.music {
  position: fixed;
  top: 150px;
  right: 20px;

  &-icon {
    position: fixed;
    top: 100px;
    right: 30px;
    width: 30px;
    height: 30px;
    background: url(./assets/images/icon_music.png) center/cover no-repeat;
    cursor: pointer;
  }
}
</style>
