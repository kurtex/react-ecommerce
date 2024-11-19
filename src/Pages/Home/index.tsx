import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { CardType } from "../../Components/Card/cardType";
import ProductDetail from "../../Components/ProductDetail";


interface HomeProps {
    category?: string;
}

function Home ({ category: location }: HomeProps) {

    const [items, setItems] = useState<CardType[]>([]);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products/?categoryId=1")
            .then(response => response.json())
            .then(data => setItems(data));

    }, []);

    return (
        <Layout>
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map(item => <Card key={item.id} data={item} />)
                }
            </div>
            <ProductDetail />
        </Layout>
    );
}

export default Home;