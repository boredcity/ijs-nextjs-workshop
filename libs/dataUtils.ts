'use server';
// Can be called directly from client components

import { revalidatePath } from 'next/cache';

export async function reloadPosts() {
    revalidatePath('/posts');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return 'There can be data here!';
}
