import { defineComponent, ref, Ref, reactive, watchEffect, PropType, computed } from 'vue'
import { Schema, SchemaTypes, FieldPropsDefine } from '../types'

export default defineComponent({
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      return <h1>this is objectField</h1>
    }
  }
})
