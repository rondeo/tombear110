<template>
    <span class="tiger-switch">
        <label class="tiger-switch-label" v-if="label" :for="id">{{ label }}</label>
        <slot />
        <div class="tiger-switch-main" :class="[size, {active: model}]">
            <input type="checkbox"
                   class="tiger-switch-input"
                   v-model="model"
                   :name="id"
                   :disabled="disabled"
                   @click.stop="() => {}"
                   @change="$emit('change')">
            <span class="tiger-switch-box" :class="size" />
        </div>
        <span v-if="text" class="tiger-switch-value" :class="size">{{ text }}</span>
    </span>
</template>

<script>
import { randomId } from '@utils'
export default {
    name: 'tg-switch',
    props: {
        value: Boolean,
        name: String,
        label: String,
        size: String,
        disabled: Boolean,
        onText: String,
        offText: String
    },
    computed: {
        model: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        id () {
            return this.name ? this.name : randomId(5)
        },
        text () {
            return this.value ? this.onText : this.offText
        }
    }
}
</script>
