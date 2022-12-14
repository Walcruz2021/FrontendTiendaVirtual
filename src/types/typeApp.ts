export type ProductFetch = {
    products: ProductItem[],
    isLoading: boolean;
    isError: boolean;
}

export type CompanyFetch = {
    companies: CompanyItem[],
    isLoading: boolean;
    isError: boolean;
}

export type CategoryFetch = {
    categories: CategoryItem[],
    isLoading: boolean;
    isError: boolean;
}

export type ProductItem = {
    id: number;
    category: string;
    title: string;
    image: string;
    description: string;
    price: number;
}

export type CompanyItem={
    _id:number,
    avatar:any,
    nameCompany:String,
    identifier:number,
    phone:number,
    address:string,
    notesComp:string,
    country:string,
    cityName:string,
    level:number,
    Category:string 
}

export type CategoryItem={
    _id:string,
    name:string,
}


export type CartActionReducer = {
    payload: any;
    type: 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}


export type Customer = {
    name: string;
    lastName: string;
    email: string;
    address: string;
}



