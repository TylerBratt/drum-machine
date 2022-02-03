import "./App.css";
import React, { useState } from "react";
import reactDom from "react-dom";
import { firstSoundsGroup, secondSoundsGroup } from "./assets/sounds";
import Keyboard from "./components/Keyboard";
import DrumControl from "./components/DrumControl";

function App() {
	const soundsName = {
		heaterKit: "Heater Kit",
		smoothPianoKit: "Smooth Piano Kit",
	};

	const groups = {
		heaterKit: firstSoundsGroup,
		smoothPianoKit: secondSoundsGroup,
	};

	const [soundType, setSoundType] = useState("heaterKit");
	const [soundGroup, setSoundGroup] = useState(groups[soundType]);
	const [soundName, setSoundName] = useState("");
	const [volume, setVolume] = useState(1);
	const [power, setPower] = useState(true);

	const playSound = (key, sound) => {
		setSoundName(sound);
		const audio = document.getElementById(key);
		audio.currentTime = 0;
		audio.play();
	};

	const changeSoundGroup = () => {
		setSoundName("");
		if (soundType === "heaterKit") {
			setSoundType("smoothPianoKit");
			setSoundGroup(groups.smoothPianoKit);
		} else {
			setSoundType("heaterKit");
			setSoundGroup(groups.heaterKit);
		}
	};

	const handleVolumeChange = (e) => {
		setVolume(e.target.value);
	};

	const setKeyVolume = () => {
		const buttonVolume = soundGroup.map((sound) => document.getElementById(sound.key));
		buttonVolume.forEach((button) => {
			if (button) {
				button.volume = volume;
			}
		});
	};

	const powerHandler = () => {
		setPower(!power);
	};

	return (
		<div className='App'>
			<div id='drum-machine'>
				{setKeyVolume()}
				<Keyboard power={power} playSound={playSound} soundGroup={soundGroup} />
				<DrumControl
					powerHandler={powerHandler}
					power={power}
					volume={volume}
					handleVolumeChange={handleVolumeChange}
					changeSoundGroup={changeSoundGroup}
					soundName={soundName || soundsName[soundType]}
				/>
			</div>
		</div>
	);
}

export default App;
