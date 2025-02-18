import Navbar from './Navbar'
import NewBlog from './NewBlog'
import Allblog from './AllBlog'
import Newsletter from './Newsletter'
import Profile from './Profile'

export default function All() {
  return (
    <>
      <Navbar />
      <div className='ml-28 mr-28 pl-2 pr-2 mt-6'>
      <Profile />
        <div className='grid grid-cols-2 gap-15'>
          <div className='flex flex-col gap-5'>
            <NewBlog />
            <Newsletter />
          </div> 
          <Allblog />
        </div>
        
      </div>
    </>
  )
}
