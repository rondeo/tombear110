<template>
    <i
        class="tiger-icon"
        :class="`icon-${icon}`" />
</template>

<script>
export default {
    name: 'tg-icon',
    props: {
        icon: String
    }
}
</script>
