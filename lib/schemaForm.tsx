/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
import { defineComponent, ref, Ref, reactive, watchEffect, PropType, provide } from 'vue'
import { Schema, SchemaTypes } from './types'
import SchemaItem from './schemaItem'
import { SchemaFormContextKey } from './context'

export default defineComponent({
  name: 'schemaform',
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
    const context = {
      SchemaItem
    }
    provide(SchemaFormContextKey, context)
    return () => {
      let handleChange = function (v: any) {
        props.onChange(v)
      }
      let { schema, value } = props
      return <SchemaItem schema={schema} rootSchema={schema} value={value} onChange={handleChange} />
    }
  }
})
