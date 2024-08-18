'use client';
import { useState, useCallback } from 'react';

import Icon from './Icon';

import { copy } from '../_library/copy';

export default function ObfuscatedEmail() {
	const [decodedEmail, setDecodedEmail] = useState('');
	const [copied, setCopied] = useState(false);

	const decodeEmail = useCallback(() => {
		if (!decodedEmail) {
			const decoded = atob(copy.contact.email.encodedValue);
			setDecodedEmail(decoded);
		}
	}, [copy.contact.email.encodedValue, decodedEmail]);

	const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		decodeEmail();
		navigator.clipboard.writeText(decodedEmail).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<div className="flex justify-items-start items-center">
			{copied ? (
				<Icon name="checkbox" size={24} colour="text-green-600" />
			) : (
				<Icon name="copy" size={24} colour="text-theme-primary" />
			)}
			<a
				href="#"
				onClick={handleClick}
				onMouseEnter={decodeEmail}
				onFocus={decodeEmail}
				title="Copy Dan's email address to the clipboard"
				className={`
					transition-all duration-300
					${
						copied
							? 'text-green-600 hover:text-green-600'
							: 'text-theme-text hover:text-theme-primary hover:scale-105'
					}
				  `}
			>
				{copied ? copy.contact.email.copyMessage : copy.contact.email.name}
			</a>
		</div>
	);
}
