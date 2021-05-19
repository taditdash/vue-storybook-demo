<template>
  <div>
    <input
      type="radio"
      @click="onClick"
      :disabled="!enabled"
      :checked="checked" />

    <label>{{label}}</label>
  </div>
</template>

<script>
//import './radio-button.css';

export default {
  name: "RadioButton",
  props: {
    label: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
