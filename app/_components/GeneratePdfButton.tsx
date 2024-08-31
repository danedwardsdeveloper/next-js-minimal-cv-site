'use client';

import { useState } from 'react';

export default function GeneratePDFButton() {
	const [isGenerating, setIsGenerating] = useState(false);

	async function generatePDF() {
		setIsGenerating(true);
		try {
			const response = await fetch('/api/generate-pdf');
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = 'page.pdf';
			a.click();
		} catch (error) {
			console.error('Failed to generate PDF:', error);
		} finally {
			setIsGenerating(false);
		}
	}

	return (
		<button
			onClick={generatePDF}
			disabled={isGenerating}
			className="px-2 py-1 rounded-md  ring-typescript ring-offset-2 border-theme-secondary  border-2 transition-colors ease-in-out duration-300 hover:shadow-lg
			bg-transparent hover:bg-theme-primary hover:bg-opacity-50"
		>
			{isGenerating ? 'Generating...' : 'Download PDF'}
		</button>
	);
}
