<!--
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
-->
<template>
  <div>
    <input type="text" :value="value" @input="handleOnChange" />
    <button @click="changearr">click</button>
    <ul>
      <li v-for="(item, i) in testarr" :key="i">{{ item.a }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  Ref,
  reactive,
  watchEffect,
  PropType,
} from "vue";
import { Schema, SchemaTypes, FieldPropsDefine } from "../types";

interface testarr {
  a: String;
}
export default defineComponent({
  // props: FieldPropsDefine,
  props: {
    ...FieldPropsDefine,
    testarr: {
      type: Array as PropType<testarr[]>,
      required: true,
    },
  },
  setup(props) {
    let handleOnChange = (e: any): void => {
      console.log("okkkkkkkk");
      console.log(e);
      props.onChange(e.target.value);
    };

    return { handleOnChange };
  },
  methods: {
    changearr() {
      this.testarr.forEach((item) => {
        console.log("okkkkk-----changearr");
        item.a = "change-a";
      });
    },
  },
});
</script>

<style></style>
