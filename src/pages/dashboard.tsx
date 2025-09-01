import { useEffect, useState } from 'react'
import '../App.css'
import {Button} from '../ui/Button'
import { PlusIcon } from '../icons/plusIcon'
import { ShareIcon } from '../icons/Shareicon'
import { Card } from '../ui/Card'
import { CreateContentModal } from '../ui/CreateContentModal'
import { SideBar } from '../ui/SideBar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function DashBoard() {
  const [modalOpen,setmodalOpen] = useState(false);
  const {contents,refresh}=useContent();

  useEffect(()=>{
    refresh();
  },[modalOpen])

  return <div>
    <SideBar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100">
      <CreateContentModal open={modalOpen} onClose={() => {
        setmodalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
        <Button size='sm' onClick={() => {
          setmodalOpen(true)
        }} variant="primary" text="Add content" startIcon={<PlusIcon size='lg' />}></Button>
        <Button size='sm' onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
            alert(shareUrl);
        }} variant="secondary" text="Share brain" startIcon={<ShareIcon size='lg' />}></Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {contents.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
      </div>
    </div>
  </div>

}

export default DashBoard