import {MdOutlineScreenSearchDesktop} from 'react-icons/md'

const Logo = () => {
    return <div className='flex items-center space-x-5 cursor-pointer'>
        <MdOutlineScreenSearchDesktop className="text-6xl text-purple-500" />
        <p className='font-bold text-3xl text-purple-500'>खोज</p>
    </div>
}

export default Logo