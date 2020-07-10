import { d as defineComponent } from './index.b9d31c51.js';

const Demo0 = {};
if (Demo0.methods) {
                      Demo0.methods.source = function () {
                        return "<i class=\"el-icon-edit\"></i>\n{{' '}}\n<i class=\"el-icon-share\"></i>\n{{' '}}\n<i class=\"el-icon-delete\"></i>\n{{' '}}\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n"
                      };
                    } else {
                      Demo0.methods = {
                        source() {
                          return "<i class=\"el-icon-edit\"></i>\n{{' '}}\n<i class=\"el-icon-share\"></i>\n{{' '}}\n<i class=\"el-icon-delete\"></i>\n{{' '}}\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button>\n"
                        },
                      };
                    }
Demo0.template = "<Preview :source=\"source()\">\n                        <i class=\"el-icon-edit\"></i>\n{{' '}}\n<i class=\"el-icon-share\"></i>\n{{' '}}\n<i class=\"el-icon-delete\"></i>\n{{' '}}\n<el-button type=\"primary\" icon=\"el-icon-search\">搜索</el-button> \n                      </Preview>";
const icons = [
    'platform-eleme',
    'eleme',
    'delete-solid',
    'delete',
    's-tools',
    'setting',
    'user-solid',
    'user',
    'phone',
    'phone-outline',
    'more',
    'more-outline',
    'star-on',
    'star-off',
    's-goods',
    'goods',
    'warning',
    'warning-outline',
    'question',
    'info',
    'remove',
    'circle-plus',
    'success',
    'error',
    'zoom-in',
    'zoom-out',
    'remove-outline',
    'circle-plus-outline',
    'circle-check',
    'circle-close',
    's-help',
    'help',
    'minus',
    'plus',
    'check',
    'close',
    'picture',
    'picture-outline',
    'picture-outline-round',
    'upload',
    'upload2',
    'download',
    'camera-solid',
    'camera',
    'video-camera-solid',
    'video-camera',
    'message-solid',
    'bell',
    's-cooperation',
    's-order',
    's-platform',
    's-fold',
    's-unfold',
    's-operation',
    's-promotion',
    's-home',
    's-release',
    's-ticket',
    's-management',
    's-open',
    's-shop',
    's-marketing',
    's-flag',
    's-comment',
    's-finance',
    's-claim',
    's-custom',
    's-opportunity',
    's-data',
    's-check',
    's-grid',
    'menu',
    'share',
    'd-caret',
    'caret-left',
    'caret-right',
    'caret-bottom',
    'caret-top',
    'bottom-left',
    'bottom-right',
    'back',
    'right',
    'bottom',
    'top',
    'top-left',
    'top-right',
    'arrow-left',
    'arrow-right',
    'arrow-down',
    'arrow-up',
    'd-arrow-left',
    'd-arrow-right',
    'video-pause',
    'video-play',
    'refresh',
    'refresh-right',
    'refresh-left',
    'finished',
    'sort',
    'sort-up',
    'sort-down',
    'rank',
    'loading',
    'view',
    'c-scale-to-original',
    'date',
    'edit',
    'edit-outline',
    'folder',
    'folder-opened',
    'folder-add',
    'folder-remove',
    'folder-delete',
    'folder-checked',
    'tickets',
    'document-remove',
    'document-delete',
    'document-copy',
    'document-checked',
    'document',
    'document-add',
    'printer',
    'paperclip',
    'takeaway-box',
    'search',
    'monitor',
    'attract',
    'mobile',
    'scissors',
    'umbrella',
    'headset',
    'brush',
    'mouse',
    'coordinate',
    'magic-stick',
    'reading',
    'data-line',
    'data-board',
    'pie-chart',
    'data-analysis',
    'collection-tag',
    'film',
    'suitcase',
    'suitcase-1',
    'receiving',
    'collection',
    'files',
    'notebook-1',
    'notebook-2',
    'toilet-paper',
    'office-building',
    'school',
    'table-lamp',
    'house',
    'no-smoking',
    'smoking',
    'shopping-cart-full',
    'shopping-cart-1',
    'shopping-cart-2',
    'shopping-bag-1',
    'shopping-bag-2',
    'sold-out',
    'sell',
    'present',
    'box',
    'bank-card',
    'money',
    'coin',
    'wallet',
    'discount',
    'price-tag',
    'news',
    'guide',
    'male',
    'female',
    'thumb',
    'cpu',
    'link',
    'connection',
    'open',
    'turn-off',
    'set-up',
    'chat-round',
    'chat-line-round',
    'chat-square',
    'chat-dot-round',
    'chat-dot-square',
    'chat-line-square',
    'message',
    'postcard',
    'position',
    'turn-off-microphone',
    'microphone',
    'close-notification',
    'bangzhu',
    'time',
    'odometer',
    'crop',
    'aim',
    'switch-button',
    'full-screen',
    'copy-document',
    'mic',
    'stopwatch',
    'medal-1',
    'medal',
    'trophy',
    'trophy-1',
    'first-aid-kit',
    'discover',
    'place',
    'location',
    'location-outline',
    'location-information',
    'add-location',
    'delete-location',
    'map-location',
    'alarm-clock',
    'timer',
    'watch-1',
    'watch',
    'lock',
    'unlock',
    'key',
    'service',
    'mobile-phone',
    'bicycle',
    'truck',
    'ship',
    'basketball',
    'football',
    'soccer',
    'baseball',
    'wind-power',
    'light-rain',
    'lightning',
    'heavy-rain',
    'sunrise',
    'sunrise-1',
    'sunset',
    'sunny',
    'cloudy',
    'partly-cloudy',
    'cloudy-and-sunny',
    'moon',
    'moon-night',
    'dish',
    'dish-1',
    'food',
    'chicken',
    'fork-spoon',
    'knife-fork',
    'burger',
    'tableware',
    'sugar',
    'dessert',
    'ice-cream',
    'hot-water',
    'water-cup',
    'coffee-cup',
    'cold-drink',
    'goblet',
    'goblet-full',
    'goblet-square',
    'goblet-square-full',
    'refrigerator',
    'grape',
    'watermelon',
    'cherry',
    'apple',
    'pear',
    'orange',
    'coffee',
    'ice-tea',
    'ice-drink',
    'milk-tea',
    'potato-strips',
    'lollipop',
    'ice-cream-square',
    'ice-cream-round'
  ];
  const Demo1 = {
    data() {
      return {
        icons
      }
    }
  };
