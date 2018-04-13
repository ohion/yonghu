import 'common/js/global';
import Vue from 'vue';
import App from './App';
import {apiReady} from 'common/js/native';

/* eslint-disable no-new */
apiReady().then(() => {
  new Vue({
    el: '#app',
    render: h => h(App)
  });
});
