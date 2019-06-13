### 开关 Switch
<div class="component-wrapper">
    <tg-switch label="是否展开" v-model="expand"></tg-switch>
</div>

<div class="component-wrapper">
    <tg-switch v-model="expand" size="small" onText="开" offText="关"><tg-icon icon="news" class="mr5" /></tg-switch>
</div>

```vue
<tg-switch label="是否展开" v-model="expand"></tg-switch>
<tg-switch v-model="expand" size="small" onText="开" offText="关"><tg-icon icon="news" class="mr5" /></tg-switch>
```

#### API
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|label|标签|String|-|
|v-model指令|和switch的value值双向绑定|Boolean|false|
|size|开关尺寸，可选值：large / normal / small|String|normal|
|onText|开启状态显示的文本|String|-|
|offText|关闭状态显示的文本|String|-|

<script>
    import Vue from 'vue'
    import AngeUI from '@src'
    import '@/scss/docs.scss'
    Vue.use(AngeUI)

    export default {
        data () {
            return {
                expand: false
            }
        }
    }
</script>
