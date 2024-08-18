import LightDarkButton from './LightDarkButton';

export default function MenuBar() {
	return (
		<div className="col-span-full row-start-1 flex justify-end mt-6 lg:mt-0 lg:absolute lg:right-8 lg:top-8">
			<LightDarkButton />
		</div>
	);
}
