<template>
    <div class="py-60 container">
        <h1 class="mb-32">Inputs</h1>
        <h4 class="mb-32">Base</h4>
        
        <div class="inputs-grid mb-32">
            <ui-inputs-input-base
                v-model="value"
                label="Label 1"
                placeholder="Placeholder 1"
            />

            <ui-inputs-input-base
                v-model="value"
                label="Label 2"
                placeholder="Placeholder 1"
                hint="Success Text"
            />

            <ui-inputs-input-base
                v-model="value"
                label="Label 3"
                placeholder="Placeholder 1"
                error="Error Text"
            />
        </div>

        <h4 class="mb-32">Password</h4>

        <div class="inputs-grid mb-32">
            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 1"
                placeholder="Placeholder 1"
                type="password"
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 2"
                placeholder="Placeholder 2"
                type="password"
                success
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 2"
                placeholder="Placeholder 2"
                type="password"
                error="Error Text"
            />
        </div>

        <h4 class="mb-32">dynamic label</h4>

        <div class="inputs-grid mb-32">
            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 1"
                placeholder="Placeholder 1"
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 2"
                :checking="checking"
                :success="success"
                @update:modelValue="emitChecking"
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 3"
                tooltip="Tooltip"
                :icon="imageUrl"
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 4"
                placeholder="Placeholder 4"
                hint="Success Text"
                success
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 5"
                placeholder="Placeholder 5"
                clearable
            />

            <ui-inputs-input-base
                v-model="value"
                dynamic-label="Label 6"
                placeholder="Placeholder 5"
                error="Error Text"
            />
        </div>
    </div>
</template>

<script lang="ts">
import imageUrl from '@/assets/icons/square.svg'
import _ from 'lodash'

export default {
    name: 'Inputs',
    data () {
        return {
            imageUrl,
            value: '',
            checking: false,
            success: false,
        }
    },
    methods: {
        emitChecking: _.debounce(function () {
            this.success = false
            this.checking = true

            _.delay(() => {
                this.checking = false
                this.success = true
            }, 2000)
        }, 500),
    }
};
</script>

<style lang="scss" scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.py-60 {
    padding-top: 60px;
    padding-bottom: 60px;
}

.mb-32 {
    margin-bottom: 32px;
}

.inputs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
}
</style>
