import { useEffect, useState } from "react";

const CSRPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [brothers, setBrothers] = useState<string[]>([]);

    useEffect(() => {
        fetch('/api/brothers')
            .then(response => response.json())
            .then(data => setBrothers(data))
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    if (isLoading) return (
        <div>
            <p className="text-white">Loading...</p>
        </div>
    );

    if (!brothers) return (
        <div>
            <p className="text-white">No brothers (lol) found</p>
        </div>
    )

    return (
        <div>
            <h1 className="text-white">Date: {new Date().toString()} – active date on page load</h1>
            {brothers.map((brother, index) => (
                <p className="text-white" key={index}>{brother}</p>
            ))}
        </div>
    );
};

export default CSRPage;