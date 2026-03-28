import React, { useState } from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';


const Card = ({player, setCoin, coin, setSelectedPlayers, selectedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);

    console.log(player.price)
    const handleChoosePlayer = () => {

        let newCoin = coin - player.price;
        if(newCoin >=0){
            setCoin(coin - player.price);
        } else{
            alert("Not Enough Coin To Purchase This Player");
            return;
        }


        alert(`${player.playerName} is Selected`)
        setIsSelected(true);
        setSelectedPlayers([...selectedPlayers, player])

        

        setCoin(coin - player.price);};

    return (
        <div className="card bg-base-100 shadow-sm">
                        <figure>
                            <img
                                src={player.playerImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title"><FaUser /> {player.playerName}</h2>
                            <div className='flex justify-between gap-2 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <FaFlag />
                                    <p>{player.playerCountry}</p>
                                </div>
        
                                <button className='btn'>{player.playerType}</button>
                            </div>
        
                            <div className="divider"></div>
        
                            <h2 className='font-bold'>Rating ({player.rating})</h2>
        
                            <div className='flex justify-between gap-4 font-bold'>
                                <p>{player.battingStyle}</p>
                                <p className='text-right'>{player.bowlingStyle}</p>
                            </div>
        
                            
                            <div className="card-actions justify-between">
                                <p className='font-semibold items-center'>Price: ${player.price}</p>
                                <button className="btn" onClick={handleChoosePlayer}disabled={isSelected}
                                    >
                                        {isSelected ? "Selected" : "Choose Player"}</button>
                            </div>
                        </div>
                    </div>
    );
};

export default Card;