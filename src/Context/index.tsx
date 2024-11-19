import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { CardType } from "../Components/Card/cardType";

interface ShoppingCartContextType {
    count: number,
    setCount: Dispatch<SetStateAction<number>>,
    openProductDetail: () => void,
    closeProductDetail: () => void,
    isProductDetailOpened: boolean,
    productToShow: CardType,
    setProductToShow: Dispatch<SetStateAction<CardType>>,
}

const defaultShoppingContext: ShoppingCartContextType = {
    count: 0,
    setCount: () => 1,
    openProductDetail: () => false,
    closeProductDetail: () => true,
    isProductDetailOpened: false,
    productToShow: { id: 0 },
    setProductToShow: () => { }
};

export const ShoppingCartContext = createContext<ShoppingCartContextType>(defaultShoppingContext);

interface ShoppingCartProviderProps {
    children: ReactNode;
}

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    // Counter
    const [count, setCount] = useState(0);

    // Display product detail
    const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);
    const openProductDetail = () => setIsProductDetailOpened(true);
    const closeProductDetail = () => setIsProductDetailOpened(false);

    // Product to show
    const [productToShow, setProductToShow] = useState<CardType>({ id: 0 });

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpened,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};