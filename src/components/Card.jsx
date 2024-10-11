/* eslint-disable react/prop-types */
export const Card = ({ name, status, species, img, setOpenDeleteItem, index, setSelectedItem, setOpenEditItem }) => {
  const handleDelete = () => {
    setOpenDeleteItem(true)
    setSelectedItem(index)
  }

  const handleEdit = () => {
    setOpenEditItem(true)
    setSelectedItem(index)
  }

  return (
    <article className='w-full p-4 bg-slate-900 rounded-lg shadow-md flex justify-between flex-col gap-3 subject-card'>
      <img src={img} alt={`Imagen de ${name}`} className='rounded-lg aspect-square object-cover' />
      <span className='text-xl text-white/80 font-semibold'>{status === 'Alive' ? '🟢' : '🔴'} {name}</span>
      <p className='text-white/80'>Especie: {species}</p>
      <div className='flex justify-end items-center mt-4 gap-3'>
        <button className='text-sm rounded-lg text-white px-4 py-2 transition bg-violet-700 hover:via-violet-500' onClick={handleEdit}>
          <svg viewBox='0 0 24 24'  fill='none'  stroke='currentColor'  strokeWidth='2'  strokeLinecap='round'  strokeLinejoin='round'  className='w-6 h-auto icon icon-tabler icons-tabler-outline icon-tabler-edit'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
        </button>
        <button className='text-sm rounded-lg text-white px-4 py-2 transition bg-violet-700 hover:via-violet-500' onClick={handleDelete}>
          <svg viewBox='0 0 24 24'  fill='none'  stroke='currentColor'  strokeWidth='2'  strokeLinecap='round'  strokeLinejoin='round'  className='w-6 h-auto icon icon-tabler icons-tabler-outline icon-tabler-trash'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' /></svg>
        </button>
      </div>
    </article>
  )
}
