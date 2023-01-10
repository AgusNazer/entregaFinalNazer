import { ColorRing } from  'react-loader-spinner'


const Loader = ({ loading = false }) => {
  return (
loading  &&
    <ColorRing
    visible={true}
    height="60"
    width="60"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#0BF5AE','#0BF5AE','#0BF5AE','#0BF5AE','#0BF5AE']}
  />
   
  )
}

export default Loader