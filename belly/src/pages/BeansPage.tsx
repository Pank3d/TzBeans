import BeansList from "../entities/beans/ui/BeansList"

import style from "../shared/styles/beans.module.scss"


const BeansPage = () => {
 
  

  
  return (
    <section className={style.beansWrapper}>
      <div> 
        <h1>
          Beans
        </h1>
        <div>

        </div>
        <div className={style.beansContainer}>
        <BeansList />
        </div>
      </div>

    </section>
  )
}

export default BeansPage