import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ playSound, soundGroup, power }) => (
	<div className='keyboard'>
		{power
			? soundGroup.map((sound) => <KeyboardKey playSound={playSound} sound={sound} />)
			: soundGroup.map((sound) => <KeyboardKey playSound={playSound} sound={{ ...sound, url: "#" }} />)}
	</div>
);

export default Keyboard;
