import { useEffect, useState } from 'react'
import { Card } from './Card'
import { AddItem } from './AddItem'
import { DeleteItem } from './DeleteItem'
import { EditItem } from './EditItem'

export const Items = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [openNewItem, setOpenNewItem] = useState(false)
  const [openDeleteItem, setOpenDeleteItem] = useState(false)
  const [openEditItem, setOpenEditItem] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)


  useEffect(() => {
    setIsLoading(true)
    const dataLocale = JSON.parse(window.localStorage.getItem('data'))

    if (dataLocale) {
      setData(dataLocale)
      setIsLoading(false)
    } else {
      fetch('https://rickandmortyapi.com/api/character?page=1')
      .then((response) => {
        if (!response.ok) {
          const text = response.text()
          throw new Error(text)
        } else {
          return response.json()
        }
      })
      .then((response) => {
        window.localStorage.setItem('data', JSON.stringify(response.results))
        setData(response.results)
        setIsLoading(false)
      })
    }

  }, [])

  return (
    <>
      <button className='bg-violet-700 text-white/80 rounded-lg px-4 py-2 transition hover:bg-violet-500' onClick={() => setOpenNewItem(true)}>Agregar personaje</button>
      <div className='w-full grid place-content-center my-8 lg:grid-cols-4 gap-4'>
        {
          isLoading
          ? 'Cargando información'
          : (
            data.map((item, i) => (
              <Card
                key={item.id}
                index={i}
                name={item.name}
                status={item.status}
                species={item.species}
                img={item.image}
                setOpenDeleteItem={setOpenDeleteItem}
                setSelectedItem={setSelectedItem}
                setOpenEditItem={setOpenEditItem}
              />
            ))
          )
        }
        {
          data.length < 1 && <span className='text-nowrap text-xl'>No hay personajes, registra uno</span>
        }
      </div>

      <AddItem
        openNewItem={openNewItem}
        data={data}
        setData={setData}
        setOpenNewItem={setOpenNewItem}
        setSelectedItem={setSelectedItem}
      />
      <DeleteItem
        openDeleteItem={openDeleteItem}
        setOpenDeleteItem={setOpenDeleteItem}
        selectedItem={selectedItem}
        data={data}
        setData={setData}
        setSelectedItem={setSelectedItem}
      />
      <EditItem
        openEditItem={openEditItem}
        setOpenEditItem={setOpenEditItem}
        selectedItem={selectedItem}
        data={data}
        setData={setData}
        setSelectedItem={setSelectedItem}
      />
    </>
  )
}