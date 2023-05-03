import { GetStaticProps } from "next/types";

const SSGPage = ({ date }: any) => {
    return (
        <div>
            <h1 className="text-white">Date: {date} - this will be the date at build time</h1>
            <h1 className="text-white">Date: {new Date().toString()} - this is the current date</h1>
        </div>
    );
};

export const getStaticProps: GetStaticProps = async (context) => {
    const date = new Date();

    return {
        props: {
            date: date.toString(),
        },
    }
};

export default SSGPage;