import { useForm } from "react-hook-form"


export const Forms = () => {
    const {register, formState:{errors}, handleSubmit} = useForm()    
    const handleOnSubmit = handleSubmit(async(data)=>{
    const response = await fetch('http://localhost:3000/character', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(data)
    }).then(data=>data.json())
    console.log(response);
    })
        

   
    
    return(
        <div>
            <h1>Crear tu personaje</h1>
            <form action="" onSubmit={handleOnSubmit}>
            <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" placeholder="nombre" {...register('name', {required: {value: true, message: 'Este campo es requerido'}, minLength: {value: 3, message:'Se requieren mas de dos caracteres'}})}/>
                {errors.name && <p className="text-red-700">{errors.name.message}</p>}
                <label htmlFor="fecha">Fecha creacion</label>
                <input type="date" id="fecha" placeholder="fecha de creacion" {...register('date', {required: {value: true, message: 'Este campo es requerido'}})}/>
                {errors.date && <p className="text-red-700">{errors.date.message}</p>}
                <label htmlFor="decripcion">Descripcion</label>
                <input type="text" id="decripcion" placeholder="decripcion" {...register('description', {required: {value: true, message: 'Este campo es requerido'}, minLength: {value: 3, message:'Se requieren mas de dos caracteres'}})}/>
                {errors.description && <p className="text-red-700">{errors.description.message}</p>}
                <label htmlFor="imagen">Url de la imagen</label>
                <input type="text" id="imagen" placeholder="imagen" {...register('img', {required: {value: true, message: 'Este campo es requerido'}})}/>
                {errors.img && <p className="text-red-700">{errors.img.message}</p>}
                <button>Enviar</button>
            </form>
        </div>
    )
}