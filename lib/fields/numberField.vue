<template>
  <div>
    <input type="number" :value="value" @input="handleOnChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, reactive, watchEffect, PropType } from 'vue';
import { Schema, SchemaTypes, FieldPropsDefine } from '../types';
export default defineComponent({
  props: FieldPropsDefine,
  setup(props) {
    let handleOnChange = (e: any): void => {
      console.log('okkkkkkkk');
      console.log(e);
      props.onChange(e.target.value);
    };

    return { handleOnChange };
  }
});
</script>

<style></style>
