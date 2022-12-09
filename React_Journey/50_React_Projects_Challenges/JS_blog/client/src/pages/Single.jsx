import React, { useContext, useState, useEffect } from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link, useLocation } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { AuthContext } from "../context/authContext"

const Single = () => {
	const [post, setPost] = useState({});

	const location = useLocation();
	const postId = location.pathname.split("/")[2];
	const {currentUser} = useContext(AuthContext);

	useEffect(() => {
		const fetchData = async ()=>{
			try {
				const res = await axios.get(`/post/${postId}`);
				setPost(res.data);
			} catch (error) {
				console.log(error);
			}
		}
		fetchData();
	}, [postId]);

	return (
		<div className='single'>
			<div className='content'>
				<img
					src={post?.img }
					alt=''
				/>
				<div className='user'>
					<img
						src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
					/>
					<div className='info'>
						<span>{post.username}</span>
						<p>Posted {moment(post.date).fromNow()}</p>
					</div>
					{currentUser.username === post.username && <div className='edit'>
						<Link to={`/write?edit=2`}>
							<img src={Edit} alt='edit' />
						</Link>
						<img src={Delete} alt='edit' />
					</div>}
				</div>
				<h1>
					{post.title}
				</h1>
				{post.desc}
			</div>
			<Menu />
		</div>
	);
};

export default Single;
