'use client';

import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { useCallback } from 'react';

export const SignInButton = () => {
    const router = useRouter();
    const signInHandler = useCallback(() => {
        router.push('/sign-in');
    }, [router]);
    return <Button onClick={signInHandler}>Sign In</Button>;
};
