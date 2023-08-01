import {CgMenuGridO} from 'react-icons/cg'
import Image from 'next/image'

const Header = () => {
    return <div className='flex justify-end items-center space-x-5 mt-5 mr-5'>
        <p className="hover:underline cursor-pointer">Gmail</p>
        <p className="hover:underline cursor-pointer">Images</p>
        <CgMenuGridO className='text-2xl cursor-pointer text-gray-500'/>
        <Image alt="avatar" className="rounded-full cursor-pointer" src="/avatar.png" width={30} height={30}/>
    </div> 
}

export default Header