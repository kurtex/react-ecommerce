import { XMarkIcon } from "@heroicons/react/16/solid";
import "./styles.css";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <aside className={`${context.isProductDetailOpened ? "flex" : "hidden"} product-detail flex-col fixed right-0 border border-black rounded-lg dark:bg-[#242424] bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <XMarkIcon
                    className="h-6 w-6 cursor-pointer"
                    onClick={() => context.closeProductDetail()} />
            </div>
            <figure className="px-6">
                <img
                    className="w-full h-full rounded-lg"
                    src={context.productToShow.images ? context.productToShow.images[0] : undefined}
                    alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">{context.productToShow.price}€</span>
                <span className="font-medium text-md mb-1">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>

        </aside>
    );
};

export default ProductDetail;