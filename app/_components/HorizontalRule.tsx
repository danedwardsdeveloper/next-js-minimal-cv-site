export default function HorizontalRule({
	colour = 'black',
}: {
	colour?: string;
}) {
	return (
		<hr className={`border-t-4 rounded-full mb-1 border-theme-primary`} />
	);
}
