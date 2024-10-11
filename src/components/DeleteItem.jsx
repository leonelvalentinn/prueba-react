/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { CloseIcon } from '../assets/icons/CloseIcon'
import { toast } from 'sonner'

export const DeleteItem = ({ openDeleteItem, setOpenDeleteItem, selectedItem, data, setData, setSelectedItem }) => {
  useEffect(() => {
    const body = document.querySelector('body')
    if (openDeleteItem) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'visible'
    }
  }, [openDeleteItem])

  const handleDeleteItem = () => {
    let newData = [...data]
    newData.splice(selectedItem, 1)

    setData(newData)
    toast.success('Personaje borrado')
    setOpenDeleteItem(false)
    window.localStorage.setItem('data', JSON.stringify(newData))
    setSelectedItem(null)
  }

  return (
    <div className={`w-full bg-slate-700/80 flex flex-col items-center justify-center h-screen dark transition fixed top-0 right-0 ${openDeleteItem ? 'scale-100' : 'scale-0'}`}>
      <div className='w-full max-w-md bg-gray-800 rounded-lg relative shadow-md p-6'>
        <button className='text-white/80 text-xl absolute right-4 top-4' onClick={() => setOpenDeleteItem(false)}>
          <CloseIcon className='w-6 h-6' />
        </button>
        <h2 className='text-2xl font-bold text-gray-200 mb-4'>¡Atención!</h2>
        <p>¿Estás seguro de borrar el personaje de <span className='text-violet-400'>{selectedItem && data[selectedItem].name}</span>?</p>
        <div className='w-full flex gap-4 justify-end items-center mt-4'>
          <button className='px-4 py-2 rounded-lg border border-violet-500' onClick={() => setOpenDeleteItem(false)}>Cancelar</button>
          <button className='px-4 py-2 rounded-lg border border-violet-500 bg-violet-500' onClick={handleDeleteItem}>Borrar</button>
        </div>
      </div>
    </div>
  )
}