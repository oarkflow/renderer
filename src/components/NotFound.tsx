export function NotFound() {
	return (
		<div
			className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6"
			role="alert"
			aria-live="assertive"
		>
			<div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl px-10 py-12 text-center">
				<h1 className="text-[72px] leading-none font-black text-red-500 mb-4 tracking-tight drop-shadow-sm">
					404
				</h1>
				<h2 className="text-2xl font-semibold text-gray-800 mb-3">
					Page not found
				</h2>
				<p className="text-md text-gray-600 mb-8">
					Sorry, we couldn’t find the page you’re looking for. It may have been moved or deleted.
				</p>
				
				<div className="flex flex-col sm:flex-row justify-center gap-4">
					<a
						href="/"
						className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 font-medium rounded-lg transition duration-200"
					>
						← Go to Homepage
					</a>
					<button
						onClick={() => window.location.reload()}
						className="inline-block px-6 py-3 text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg transition duration-200"
					>
						↻ Try Again
					</button>
				</div>
			</div>
		</div>
	);
}
