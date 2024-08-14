import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const solutions = [
	{ name: 'Analytics', href: '#' },
	{ name: 'Engagement', href: '#' },
	{ name: 'Security', href: '#' },
	{ name: 'Integrations', href: '#' },
	{ name: 'Automation', href: '#' },
	{ name: 'Reports', href: '#' },
];

export default function FlyoutMenu() {
	return (
		<Popover className="relative">
			<PopoverButton className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
				<span>Solutions</span>
				<ChevronUpIcon aria-hidden="true" className="h-5 w-5" />
			</PopoverButton>

			<PopoverPanel
				transition
				className="absolute left-1/2  z-10 mb-5 -mt-12 flex w-screen max-w-min -translate-x-1/2 -translate-y-full px-4 transition 
                data-[closed]:translate-y-[105%] data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
					{solutions.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="block p-2 hover:text-indigo-600"
						>
							{item.name}
						</a>
					))}
				</div>
			</PopoverPanel>
		</Popover>
	);
}
