import Link from 'next/link';
import { PageHeader } from '../../components/PageHeader';
import { Post } from '../../components/Post';
import { ReloadPostsButton } from '../../components/ReloadPostsButton';

// fetch on backend - NOT AVAILABLE IN CLIENT COMPONENTS
async function fetchPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return res.json();
}

// ASYNC!
export default async function PostsPage() {
    const posts = await fetchPosts();
    return (
        <div className="flex flex-col">
            <PageHeader title="Posts" description="Some posts here" />
            <ReloadPostsButton />
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id} className="m-2">
                        <Link href={`/posts/${post.id}`}>
                            <Post title={post.title} id={post.id} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
