import { defineComponent, ref, Ref, reactive, watchEffect, PropType } from 'vue'
import { Schema, SchemaTypes } from './types'
import numberField from './fields/numberField'
import stringField from './fields/stringField'

export default defineComponent({
  name: 'schemaItem',
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
  setup(props, context) {
    return () => {
      let schema = props.schema
      let type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING:
          Component = stringField
          break
        case SchemaTypes.NUMBER:
          Component = numberField
          break
      }
      return <Component {...props} />
    }
  }
})
