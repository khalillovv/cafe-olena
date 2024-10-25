module.exports = {
	async redirects() {
		return [
			{
				source: '/:path*',
				has: [
					{
						type: 'cookie',
						key: 'refreshToken',
						value: '',
					},
				],
				destination: '/404',
				permanent: false,
			},
		]
	},
}
