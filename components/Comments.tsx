async function fetchComments(postId: string) {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    return fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    ).then((res) => res.json());
}

export async function Comments({ postId }: { postId: string }) {
    const comments = await fetchComments(postId);
    return (
        <ul className="py-4">
            {comments.map((comment: any) => (
                <li className="marker:content-['>_'] ml-4" key={comment.id}>
                    {comment.body}
                </li>
            ))}
        </ul>
    );
}
