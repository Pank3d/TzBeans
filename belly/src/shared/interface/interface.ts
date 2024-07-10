export interface  getBeansInter { 
  groupName?: string[];
  flavorName?: string;
  glutenFree?:boolean
  sugarFree?:boolean
  seasonal?:boolean
  kosher?:boolean
  pageIndex?:number
  pageSize?:number   
  colorGroup?:string 
}

export interface DataBeans{
  currentPage:number;
  pageSize:number;
  totalPages:number;
  totalCount:number;
  items: IBeansArray[]
}


export interface useInfiniteScrollInter {
  hasNextPage:boolean
  isFetchingNextPage:boolean
  fetchNextPage: () => void
}




export interface IBeansArray {
  backgroundColor: string;
  beanId: number;
  colorGroup: string;
  description: string;
  flavorName: string;
  glutenFree: boolean;
  groupName: string[];
  imageUrl: string;
  ingredients: string[];
  kosher: boolean;
  seasonal:boolean;
  sugarFree:boolean;
}


export interface RadioInputInter{
  searchKey:string,
  placeholder:string,
  data:string[]
}

export interface checkBoxInputInter{
  paramKey:string
}