import style from '../../../shared/styles/beans.module.scss'
import { IBeansArray } from '../../../shared/interface/interface'


const BeansCard = ({imageUrl,flavorName,description}:Pick<IBeansArray, 'description'| 'flavorName' | 'imageUrl'>) => {
  return (
    <div className={style.beansCard}>
        <img className={style.beansCardImg} src={imageUrl} />
        <h3 className={style.beansCardTitle}>{flavorName}</h3>
        <p className={style.beansCardDescription}>{description}</p>
    </div>
  )
}

export default BeansCard