import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from "svelte/store";

type Entry = {
    id: string;
    content: string;
    tags: string[];
};


export const noteStore: Writable<Entry[]> = localStorageStore('notes', []);