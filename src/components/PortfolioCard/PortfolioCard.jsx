import React from 'react';
import './PortfolioCard.scss';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ item }) => {
	const { name, desc, year, imgs, stack, more, href, github } = item;
	const markup = { __html: desc };
	return (
		<div class='nft'>
			<div class='main'>
				<div class='gallery'>
					{imgs.map((i) => (
						<img
							src={`/projects/${i}`}
							alt={name}
							width={300}
							height={150}
							loading='lazy'
						/>
					))}
				</div>

				<h2>{name}</h2>

				<div class='tokenInfo'>
					{stack.map((i) => (
						<div class='price'>
							<ins>★</ins>
							<p>{i}</p>
						</div>
					))}
				</div>

				<div className='description'>
					<hr />

					<p dangerouslySetInnerHTML={markup}></p>
					{more && <Link to={more}>więcej o projekcie</Link>}
					{href && (
						<a href={href} target='_blank'>
							<p>odnośnik do DEMO</p>
						</a>
					)}
				</div>

				<div class='creator'>
					<div class='wrapper'>
						<img
							src='/profile.jpg'
							alt='Aleksandra Śniegucka - Autor'
							width={40}
							height={40}
							loading='lazy'
						/>
					</div>
					<p>
						VentusDev{' '}
						{github && (
							<a href={github} target='_blank'>
								GitHub
							</a>
						)}
					</p>
				</div>
				<div class='duration'>
					<p>{year}</p>
					<ins>◷</ins>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard;
