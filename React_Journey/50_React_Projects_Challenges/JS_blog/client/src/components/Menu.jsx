import React from "react";

const Menu = () => {
	const posts = [
		{
			id: 1,
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam vitae asperiores rerum quaerat at numquam recusandae odit, obcaecati molestiae quo maxime totam maiores earum odio, iusto ipsum eius, autem dolorem! Dolore aperiam, nobis reiciendis aliquid beatae quam aspernatur aut labore facilis nihil accusantium, corporis odit doloribus consequuntur tempora sapiente.",
			img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		},
	];

	return (
		<div className='menu'>
			<h1>Other posts you may like</h1>
			{posts.map((post) => (
				<div className='post' key={post.id}>
					<img src={post.img} alt='' />
					<h2>{post.title}</h2>
					<button>Read More</button>
				</div>
			))}
		</div>
	);
};

export default Menu;
