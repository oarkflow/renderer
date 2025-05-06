export function Loading() {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-white z-50">
			<div className="flex flex-col items-center">
				<div className="h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
				<p className="mt-6 text-lg font-medium text-gray-600">Loading, please wait…</p>
			</div>
		</div>
	);
}
