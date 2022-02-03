import React from "react";

const DrumControl = ({ soundName, changeSoundGroup, volume, handleVolumeChange, power, powerHandler }) => {
	return (
		<div className='control'>
			<button onClick={powerHandler}>Power {power ? "OFF" : "ON"}</button>
			<h2>Volume: {Math.round(volume * 100)}%</h2>
			<input max='1' min='0' step='0.01' type='range' value={volume} onChange={handleVolumeChange} />
			<h2 id='display'>{soundName}</h2>
			<button onClick={changeSoundGroup}>Change Sounds Group</button>
		</div>
	);
};

export default DrumControl;
