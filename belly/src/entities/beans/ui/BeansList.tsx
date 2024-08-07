import { useInfiniteQuery } from '@tanstack/react-query'
import { getBeans } from '../api/api'
import style from '../../../shared/styles/beans.module.scss'
import BeansCard from './BeansCard'
import useInfiniteScroll from '../../../shared/model/scroll/useInfiniteScroll'
import useUrlSearchParams from '../../../shared/model/filetrs/useUrlSearchParams'
import { useEffect } from 'react'
import flavorList from "../../../shared/lists/flowerNameList.json"
import colorGroup from "../../../shared/lists/colorGroup.json"
import { RadioInput } from '../../../shared/model/filetrs/RadioInput'
import { CheckBoxInput } from '../../../shared/model/filetrs/CheckBoxInput'





const BeansList = () => {
    const { searchParams, getAllParams, deleteAllParams } = useUrlSearchParams()
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery({
        queryKey: ['beans'],
        queryFn: ({ pageParam }) => getBeans({ params: { pageSize: pageParam, ...getAllParams() } }),
        initialPageParam: 20,
        getNextPageParam: (allPages, totalPages, lastPageParam) => {
            return lastPageParam <= allPages.totalCount ? lastPageParam + 20 : undefined;
        }
    })

   

    useEffect(() => {
        refetch()
    }, [searchParams])

    useInfiniteScroll({ fetchNextPage, hasNextPage, isFetchingNextPage });

    const allItems = data?.pages.flatMap(page => page.items) ?? [];
    return (
        <section >
            <div>

                <div className={style.searchContainer}>
                    <p className={style.searchPStyle}>Search by:</p>
                    <div className={style.radioInputContainer}>
                        <RadioInput searchKey='flavorName' data={flavorList.flavors} placeholder='Pick FlavorName' />
                        <RadioInput searchKey='colorGroup' data={colorGroup.colorGroup} placeholder='Pick ColorGroup' />
                        <div>
                            <div className={style.checkboxWrapperMain}>
                                <CheckBoxInput paramKey="glutenFree" />
                                <CheckBoxInput paramKey="sugarFree" />
                                <CheckBoxInput paramKey="seasonal" />
                                <CheckBoxInput paramKey="kosher" />
                            </div>
                        </div>
                        <button onClick={() => deleteAllParams()}>deleteAllFilters</button>
                    </div>
                </div>

            </div>
            <div className={style.beansCardsWrapper}>
                {allItems.map((item) => (
                    <BeansCard key={item.beanId} description={item.description} flavorName={item.flavorName} imageUrl={item.imageUrl} />
                ))}
            </div>

        </section>
    )
}

export default BeansList