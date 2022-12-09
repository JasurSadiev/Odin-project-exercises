import React, { useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
const Home = () => {

	const [posts, setPosts] = useState([]);

	const cat = useLocation().search

	useEffect(() => {
		const fetchData = async ()=>{
			try {
				const res = await axios.get(`/posts${cat}`);
				setPosts(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [cat]);
	// const posts = [
	// 	{
	// 		id: 1,
	// 		title:
	// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, voluptas!",
	// 		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam vitae asperiores rerum quaerat at numquam recusandae odit, obcaecati molestiae quo maxime totam maiores earum odio, iusto ipsum eius, autem dolorem! Dolore aperiam, nobis reiciendis aliquid beatae quam aspernatur aut labore facilis nihil accusantium, corporis odit doloribus consequuntur tempora sapiente.",
	// 		img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
	// 	},
	// ];
	return (
		<div className='home'>
			<div className='posts'>
				{posts.map((post) => (
					<div className='post' key={post.id}>
						<div className='img'>
							<img src={post.img} alt='' />
						</div>
						<div className='content'>
							<Link className='link' to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<button>Read More</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
