<template>
  <section class="vc-page" ref="page">
    <header class="vc-page-top" ref="top">
      <slot name="head"></slot>
    </header>
    <section class="vc-page-content" ref="content">
      <slot></slot>
    </section>
    <footer class="vc-page-footer" ref="foot">

  
      <slot name="foot"></slot>
    </footer>
    <div id="footer" class="border-t">
      <ul class="flex-wrap" >
        <li tapmode="hover" onclick="randomSwitchBtn( this,0);" class="flex-con active" >
          首页
        </li>
        <li tapmode="hover" onclick="randomSwitchBtn( this,1 );" class="flex-con" >
          分类
        </li>
        <li tapmode="hover" onclick="randomSwitchBtn( this,2 );" class="flex-con" >
          购物车
        </li>
        <li tapmode="hover" onclick="randomSwitchBtn( this,3 );" class="flex-con" >
          微社区
        </li>
        <li tapmode="hover" onclick="randomSwitchBtn( this,4 );" class="flex-con" >
          会员
        </li>
      </ul>
      </div>
  </section>
</template>

<script type="text/ecmascript-6">
  import {open} from 'common/js/native';
  export default {
    data() {
      return {
        pageIndex: 0,
        body_h: 40,
        header_h: 40,
        footer_h: 40,
        content_h: 200

      };
    },
    methods: {
      _scal () {
        this.body_h = this.$refs.page.offsetHeight;
        this.header_h = this.$refs.top.offsetHeight;
        this.footer_h = this.$refs.foot.offsetHeight;
        this.$refs.content.style.height = this.body_h - this.header_h - this.footer_h + 'px';
        this.content_h = this.body_h - this.header_h - this.footer_h;
      },
      randomSwitchBtn (obj, index) {
        if (index === this.pageIndex) {
          return;
        } else {
          this.pageIndex = index;
        }
        var $footerBar = window.api.domAll('#footer li'), eHeaderLis = window.api.domAll('header li');
        var i = 0, len = $footerBar.length;
        var curLi = $footerBar[index];
        for (i; i < len; i++) {
          var thisLi = $footerBar[i];
          if (thisLi === curLi) {
            window.api.addCls(thisLi, 'active');
            window.api.addCls(eHeaderLis[index], 'active');
            continue;
          } else {
            if (window.api.hasCls(thisLi, 'active')) {
              window.api.removeCls(thisLi, 'active');
              window.api.removeCls(eHeaderLis[i], 'active');
            }
          }
        }
        this.switchFrame(index);
      },
      switchFrame (index) {
        this.pageIndex = index;
        this.hideFrames(); // index 0:首页，1购物车：，2：，3:我的
        switch (index) {
          case 0:
            open({
              name: 'frame_main',
              url: './frame_main.html',
              reload: true,
              rect: {
                x: 0,
                y: 0,
                w: 'auto',
                h: this.body_h - this.footer_h
              },
              bounces: false
            });
            break;
          case 1:
            open({
              name: 'classify_manage',
              url: './classify/classify_manage.html',
              rect: {
                x: 0,
                y: this.header_h,
                w: 'auto',
                h: this.content_h
              },
              bounces: true,
              reload: true
            });
            break;
          case 2:
            open({
              name: 'cart_manage',
              url: './cart_manage.html',
              pageParam: {
                type: 1
              },
              rect: {
                x: 0,
                y: this.header_h,
                w: 'auto',
                h: this.content_h
              },
              bounces: false
            });
            break;
          case 3:
            //
            open({
              name: 'shop_manage',
              url: './shop_manage.html',
              rect: {
                x: 0,
                y: this.header_h,
                w: 'auto',
                h: this.content_h
              },
              bounces: false
            });
            break;
          case 4:
            // 会员中心
            open({
              name: 'member_manage',
              url: './member/member_manage.html',
              rect: {
                x: 0,
                y: this.header_h,
                w: 'auto',
                h: this.content_h
              },
              bounces: false
            });
            break;
        }
      },
      hideFrames () {
        window.api.setFrameAttr({
          name: 'frame_main',
          hidden: true
        });
        window.api.setFrameAttr({
          name: 'classify_manage',
          hidden: true
        });
        window.api.setFrameAttr({
          name: 'cart_manage',
          hidden: true
        });
        window.api.setFrameAttr({
          name: 'shop_manage',
          hidden: true
        });
        window.api.setFrameGroupAttr({
          name: 'member_manage',
          hidden: true
        });
      }

    },
    mounted () {
      this.$nextTick(() => {
        this._scal();
      });
    },
    components: {}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .vc-page
    height: inherit
    position: relative
    overflow-y: hidden
    overflow-x: hidden
  .vc-page-content
    position: relative
</style>
