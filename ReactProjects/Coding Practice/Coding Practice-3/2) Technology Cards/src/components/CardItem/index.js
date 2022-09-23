import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-item-container`}>
      <h1 className="card-item-title ">{title}</h1>
      <p className="card-item-description">{description}</p>
      <div className="card-item-image-container">
        <img src={imgUrl} className="card-item-image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
