import { useContext } from "react";
import { CardType } from "./cardType";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/16/solid";

interface CardProps {
    data: CardType;
}

const Card = ({ data }: CardProps) => {

    const context = useContext(ShoppingCartContext);
    const openProduct = () => {
        context.openProductDetail();
        context.setProductToShow(data);
    };

    return (
        <div
            className="cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => openProduct()}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category?.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images ? data.images[0] : undefined} alt={data.title} />
                <div className="absolute top-0 right-0 flex justify-center items-center rounded-full bg-white w-6 h-6 m-2 p-1 text-black"
                    onClick={() => context.setCount(context.count + 1)}>
                    <PlusIcon />
                </div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light ">{data.title}</span>
                <span className="text-sm font-medium ">{data.price}€</span>
            </p>
        </div>);
};

export default Card;