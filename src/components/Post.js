import React from "react";
import { useState } from "react";

const nameVar = 'Milena';


const Post = () => {
	const printName = (name) => {
		console.log("We're in printName!");
		console.log(`Hello, ${name}!`);
	};

    // using useState hook
    const [likesCount, setLikesCount] = useState(0);

    // Using State
    // increase like count
    const increaseLikes = () => {
        console.log('Inside increaseLikes!');
        setLikesCount(likesCount + 1);
    };


	return (
        <section>
            <p>What is the number of likes we should display? {likesCount}</p>

			{/* <button onClick={ () => printName(nameVar)}>Like</button> */}
            <button onClick={increaseLikes}>Like</button>

		</section>
	);
};

export default Post;
