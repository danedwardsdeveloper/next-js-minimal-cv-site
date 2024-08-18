export default function HorizontalRule({
	colour = 'border-theme-primary',
}: {
	colour?: string;
}) {
	return <hr className={`border-t-4 rounded-full mb-1 ${colour} `} />;
}
