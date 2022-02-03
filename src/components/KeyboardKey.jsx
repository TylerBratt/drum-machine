import React, { useEffect } from "react";

const KeyboardKey = ({ playSound, sound: { key, url, keyCode, id } }) => {
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
	}, []);

	const handleKeyDown = (e) => {
		if (e.keyCode === keyCode) {
			playSound(key, id);
		}
	};

	return (
		<button key={keyCode} className='drum-pad' onClick={() => playSound(key, id)}>
			<audio src={url} id={key} className='clip' />
			{key}
		</button>
	);
};

export default KeyboardKey;
