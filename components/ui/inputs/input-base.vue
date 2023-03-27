<template>
  <div class="input-base">
    <!-- Label -->
    <div v-if="topSpace || label" class="input-base__label">
      {{ label }}
    </div>

    <!-- Body  -->
    <label
      ref="inputBody"
      :class="{
        'input-base__body--focused': focused,
        'input-base__body--error': error,
      }"
      class="input-base__body"
    >
      <!-- Wrapper -->
      <div
        :class="{
          'input-base__wrapper--focused': focused,
          'input-base__wrapper--error': error,
        }"
        class="input-base__wrapper"
      >
        <!-- Left -->
        <div v-if="$slots.left || icon" class="input-base__left">
          <slot name="left">
            <ui-mask-icon :src="icon" class="input-base__icon" />
          </slot>
        </div>

        <!-- Main -->
        <div class="input-base__main">
          <!-- Dynamic label -->
          <div
            :class="{ 'input-base__dynamic-label--active': isActive }"
            class="input-base__dynamic-label"
          >
            {{ dynamicLabel }}
          </div>

          <!-- Input -->
          <input
            v-bind="$attrs"
            v-model="value"
            :placeholder="isActive || !dynamicLabel ? placeholder : ''"
            :class="{
              'input-base__input--active': isActive && dynamicLabel,
            }"
            ref="input"
            class="input-base__input"
            @focusin="focused = true"
          >
        </div>

        <!-- Right -->
        <div v-if="$slots.right || tooltip || isPassword || checking || success || clearable" class="input-base__right">
          <slot name="right" />

          <!-- Options -->
          <ui-mask-icon
            v-if="tooltip"
            :src="icons.InfoIcon"
            class="input-base__option input-base__icon"
          />

          <!-- Password options -->
          <ui-mask-icon
            v-if="isPassword && $refs.input?.type === 'password'"
            :src="icons.EyeIcon"
            class="input-base__option input-base__icon"
            @click="togglePassword"
          />

          <ui-mask-icon
            v-if="isPassword && $refs.input?.type === 'text'"
            :src="icons.EyeClosedIcon"
            class="input-base__option input-base__icon"
            @click="togglePassword"
          />

          <!-- Options -->
          <ui-mask-icon
            v-if="checking"
            :src="icons.CheckingIcon"
            class="input-base__icon"
          />

          <ui-mask-icon
            v-if="success"
            :src="icons.SuccessIcon"
            class="input-base__icon input-base__icon--green"
          />

          <ui-mask-icon
            v-if="modelValue && clearable"
            :src="icons.CloseIcon"
            class="input-base__option input-base__icon"
            @click.native="clear"
          />
        </div>
      </div>
    </label>

    <!-- Hint -->
    <div
      v-if="bottomSpace || error || hint"
      :class="{ 'input-base__hint--error': error }"
      class="input-base__hint"
    >
      {{ error || hint }}
    </div>
  </div>
</template>

<script lang="ts">
import InfoIcon from '@/assets/icons/info.svg'
import CloseIcon from '@/assets/icons/close.svg'
import SuccessIcon from '@/assets/icons/success.svg'
import CheckingIcon from '@/assets/icons/checking.svg'
import EyeIcon from '@/assets/icons/eye.svg'
import EyeClosedIcon from '@/assets/icons/eye-closed.svg'

