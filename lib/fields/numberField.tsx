import { defineComponent, ref, Ref, reactive, watchEffect, PropType } from 'vue'
import { Schema, SchemaTypes } from '../types'
// import St from './stringField.vue'

export default defineComponent({
  name: 'numberField',
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
    // console.log('this is props in numberFIELD.TSX', props)
    // let arr = [
    //   {
    //     a: 'this is a'
    //   },
    //   {
    //     a: 'this is b'
    //   }
    // ]
    return () => {
      return (
        <div>
          {/* <St {...props} testarr={arr}></St> */}
          <h1>this is numberField</h1>
        </div>
      )
    }
  }
})
