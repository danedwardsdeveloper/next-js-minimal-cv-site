import Icon from './Icon';

const darkModeEnabled: boolean = false;
const currentIcon = darkModeEnabled ? 'sun' : 'moon';

export default function LightDarkButton() {
	return (
		<button
			type="button"
			className=" items-center rounded-md bg-white px-2 py-2  ring-gray-300  border-typescript  border-2 hover:bg-gray-200  hover:text-white transition-colors ease-in-out duration-300 shadow-lg"
		>
			<Icon name={currentIcon} padding="p-0" colour="typescript" />
		</button>
	);
}
