const links = [
	{
		name: "Products",
		path: "/products",
	},
	{
		name: "Services",
		path: "/services",
	},
	{
		name: "Government Supply",
		path: "/government-supply",
		children: [
			{
				name: "Loans and subcidies",
				children: [
					{
						name: "Loans from parametres",
						path: "/loans-from-parametres",
					},
					{
						name: "Loans for farm servicers",
						path: "/loans-for-farm-servicers",
					},
					{
						name: "APK loans",
						path: "/apk-loans",
					},
				],
			},
			{
				name: "Loans for businesses",
				children: [
					{
						name: "Loans for sezoni",
						path: "/loans-for-sezoni",
					},
					{
						name: "Loans for oboroti",
						path: "/loans-for-oboroti",
					},
					{
						name: "Investment loans",
						path: "/investment-loans",
					},
					{
						name: "Overdrafts",
						path: "/overdrafts",
					},
					{
						name: "Loans for farmers",
						path: "/loans-for-farmers",
					},
				],
			},
			{
				name: "Accounts and payments",
				children: [
					{
						name: "Current accounts",
						path: "/current-accounts",
					},
					{
						name: "Receipe for Business",
						path: "/receipe-for-business",
					},
					{
						name: "Internet acquiring",
						path: "/internet-acquiring",
					},
				],
			},
			{
				name: "Leasing",
				children: [
					{
						name: "Express leasing",
						path: "/express-leasing",
					},
					{
						name: "Leasing for agriculture",
						path: "/leasing-for-agriculture",
					},
				],
			},
			{
				name: "Deposit",
				children: [
					{
						name: "Stable deposit for 1 day",
						path: "/stable-deposit-for-1-day",
					},
					{
						name: "Operational deposit",
						path: "/operational-deposit",
					},
				],
			},
			{
				name: "Business cards",
				children: [
					{
						name: "Farmers map",
						path: "/farmers-map",
					},
					{
						name: "Business card with credit limit",
						path: "/business-card-with-credit-limit",
					},
				],
			},
			{
				name: "Insurance",
				children: [
					{
						name: "Casco insurance",
						path: "/casco-insurance",
					},
					{
						name: "Pet insurance Smart Farmer",
						path: "/pet-insurance-smart-farmer",
					},
				],
			},
			{
				name: "Support measures",
				children: [
					{
						name: "Grant and subsidies from the state",
						path: "/grant-and-subsidies-from-the-state",
					},
				],
			},
		],
	},
	{
		name: "Media",
		path: "/media",
		children: [
			{
				name: "News",
				path: "/news",
			},
			{
				name: "Articles",
				path: "/articles",
			},
			{
				name: "Video",
				path: "/video",
			},
			{
				name: "Online broadcasting",
				path: "/online-broadcasting",
			},
		],
	},
	{
		name: "Job",
		path: "/job",
		children: [
			{
				name: "For employers",
				path: "/for-employers",
			},
			{
				name: "For applicants",
				path: "/for-applicants",
			},
			{
				name: "Post a avacancy",
				path: "/post-a-avacancy",
			},
			{
				name: "Post a resume",
				path: "/post-a-resume",
			},
		],
	},
	{
		name: "Announcements",
		path: "/announcements",
		children: [
			{
				name: "Place an ad",
				path: "/place-an-ad",
			},
			{
				name: "More about the service",
				path: "/more-about-the-service",
			},
		],
	},
	{
		name: "Agrotechnology",
		path: "/agrotechnology",
		children: [
			{
				name: "Agro-start",
				path: "/agro-start",
			},
			{
				name: "For plant growers",
				path: "/for-plant-growers",
			},
			{
				name: "For livestock breeders",
				path: "/for-livestock-breeders",
			},
			{
				name: "For fish farmers",
				path: "/for-fish-farmers",
			},
			{
				name: "Business services",
				path: "/business-services",
			},
		],
	},
];

export default links;