if (Demo1.methods) {
                      Demo1.methods.source = function () {
                        return "<ul class=\"icon-list\">\n  <li v-for=\"name in icons\" :key=\"name\">\n    <span>\n      <i :class=\"'el-icon-' + name\"></i>\n      <span class=\"icon-name\">{{'el-icon-' + name}}</span>\n    </span>\n  </li>\n</ul>\n\n<script>\n  const icons = [\n    'platform-eleme',\n    'eleme',\n    'delete-solid',\n    'delete',\n    's-tools',\n    'setting',\n    'user-solid',\n    'user',\n    'phone',\n    'phone-outline',\n    'more',\n    'more-outline',\n    'star-on',\n    'star-off',\n    's-goods',\n    'goods',\n    'warning',\n    'warning-outline',\n    'question',\n    'info',\n    'remove',\n    'circle-plus',\n    'success',\n    'error',\n    'zoom-in',\n    'zoom-out',\n    'remove-outline',\n    'circle-plus-outline',\n    'circle-check',\n    'circle-close',\n    's-help',\n    'help',\n    'minus',\n    'plus',\n    'check',\n    'close',\n    'picture',\n    'picture-outline',\n    'picture-outline-round',\n    'upload',\n    'upload2',\n    'download',\n    'camera-solid',\n    'camera',\n    'video-camera-solid',\n    'video-camera',\n    'message-solid',\n    'bell',\n    's-cooperation',\n    's-order',\n    's-platform',\n    's-fold',\n    's-unfold',\n    's-operation',\n    's-promotion',\n    's-home',\n    's-release',\n    's-ticket',\n    's-management',\n    's-open',\n    's-shop',\n    's-marketing',\n    's-flag',\n    's-comment',\n    's-finance',\n    's-claim',\n    's-custom',\n    's-opportunity',\n    's-data',\n    's-check',\n    's-grid',\n    'menu',\n    'share',\n    'd-caret',\n    'caret-left',\n    'caret-right',\n    'caret-bottom',\n    'caret-top',\n    'bottom-left',\n    'bottom-right',\n    'back',\n    'right',\n    'bottom',\n    'top',\n    'top-left',\n    'top-right',\n    'arrow-left',\n    'arrow-right',\n    'arrow-down',\n    'arrow-up',\n    'd-arrow-left',\n    'd-arrow-right',\n    'video-pause',\n    'video-play',\n    'refresh',\n    'refresh-right',\n    'refresh-left',\n    'finished',\n    'sort',\n    'sort-up',\n    'sort-down',\n    'rank',\n    'loading',\n    'view',\n    'c-scale-to-original',\n    'date',\n    'edit',\n    'edit-outline',\n    'folder',\n    'folder-opened',\n    'folder-add',\n    'folder-remove',\n    'folder-delete',\n    'folder-checked',\n    'tickets',\n    'document-remove',\n    'document-delete',\n    'document-copy',\n    'document-checked',\n    'document',\n    'document-add',\n    'printer',\n    'paperclip',\n    'takeaway-box',\n    'search',\n    'monitor',\n    'attract',\n    'mobile',\n    'scissors',\n    'umbrella',\n    'headset',\n    'brush',\n    'mouse',\n    'coordinate',\n    'magic-stick',\n    'reading',\n    'data-line',\n    'data-board',\n    'pie-chart',\n    'data-analysis',\n    'collection-tag',\n    'film',\n    'suitcase',\n    'suitcase-1',\n    'receiving',\n    'collection',\n    'files',\n    'notebook-1',\n    'notebook-2',\n    'toilet-paper',\n    'office-building',\n    'school',\n    'table-lamp',\n    'house',\n    'no-smoking',\n    'smoking',\n    'shopping-cart-full',\n    'shopping-cart-1',\n    'shopping-cart-2',\n    'shopping-bag-1',\n    'shopping-bag-2',\n    'sold-out',\n    'sell',\n    'present',\n    'box',\n    'bank-card',\n    'money',\n    'coin',\n    'wallet',\n    'discount',\n    'price-tag',\n    'news',\n    'guide',\n    'male',\n    'female',\n    'thumb',\n    'cpu',\n    'link',\n    'connection',\n    'open',\n    'turn-off',\n    'set-up',\n    'chat-round',\n    'chat-line-round',\n    'chat-square',\n    'chat-dot-round',\n    'chat-dot-square',\n    'chat-line-square',\n    'message',\n    'postcard',\n    'position',\n    'turn-off-microphone',\n    'microphone',\n    'close-notification',\n    'bangzhu',\n    'time',\n    'odometer',\n    'crop',\n    'aim',\n    'switch-button',\n    'full-screen',\n    'copy-document',\n    'mic',\n    'stopwatch',\n    'medal-1',\n    'medal',\n    'trophy',\n    'trophy-1',\n    'first-aid-kit',\n    'discover',\n    'place',\n    'location',\n    'location-outline',\n    'location-information',\n    'add-location',\n    'delete-location',\n    'map-location',\n    'alarm-clock',\n    'timer',\n    'watch-1',\n    'watch',\n    'lock',\n    'unlock',\n    'key',\n    'service',\n    'mobile-phone',\n    'bicycle',\n    'truck',\n    'ship',\n    'basketball',\n    'football',\n    'soccer',\n    'baseball',\n    'wind-power',\n    'light-rain',\n    'lightning',\n    'heavy-rain',\n    'sunrise',\n    'sunrise-1',\n    'sunset',\n    'sunny',\n    'cloudy',\n    'partly-cloudy',\n    'cloudy-and-sunny',\n    'moon',\n    'moon-night',\n    'dish',\n    'dish-1',\n    'food',\n    'chicken',\n    'fork-spoon',\n    'knife-fork',\n    'burger',\n    'tableware',\n    'sugar',\n    'dessert',\n    'ice-cream',\n    'hot-water',\n    'water-cup',\n    'coffee-cup',\n    'cold-drink',\n    'goblet',\n    'goblet-full',\n    'goblet-square',\n    'goblet-square-full',\n    'refrigerator',\n    'grape',\n    'watermelon',\n    'cherry',\n    'apple',\n    'pear',\n    'orange',\n    'coffee',\n    'ice-tea',\n    'ice-drink',\n    'milk-tea',\n    'potato-strips',\n    'lollipop',\n    'ice-cream-square',\n    'ice-cream-round'\n  ]\n  export default {\n    data() {\n      return {\n        icons\n      }\n    }\n  }\n</script>\n"
                      };
                    } else {
                      Demo1.methods = {
                        source() {
                          return "<ul class=\"icon-list\">\n  <li v-for=\"name in icons\" :key=\"name\">\n    <span>\n      <i :class=\"'el-icon-' + name\"></i>\n      <span class=\"icon-name\">{{'el-icon-' + name}}</span>\n    </span>\n  </li>\n</ul>\n\n<script>\n  const icons = [\n    'platform-eleme',\n    'eleme',\n    'delete-solid',\n    'delete',\n    's-tools',\n    'setting',\n    'user-solid',\n    'user',\n    'phone',\n    'phone-outline',\n    'more',\n    'more-outline',\n    'star-on',\n    'star-off',\n    's-goods',\n    'goods',\n    'warning',\n    'warning-outline',\n    'question',\n    'info',\n    'remove',\n    'circle-plus',\n    'success',\n    'error',\n    'zoom-in',\n    'zoom-out',\n    'remove-outline',\n    'circle-plus-outline',\n    'circle-check',\n    'circle-close',\n    's-help',\n    'help',\n    'minus',\n    'plus',\n    'check',\n    'close',\n    'picture',\n    'picture-outline',\n    'picture-outline-round',\n    'upload',\n    'upload2',\n    'download',\n    'camera-solid',\n    'camera',\n    'video-camera-solid',\n    'video-camera',\n    'message-solid',\n    'bell',\n    's-cooperation',\n    's-order',\n    's-platform',\n    's-fold',\n    's-unfold',\n    's-operation',\n    's-promotion',\n    's-home',\n    's-release',\n    's-ticket',\n    's-management',\n    's-open',\n    's-shop',\n    's-marketing',\n    's-flag',\n    's-comment',\n    's-finance',\n    's-claim',\n    's-custom',\n    's-opportunity',\n    's-data',\n    's-check',\n    's-grid',\n    'menu',\n    'share',\n    'd-caret',\n    'caret-left',\n    'caret-right',\n    'caret-bottom',\n    'caret-top',\n    'bottom-left',\n    'bottom-right',\n    'back',\n    'right',\n    'bottom',\n    'top',\n    'top-left',\n    'top-right',\n    'arrow-left',\n    'arrow-right',\n    'arrow-down',\n    'arrow-up',\n    'd-arrow-left',\n    'd-arrow-right',\n    'video-pause',\n    'video-play',\n    'refresh',\n    'refresh-right',\n    'refresh-left',\n    'finished',\n    'sort',\n    'sort-up',\n    'sort-down',\n    'rank',\n    'loading',\n    'view',\n    'c-scale-to-original',\n    'date',\n    'edit',\n    'edit-outline',\n    'folder',\n    'folder-opened',\n    'folder-add',\n    'folder-remove',\n    'folder-delete',\n    'folder-checked',\n    'tickets',\n    'document-remove',\n    'document-delete',\n    'document-copy',\n    'document-checked',\n    'document',\n    'document-add',\n    'printer',\n    'paperclip',\n    'takeaway-box',\n    'search',\n    'monitor',\n    'attract',\n    'mobile',\n    'scissors',\n    'umbrella',\n    'headset',\n    'brush',\n    'mouse',\n    'coordinate',\n    'magic-stick',\n    'reading',\n    'data-line',\n    'data-board',\n    'pie-chart',\n    'data-analysis',\n    'collection-tag',\n    'film',\n    'suitcase',\n    'suitcase-1',\n    'receiving',\n    'collection',\n    'files',\n    'notebook-1',\n    'notebook-2',\n    'toilet-paper',\n    'office-building',\n    'school',\n    'table-lamp',\n    'house',\n    'no-smoking',\n    'smoking',\n    'shopping-cart-full',\n    'shopping-cart-1',\n    'shopping-cart-2',\n    'shopping-bag-1',\n    'shopping-bag-2',\n    'sold-out',\n    'sell',\n    'present',\n    'box',\n    'bank-card',\n    'money',\n    'coin',\n    'wallet',\n    'discount',\n    'price-tag',\n    'news',\n    'guide',\n    'male',\n    'female',\n    'thumb',\n    'cpu',\n    'link',\n    'connection',\n    'open',\n    'turn-off',\n    'set-up',\n    'chat-round',\n    'chat-line-round',\n    'chat-square',\n    'chat-dot-round',\n    'chat-dot-square',\n    'chat-line-square',\n    'message',\n    'postcard',\n    'position',\n    'turn-off-microphone',\n    'microphone',\n    'close-notification',\n    'bangzhu',\n    'time',\n    'odometer',\n    'crop',\n    'aim',\n    'switch-button',\n    'full-screen',\n    'copy-document',\n    'mic',\n    'stopwatch',\n    'medal-1',\n    'medal',\n    'trophy',\n    'trophy-1',\n    'first-aid-kit',\n    'discover',\n    'place',\n    'location',\n    'location-outline',\n    'location-information',\n    'add-location',\n    'delete-location',\n    'map-location',\n    'alarm-clock',\n    'timer',\n    'watch-1',\n    'watch',\n    'lock',\n    'unlock',\n    'key',\n    'service',\n    'mobile-phone',\n    'bicycle',\n    'truck',\n    'ship',\n    'basketball',\n    'football',\n    'soccer',\n    'baseball',\n    'wind-power',\n    'light-rain',\n    'lightning',\n    'heavy-rain',\n    'sunrise',\n    'sunrise-1',\n    'sunset',\n    'sunny',\n    'cloudy',\n    'partly-cloudy',\n    'cloudy-and-sunny',\n    'moon',\n    'moon-night',\n    'dish',\n    'dish-1',\n    'food',\n    'chicken',\n    'fork-spoon',\n    'knife-fork',\n    'burger',\n    'tableware',\n    'sugar',\n    'dessert',\n    'ice-cream',\n    'hot-water',\n    'water-cup',\n    'coffee-cup',\n    'cold-drink',\n    'goblet',\n    'goblet-full',\n    'goblet-square',\n    'goblet-square-full',\n    'refrigerator',\n    'grape',\n    'watermelon',\n    'cherry',\n    'apple',\n    'pear',\n    'orange',\n    'coffee',\n    'ice-tea',\n    'ice-drink',\n    'milk-tea',\n    'potato-strips',\n    'lollipop',\n    'ice-cream-square',\n    'ice-cream-round'\n  ]\n  export default {\n    data() {\n      return {\n        icons\n      }\n    }\n  }\n</script>\n"
                        },
                      };
                    }
Demo1.template = "<Preview :source=\"source()\">\n                        <ul class=\"icon-list\">\n  <li v-for=\"name in icons\" :key=\"name\">\n    <span>\n      <i :class=\"'el-icon-' + name\"></i>\n      <span class=\"icon-name\">{{'el-icon-' + name}}</span>\n    </span>\n  </li>\n</ul> \n                      </Preview>";
            
          const __script = defineComponent({
            components: {
              Demo0,Demo1
            },
            template: "<h2>Icon 图标</h2>\n<p>提供了一套常用的图标集合。</p>\n<h3>使用方法</h3>\n<p>直接通过设置类名为 <code>el-icon-iconName</code> 来使用即可。例如：</p>\n<div class=\"demo\">\n<pre></pre><Demo0 />\n</div>\n<h3>图标集合</h3>\n<pre></pre><Demo1 />\n"
          });

export default __script;
