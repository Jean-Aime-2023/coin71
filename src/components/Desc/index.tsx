import Side1 from '../Side1'
import Side2 from '../Side2'
import Side3 from '../Side3'
const index = () => {
  return (
    <div className='bg-gray-400 p-12 grid xl:grid-cols-3 gap-10 lg:grid-flow-col-2 max-lg:px-[7rem]'>
        <Side1/>
        <Side2/>
        <Side3/>
    </div>
  )
}

export default index