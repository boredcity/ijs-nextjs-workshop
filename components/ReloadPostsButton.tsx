'use client';

import { Button } from './Button';
import { reloadPosts } from '../libs/dataUtils';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export const ReloadPostsButton = () => {
    const router = useRouter();
    const clickHandler = useCallback(async () => {
        const serverActionResult = await reloadPosts(); // revalidates the path
        router.refresh(); // loads frontend data
        console.log({ serverActionResult });
    }, [router]);
    return <Button onClick={clickHandler}>Reload</Button>;
};

// prefetch prop - https://nextjs.org/docs/app/api-reference/next-config-js/staleTimes
// Router cache: prefetch={true}
