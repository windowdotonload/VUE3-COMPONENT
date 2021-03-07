import { createApp, defineComponent, h, reactive, ref, Ref } from 'vue'
import MonacoEditor from '@/components/monacoEditor'
import { createUseStyles } from 'vue-jss'

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string'
}

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '1200px',
    margin: '0 auto'
  },
  menu: {
    marginBottom: 20
  },
  code: {
    width: 700,
    flexShrink: 0
  },
  codePanel: {
    minHeight: 400,
    marginBottom: 20
  },
  uiAndValue: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '46%'
    }
  },
  content: {
    display: 'flex'
  },
  form: {
    padding: '0 20px',
    flexGrow: 1
  },
  menuButton: {
    appearance: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    padding: 15,
    borderRadius: 5,
    '&:hover': {
      background: '#efefef'
    }
  },
  menuSelected: {
    background: '#337ab7',
    color: '#fff',
    '&:hover': {
      background: '#337ab7'
    }
  },
  editor: {
    minHeight: 400
  }
})

export default defineComponent({
  setup() {
    let schemaRef: Ref<any> = ref(schema)

    const handleCodeHandleChange = function(code: string) {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (err) {}
      schemaRef.value = schema
    }

    const classesRef = useStyles()

    return () => {
      const classes = classesRef.value

      const code = toJson(schemaRef.value)
      return <MonacoEditor class={classes.editor} code={code} onChange={handleCodeHandleChange} title="schema" />
    }
  },
  name: 'App'
})
