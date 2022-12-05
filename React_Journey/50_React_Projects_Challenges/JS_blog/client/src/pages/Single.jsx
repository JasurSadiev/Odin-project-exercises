import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";

const Single = () => {
	return (
		<div className='single'>
			<div className='content'>
				<img
					src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt=''
				/>
				<div className='user'>
					<img
						src='https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
						alt=''
					/>
					<div className='info'>
						<span>John</span>
						<p>Posted 2 days ago</p>
					</div>
					<div className='edit'>
						<Link to={`/write?edit=2`}>
							<img src={Edit} alt='edit' />
						</Link>
						<img src={Delete} alt='edit' />
					</div>
				</div>
				<h1>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
					tempore quod harum iure, vero neque dignissimos nostrum labore
					quibusdam minima?
				</h1>
				<p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
						placeat saepe aspernatur ut non temporibus doloribus harum numquam
						optio. Beatae vitae, molestias necessitatibus veniam, est dolorum
						soluta fugit temporibus sunt iusto repudiandae quia, natus dolorem!
						Ea illo, explicabo tempora aliquam, quas cupiditate ab eligendi
						nostrum modi illum assumenda blanditiis reiciendis tenetur vero
						maiores necessitatibus! Quidem minima et fugit quam. Necessitatibus
						sint veritatis, itaque natus eveniet, magni modi quod incidunt, ut
						libero sunt in harum beatae. Illum voluptate voluptatem nobis
						aliquid ea! Voluptas, praesentium dolor minima quas neque architecto
						perspiciatis consequatur, ad, aperiam cum ullam veniam. Sit iusto
						labore neque tempora?
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus similique quos rerum minima ipsum! Porro, corporis
						error. Necessitatibus magnam nostrum maiores quidem accusamus
						tempora quae!
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
						enim voluptatibus aperiam non quibusdam! Corporis mollitia numquam
						perferendis dolorum officiis ipsam odio ullam doloremque officia,
						laudantium, blanditiis laboriosam eveniet cupiditate.
					</p>
				</p>
			</div>
			<div className='menu'>m</div>
		</div>
	);
};

export default Single;
