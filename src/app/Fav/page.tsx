'use client';

import React from 'react';
import useFavStore from "@/store/fav";
import useDataStore from "@/store/data";
import Link from "next/link";

const FP: React.FC = () => {
    const fav = useFavStore((state) => state.favs);
    const data = useDataStore((state) => state.data);

    return (
        <div className='page-container'>
            <h1>Favourites</h1>
            <br />
            <Link href={"/"}>Go to main</Link>

            {fav.length === 0 ? (<p>No favorites yet.</p>) : (
                <div className='fav-container'>
                    {fav.map((fav: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined, index: React.Key | null | undefined) => (
                        <p key={index} className='mr-5'>{data.find((item: { number: string | number | bigint | boolean | React.ReactPortal | Promise<React.AwaitedReactNode> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }) => item.number === fav)?.value}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FP;