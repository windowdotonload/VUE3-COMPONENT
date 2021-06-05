/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { defineComponent, ref, Ref, reactive, watchEffect, PropType } from 'vue'
import { Schema, SchemaTypes } from '../types'

export default defineComponent({
  name: 'stringField',
  props: {
    schema: {
      type: Object as PropType<Schema>,
      required: true
    },
    value: {
      required: true
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: true
    }
  },
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => {
      return (
        <div>
          <span>this is stringField</span>
          <input type="text" value={props.value as any} onInput={handleChange} />
        </div>
      )
    }
  }
})
