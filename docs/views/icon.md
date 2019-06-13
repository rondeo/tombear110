### 图标 Icon

> 在组件内传入icon值，即可得到对应图标

<div class="component-wrapper">
    <tg-icon icon="clock mr5" title="clock" />
    <tg-icon icon="clock-fill mr5" title="clock-fill" />
    <tg-icon icon="news mr5" title="news" />
    <tg-icon icon="news-fill mr5" title="news-fill" />
    <tg-icon icon="delete mr5" title="delete" />
    <tg-icon icon="delete-fill mr5" title="delete-fill" />
    ...
</div>

```vue
<tg-icon icon="clock" title="clock" />
<tg-icon icon="clock-fill" title="clock-fill" />
```

#### API
|属性|说明|类型|默认值|
| :-----| :---- | :---- | :---- |
|icon|图标内容|String|-|

<script>
    import Vue from 'vue'
    import '@scss/tiger.scss'
    import Icon from '@src/components/icon'
    import '@/scss/docs.scss'
    Vue.use(Icon)

    export default {}
</script>
