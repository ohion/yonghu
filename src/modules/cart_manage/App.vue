<template>
  <page>
    <div slot='head'>
      <top-bar title='购物车' :right='right' :left='left'></top-bar>
    </div>
    <!-- 购物车开始 -->
    <div id='content'>
      <!--购物车列表-->
   <!--    <div class='y-car'>
        <div class='y-car-lists' v-for='item in cartlist'>
          <div class='y-c-lb'>
            <div class='carchose y-t-chose'>
              <input name='newslist' type='checkbox' id='carchoseInput0' value='1'>
              <label for='carchoseInput0'></label>
            </div>
            <div class='y-mjs y-p-fw y-tj-padding'>
              <img :src='' class='y-store-logo'>
              <b class='y-q-btit'>智慧优选</b><span>免运费</span>
              <i class='am-icon-angle-right y-am-right'></i>
            </div>
          </div>
          <div class='y-c-list'>
            <div class='carchose'>
              <input name='newslist' type='checkbox' id='carchoseInput1' value='2'>
              <label for='carchoseInput1'></label>
            </div>
            <img :src=''>
            <div class='y-c-content'>
              <div class='y-c-tit y-c-bigtit'>卫龙啦啦啦啦啦啦啦啦啦啦啦</div>
              <div class='y-c-tit'><span>颜色：红色</span><span>尺码：XL</span></div>
              <div class='y-c-tit'>售价：<font color='#fe5a59'>￥44.00</font></div>
              <div class='size'>
                <a class='c-min c-btn'>-</a><input class='text_box y-b-input' type='text' value='1'><a class='c-add c-btn'>+</a>
              </div>
            </div>
            <i class='am-icon-trash-o y-car-delete'></i>
          </div>

        </div>
      </div>
      <div class='y-c-js'>
        <div class='am-g'>
          <div class='am-u-sm-3'>
            <div class='carchose'>
              <input name='' type='checkbox' id='carchoseInput6' value='' class='allselect'>
              <label for='carchoseInput6'></label>
            </div>
            <span class='y-qx'>全选</span>
          </div>
          <div class='am-u-sm-4 y-c-hide'>
            <span class='y-c-zj'>总计：<font>￥20000</font></span>
          </div>
          <div class='am-u-sm-2 y-c-hide'>
            <span class='y-bhyf'>不含运费</span>
          </div>
        </div>
      </div>-->
      <!-- 购物车为空 -->
      <div class='nocontent' style='display:none'>
        <!-- <img src='../images/tab_shopping1.png' alt='购物车为空'> -->
        <p>购物车为空</p>
      </div>


      </div>
    </div> 
<!-- 购物车结束 -->

    <div>
      <!--<loader/>-->
      <!--<spinner indeterminate></spinner>-->
    </div>
  </page>
</template>

<script type='text/ecmascript-6'>
  import {open} from 'common/js/native';
  import Page from 'components/page/page';
  import TopBar from 'base/top-bar/top-bar';

  import Loading from 'base/loading/loading';
  import Loader from 'base/loading/loader';
  import LoaderRack from 'base/loading/loader-rack';
  import Spinner from 'base/loading/spinner';
  import VcImage from 'base/image/vc-image';
  import Avatar from 'base/avatar/avatar';
  // import toast from '../../common/plugins/toast';

  import userImg from 'common/images/user.jpg';

  import upLoad from 'common/mixins/uploadimg';
  import {mapState, mapActions} from 'vuex';
  import store from '../../store/index';

  export default {
    mixins: [upLoad],
    data() {
      return {
        left: {
          icon: 'icon-searchlist',
          handle() {
            open({
              name: 'search',
              url: './search.html'
            });
          }
        },
        right: [{
          icon: 'icon-settings',
          handle() {
            open({
              name: 'repairfill',
              url: './user.html'
            });
          }
        }],
        ac: '2017-11-06 00:02:42',
        s: userImg,
        bimg: 'http://ozlfpjl4f.bkt.clouddn.com/blog/ghost/bd76dfbd832934ff1f0b32abce74f0a1.png',
        // cartlist: [],
        hotlist: []

      };
    },
    computed: mapState([
      // 映射 this.cartlist 为 store.state.cartlist
      'cartlist'
    ]),
    methods: {
      ...mapActions({
        init: 'getCartList' // 将 `this._init()` 映射为 `this.$store.dispatch('getCartList')`
      }),
      // _init () {
      //   const key = window.localStorage.getItem('key');
      //   console.log(key);
      // },
      a() {
        this.$toast.loading('提交中');
      },
      b() {
        this.$toast.error('努力加载中');
      },
      c() {
        open({
          name: 'weixin',
          url: './upload.html'
        });
      },
      imgoutput(base64) {
        window.api.alert({msg: base64});
      }
    },
    components: {Page, TopBar, Loading, Loader, LoaderRack, Spinner, VcImage, Avatar},
    mounted () {
      this.init();
    },
    store

  };
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
