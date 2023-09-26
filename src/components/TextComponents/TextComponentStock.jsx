
const TextComponentStock = ({stock}) => {
  return (
    <p>{stock === 0 ? "No hay stock.": "Unidades Disponibles: " + stock}</p>
  )
}

export default TextComponentStock