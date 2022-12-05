import React from "react";

const Menu = () => {
	const posts = [
		{
			id: 1,
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam vitae asperiores rerum quaerat at numquam recusandae odit, obcaecati molestiae quo maxime totam maiores earum odio, iusto ipsum eius, autem dolorem! Dolore aperiam, nobis reiciendis aliquid beatae quam aspernatur aut labore facilis nihil accusantium, corporis odit doloribus consequuntur tempora sapiente.",
			img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 1,
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam vitae asperiores rerum quaerat at numquam recusandae odit, obcaecati molestiae quo maxime totam maiores earum odio, iusto ipsum eius, autem dolorem! Dolore aperiam, nobis reiciendis aliquid beatae quam aspernatur aut labore facilis nihil accusantium, corporis odit doloribus consequuntur tempora sapiente.",
			img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		},
		{
			id: 1,
			title:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!",
			desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam vitae asperiores rerum quaerat at numquam recusandae odit, obcaecati molestiae quo maxime totam maiores earum odio, iusto ipsum eius, autem dolorem! Dolore aperiam, nobis reiciendis aliquid beatae quam aspernatur aut labore facilis nihil accusantium, corporis odit doloribus consequuntur tempora sapiente.",
			img: "https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
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
