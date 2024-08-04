'use client';

import React from 'react';
import useFavStore from "@/store/fav";

interface ListItem { number: number; value: string; }
interface ListProps { items: ListItem[] }

const List: React.FC<ListProps> = ({ items }) => {

    const scrollToItem = (index: number) => {
        const list = document.querySelector('.list-container');
        if (list) {
            const item = list.children[index] as HTMLElement;
            list.scrollTop = item.offsetTop - list.clientHeight / 2;
        }
    }

    const scrollToFirstItemThatStartsWith = (str: string) => {
        const index = items.findIndex(item => item.value.startsWith(str));
        if (index !== -1) {
            scrollToItem(index);
        }
    }

    const addFav = useFavStore((state) => state.addFav);

    return (
        <>
            <input type="text" onChange={(e) => scrollToFirstItemThatStartsWith(e.target.value)} />
            <div className="list-container">
                {items.map((item, index) => (
                    <div key={index}>
                        <span className="mr-5">{item.number}</span>
                        <span>{item.value}</span>
                        <button className='ml-10' onClick={() => addFav(item.number)}>Add to fav</button>

                    </div>
                ))}
            </div>
        </>
    );
};

export default List;