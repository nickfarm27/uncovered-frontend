import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { collection, query, getDocs } from "firebase/firestore";
import { get_Auth, get_Firestore } from "../../../Firebase";
// import { UploadPost } from "../../home/UploadPost";
import Logout from "../../logout/Logout";

interface Props {}

interface Tweet {
    tweet_id: string;
    author_id: string;
    text: string;
    created_at: string;
}

export const Menu = (props: Props) => {
    // const [check, setCheck] = useState(false);
    const [postsData, setPosts] = useState<Tweet[]>([]);

    const retrievePosts = async () => {
        const db = get_Firestore;
        const q = query(collection(db, "Posts"));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            setPosts((data) => [
                ...data,
                {
                    tweet_id: doc.get("tweet_id"),
                    author_id: doc.get("author_id"),
                    text: doc.get("text"),
                    created_at: doc.get("created_at"),
                },
            ]);
        });

        console.log(postsData);
    };

    useEffect(() => {
        retrievePosts();
        //* might need to add the array
    });

    const posts = postsData.map((post) => {
        return (
            <div key={post.tweet_id} className="post">
                <p>{post.author_id}</p>
                <p>{post.text}</p>
            </div>
        );
    });

    return (
        <div>
            <h1>Menu Page</h1>
            <h1 className="username">
                Username: {get_Auth.currentUser?.displayName}
            </h1>
            {/* <UploadPost /> */}

            <div>{/* <TweetEmbed id="692527862369357824" /> */}</div>
            <div>{posts}</div>
            <div className="flex-row">
                <button>
                    <Link to="/leaderboard">Leaderboard</Link>
                </button>
                <button>
                    <Link to="/mission">Mission</Link>
                </button>
                <Logout />
            </div>
        </div>
    );
};
