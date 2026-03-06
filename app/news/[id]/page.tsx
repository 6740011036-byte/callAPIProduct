import { notFound } from "next/navigation";


type Props = {
    params: {
        id: string;
    };
};

const NewsPageDetail = async ({ params }: Props) => {
    const newsList = [
        { id: 1, title: "News One" },
        { id: 2, title: "News Two" },
        { id: 3, title: "News Three" },
    ];
    const { id } = await params;
    const news = newsList.find((item) => item.id === +id);



    if (!news) {
        notFound();
    }


    await new Promise((resolve) => setInterval(resolve, 1000));

    return <div>NewsPageDetail: {news.id} : {news.title}</div>;
};
export default NewsPageDetail;