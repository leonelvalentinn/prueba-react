import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { CloseIcon } from '../assets/icons/CloseIcon'

/* eslint-disable react/prop-types */
export const AddItem = ({ openNewItem, data, setData, setOpenNewItem }) => {
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
    setError(false)
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)
    const newItemId = data[data.length - 1].id + 1
    const formEl = document.getElementById('form')

    const item = {
      id: newItemId,
      name: formData.get('name'),
      status: formData.get('status'),
      species: formData.get('species'),
      image: formData.get('img')
    }

    if (!item.image || !item.species || !item.status || !item.name) {
      setError(true)
    } else {
      let newData = [...data]
      newData.push(item)
      setData(newData)
      toast.success('Personaje añadido')
      setOpenNewItem(false)
      window.localStorage.setItem('data', JSON.stringify(newData))
      formEl.reset()
    }
  }

  useEffect(() => {
    const body = document.querySelector('body')
    if (openNewItem) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'visible'
    }
  }, [openNewItem])

  return (
    <div className={`w-full bg-slate-700/80 flex flex-col items-center justify-center h-screen dark transition absolute top-0 right-0 ${openNewItem ? 'scale-100' : 'scale-0'}`}>
      <div className='w-full max-w-md bg-gray-800 rounded-lg relative shadow-md p-6'>
        <button className='text-white/80 text-xl absolute right-4 top-4' onClick={() => setOpenNewItem(false)}>
          <CloseIcon className='w-6 h-6' />
        </button>
        <h2 className='text-2xl font-bold text-gray-200 mb-4'>Agrega un personaje</h2>
        <form id='form' className='flex flex-col' onSubmit={() => handleSubmit(event)}>
          <input
            placeholder='Nombre'
            className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ease-in-out duration-150'
            type='text'
            name='name'
          />
          <input
            placeholder='URL de la imagen'
            className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mt-4 mb-2 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ease-in-out duration-150'
            type='text'
            name='img'
          />
          <label className='text-sm my-2 text-gray-200 cursor-pointer' htmlFor='status'>
            Estatus
          </label>
          <select
            className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ease-in-out duration-150'
            id='status'
            name='status'
          >
            <option value='Alive'>Vivo</option>
            <option value='Dead'>Muerto</option>
          </select>
          <input
            placeholder='Especie'
            className='bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-500 transition ease-in-out duration-150'
            type='text'
            name='species'
          />
          <span className='text-red-500'>{error ? 'Todos los campos son necesarios' : ''}</span>
          <button
            className='bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-violet-600 transition ease-in-out duration-150'
            type='submit'
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}
