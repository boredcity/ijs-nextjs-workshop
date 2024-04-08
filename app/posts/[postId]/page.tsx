import { Suspense } from 'react';
import { PageHeader } from '../../../components/PageHeader';
import { Post } from '../../../components/Post';
import { Comments } from '../../../components/Comments';

export const revalidate = 3600; // revalidate at most every hour

// fetch requests are not cached if:

// The cache: 'no-store' is added to fetch requests.
// The revalidate: 0 option is added to individual fetch requests.
// The fetch request is inside a Router Handler that uses the POST method.
// The fetch request comes after the usage of headers or cookies.
// The const dynamic = 'force-dynamic' route segment option is used.
// The fetchCache route segment option is configured to skip cache by default.
// The fetch request uses Authorization or Cookie headers and there's an uncached request above it in the component tree.

interface PostPageProps {
    params: {
        postId: string;
    };
}

async function fetchPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.json();
}

export default async function PostPage({ params: { postId } }: PostPageProps) {
    const post = await fetchPost(postId);
    return (
        <div className="flex flex-col">
            <PageHeader
                title={`Post ${postId}`}
                description="Some posts here"
            />
            <Post {...post} />
            <Suspense fallback={<div>Loading comments...</div>}>
                <Comments postId={postId} />
            </Suspense>
        </div>
    );
}
