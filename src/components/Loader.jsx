import ReactLoading from 'react-loading';

export default function Loader() {
  return (
    <div className='loading-spin'>
      <ReactLoading type="spin" color="#fff" height={50} width={50}/>
    </div>
  )
}
