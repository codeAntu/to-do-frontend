import { Button, Checkbox } from '@nextui-org/react'
import { TrashIcon } from 'lucide-react'
import React from 'react'

export default function Todos() {
  return (
    <>
      <div className='text-xl font-semibold text-black/80 dark:text-white/80 sm:text-3xl'>My Todos</div>

      <div className='space-y-4 py-5'>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </>
  )
}

function Todo() {
  const [isSelected, setIsSelected] = React.useState(false)

  return (
    <div
      className={`flex w-full items-center justify-between rounded-2xl border-2 p-4 dark:bg-white/5 ${isSelected ? 'bg-black/5' : 'border-2 border-yellow-600/10 bg-yellow-500/10 dark:border-white/10'} `}
      onClick={() => setIsSelected(!isSelected)} 
    >
      <Checkbox isSelected={isSelected} onValueChange={setIsSelected} lineThrough={isSelected}>
        <div className=''>Ananta</div>
      </Checkbox>
      <div>
        <Button color='danger' isIconOnly size='sm' variant={`${isSelected ? 'light' : 'ghost'}`}
          className='border '
        >
          <TrashIcon size={18} />
        </Button>
      </div>
    </div>
  )
}
