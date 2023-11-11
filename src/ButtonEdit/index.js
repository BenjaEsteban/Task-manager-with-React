import { HiPencil } from "react-icons/hi";
import './ButtonEdit.css'


function ButtonEdit({ setOpenModalEdit }) {
  return (
    <button className='ButtonEdit'
      onClick={
        () => {
          setOpenModalEdit(state => !state)
        }}>
      <HiPencil/>
    </button>
  )
}

export { ButtonEdit }