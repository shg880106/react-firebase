import { useForm } from "react-hook-form";

const Contacto = () => {
  
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  }  

  return (
    <div className='container'>
      <h1 className='main-title'>Contacto</h1>
      <form className='formulario' onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")} />
        <input type="phone" placeholder='Ingresa tu número de teléfono' {...register("telefono")} />
        <input type="email" placeholder='Ingresa tu email' {...register("email")} />       
        <button type='sumbit'>Enviar</button>
      </form>
    </div>
  )
}

export default Contacto
