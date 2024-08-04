import { create } from "zustand";

const data = [];

for (let i = 1; i <= 30000; i++) {
    const randomValue = Math.random().toString(36).substring(2, 12);
    const json = { number: i, value: randomValue };
    data.push(json);
}

const useDataStore = create((set) => ({
    data: data,
}));

export default useDataStore;
