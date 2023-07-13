import React, { useState } from 'react';
import ServiceCard from "./serviceCard";
import cardDetaials from "../../../src/services";
import "./services.css";

const Services = (Card) => {

	const [cardState, setCardState] = useState(false);

	function cardHover(){
		setCardState(true);
		console.log("fkc")
	}
	function handleMouseOut(){
		setCardState(false)
	}
	return (
		<div className='servicesSection'>
			<div className="container-fluid">
				<div className=" serviceRow row">
					{cardDetaials.map( (entry) => {
						return (
              <ServiceCard
                key={entry.id}
                icon={entry.icon}
                title={entry.title}
                content={entry.content}
								onMouseOver={cardHover} 
								onMouseOut={handleMouseOut}
								style={{backgroundColor: cardState ? "#0089e9" : "inherit"}}
              />
					);
					})}
				</div>
			</div>
		</div>
	)
}

export default Services;