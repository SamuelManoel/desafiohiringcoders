import React,{useState} from 'react'
import {useCssHandles} from 'vtex.css-handles'
interface MyFormProps {}

const CSS_HANDLES = ['formContainer','label','input','myButton'] as const


const MyForm: StorefrontFunctionComponent<MyFormProps> = ({}) => {

  const handles = useCssHandles(CSS_HANDLES)

  const [form, setForm] = useState({
    nome:"",
    email:"",
    tel:""
  })

  function handleChange({target}:any){
    const {id, value} = target

    setForm({...form, [id]:value})
  }

  function handleSubmit(event:any){
    event.preventDefault();

    console.log(form)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={handles.formContainer}>
          <label htmlFor="nome" className={handles.label}>Nome</label>
          <input type="text" id="nome" value={form.nome} onChange={handleChange}  className={handles.input} placeholder="Digite seu nome aqui"/>

          <label htmlFor="email" className={handles.label}>Email</label>
          <input type="email" id="email" value={form.email} onChange={handleChange} className={handles.input} placeholder="Digite seu melhor e-mail"/>

          <label htmlFor="telefone"className={handles.label}>Telefone</label>
          <input type="tel" id="tel" value={form.tel} onChange={handleChange}  className={handles.input} placeholder="Digite seu telefone"/>

          <button className={handles.myButton}>Enviar</button>
      </form>
    </>
  )
}

MyForm.schema = {
  title: 'editor.form.title',
  description: 'editor.form.description',
  type: 'object',
  properties: {},
}

export default MyForm
