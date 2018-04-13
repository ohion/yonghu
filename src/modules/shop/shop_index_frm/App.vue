<template>
  <page>
    <div slot='head'>
      <top-bar title='购物车' :right='right' :left='left'></top-bar>
    </div>
   

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

  import userImg from 'common/images/user.jpg';

  import upLoad from 'common/mixins/uploadimg';
  import {mapState, mapActions} from 'vuex';
  import store from '../../../store/index';

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
        cartlist: [],
        hotlist: []

      };
    },
    computed: mapState([
      // 映射 this.cartlist 为 store.state.cartlist
      'cartlist'
    ]),
    methods: {
      ...mapActions({
        _init: 'getCartList' // 将 `this._init()` 映射为 `this.$store.dispatch('getCartList')`
      }),
      _init () {
        const key = window.localStorage.getItem('key');
        console.log(key);
      },
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
      this._init();
    },
    store

  };
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'></style>
