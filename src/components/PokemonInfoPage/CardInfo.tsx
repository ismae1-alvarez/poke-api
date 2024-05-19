
interface Props {
    name :  string | undefined
}

const CardInfo = ({name}:Props) => {

    
    console.log(name)
  return (
    <div className="bg-red-300">CardInfo</div>
  )
}
export default CardInfo