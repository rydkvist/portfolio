import { GetServerSideProps } from "next/types";
import { useEffect, useState } from "react";
import { ABSOLUTE_WEBSITE_URL } from "../config";

const SSRPage = ({ date, brothers }: any) => {
    return (
        <div>
            <h1 className="text-white">Date: {date} – active date on page load</h1>
            {brothers.map((brother, index) => (
                <p className="text-white" key={index}>{brother}</p>
            ))}
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const date = new Date();
    const res = await fetch(`${ABSOLUTE_WEBSITE_URL}/api/brothers`);
    const brothers = await res.json();

    return {
        props: {
            date: date.toString(),
            brothers: brothers ?? [],
        },
    }
};

export default SSRPage;