export default {
  name: 'InputBase',
  props: {
    modelValue: {
      type: [Number, String],
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    dynamicLabel: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    tooltip: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    checking: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    topSpace: {
      type: Boolean,
      default: false,
    },
    bottomSpace: {
      type: Boolean,
      default: false,
    },
    hint: {
      type: String,
      default: "",
    },
    error: {
      type: String,
      default: "",
    },
  },
  data () {
    return {
      focused: false,
    }
  },
  computed: {
    value: {
      get () {
        return this.modelValue;
      },
      set (value: string) {
        this.$emit('update:modelValue', value);
      },
    },
    icons () {
      return {
        InfoIcon,
        CloseIcon,
        SuccessIcon,
        CheckingIcon,
        EyeIcon,
        EyeClosedIcon,
      }
    },
    isActive () {
      return this.focused || this.modelValue;
    },
    isPassword () {
      return this.$attrs.type === 'password';
    },
  },
  mounted () {
    window.addEventListener('click', this.clickOutside)
  },
  beforeUnmount () {
    window.removeEventListener('click', this.clickOutside)
  },
  methods: {
    clear () {
      this.$emit('update:modelValue', '');
    },
    togglePassword () {
      this.$refs.input.type = this.$refs.input.type === 'password'
        ? 'text'
        : 'password';
    },
    clickOutside (event: MouseEvent) {
      const outsideClick = !this.$refs.input.contains(event.target);
  
      if (outsideClick) { this.focused = false }
    },
  }
};
</script>

<style lang="scss">
@mixin reset {
  all: unset;
  box-sizing: border-box;
}

.input-base {
  $root: &;
  $transition: .1s;

  // Colors
  $color-primary: #007AFF; /* Primary / Base */
  $color-primary-dark: #1A1A1A; /* Primary / Dark */
  $color-secondary-white-tint: #F8F8F8; /* Secondary / White / Tint */
  $color-secondary-white-shade: #F2F2F2; /* Secondary / White / Shade */
  $color-secondary-medium: #ACB1B7; /* Secondary / Medium / Base */
  $color-secondary-medium-tint: #A7ACBA; /* Secondary / Medium / Tint */
  $color-secondary-black: #000000; /* Secondary / Black / Base */
  $color-text-primary: #26252D; /* Text / Primary */
  $color-success: #05A19C; /* Success / Base */
  $color-danger: #FF2D55; /* Danger / Base */
  $color-danger-light: #FBF5F6; /* Danger / Light */
  $color-danger-tint : #FAEFF1; /* Danger / Tint */

  @include reset;

  display: inline-flex;
  flex-direction: column;
  min-width: 280px;

  &__label {
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: $color-secondary-black
  }

  &__body {
    @include reset;

    position: relative;
    width: 100%;
    height: 60px;
    border-radius: 5px;
    border: 2px solid $color-secondary-white-tint;
    background: $color-secondary-white-tint;
    transition: background $transition, border-color $transition;

    // Default hover
    &:not(#{$root}__body--focused):not(#{$root}__body--error) {
      &:hover {
        border-color: $color-secondary-white-shade;
        background: $color-secondary-white-shade;
      }
    }

    &--error {
      border-color: $color-danger-light;
      background: $color-danger-light;

      // Error hover
      &:not(#{$root}__body--focused) {
        &:hover {
          border-color: $color-danger-tint;
          background: $color-danger-tint;
        }
      }
    }

    &--focused {
      border-color: $color-secondary-white-tint;
      background: #fff;
    }
  }

  &__wrapper {
    @include reset;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;

    &:before {
      @include reset;

      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 50%; // left
      z-index: 1;
      width: 0%;
      height: 2px;
      border-radius: 0 0 3px 0;
      background: $color-primary;
      transition: width $transition;
    }

    &:after {
      @include reset;

      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      right: 50%; // right
      z-index: 1;
      width: 0%;
      height: 2px;
      border-radius: 0 0 0 3px;
      background: $color-primary;
      transition: width $transition;
    }

    &--focused {
      &:before,
      &:after {
        width: 50%;
      }
    }

    &--error {
      &:before,
      &:after {
        background: $color-danger;
      }
    }
  }

  &__left {
    @include reset;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__main {
    @include reset;

    position: relative;
    width: 100%;
    height: 100%;
  }

  &__right {
    @include reset;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    height: 100%;
  }

  &__dynamic-label {
    @include reset;

    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 24px;
    font-size: 16px;
    color: $color-secondary-medium-tint;
    padding: 8px 0;
    transition: font-size $transition, height $transition;
    z-index: 0;

    &--active {
      line-height: 16px;
      font-size: 12px;
      height: 32px;
      color: $color-secondary-black
    }
  }

  &__input {
    @include reset;

    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 0;
    line-height: 24px;
    font-size: 16px;
    color: $color-text-primary;
    z-index: 1;

    &::placeholder {
      color: $color-secondary-medium-tint;
    }

    &::selection {
      background-color: #f7e6c3;
    }

    &--active {
      padding-top: 15px;
    }
  }

  &__option {
    @include reset;

    cursor: pointer;
    transition: color $transition;

    &:hover {
      color: $color-secondary-black
    }
  }

  &__icon {
    color: $color-secondary-medium;

    &--green {
      color: $color-success
    }
  }

  &__hint {
    @include reset;

    height: 24px;
    line-height: 24px;
    font-size: 12px;
    color: $color-secondary-medium-tint;

    &--error {
      color: $color-danger
    }
  }
}
</style>
