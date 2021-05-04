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
  setup() {
    return () => {
      return (
        <div>
          <h1>this is stringField</h1>
        </div>
      )
    }
  }
})
