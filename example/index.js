require('source-map-support').install();
const formatTable = require('../lib').default;

const header = ['ID', 'Job Title', 'Email', 'Name', 'Salary'];
const align = ['r', 'l', 'l', 'r', 'r'];
const data = [
	{
		name: 'Personel',
		rows: [
			[1, 'Web Developer', 'Jolene_Appleton5370@ubusive.com', 'Jolene Appleton', 159100],
			[2, 'Call Center Representative', 'Courtney_Middleton3590@zorer.org', 'Courtney Middleton', 75000],
			[3, 'Retail Trainee', 'Denny_Clarke2624@zorer.org', 'Denny Clarke', 191900],
			[4, 'Biologist', 'Carrie_Leigh709@naiker.biz', 'Carrie Leigh', 195900],
			[5, 'Chef Manager', 'Mark_Gordon7994@eirey.tech', 'Mark Gordon', 181000]
		]
	},
	{
		name: 'Consultants',
		rows: [
			[1, 'Business Broker', 'Carla_Buckley2938@nanoff.biz', 'Carla Buckley', 15000],
			[2, 'Stockbroker', 'Denny_Ryan5741@womeona.net', 'Denny Ryan', 200000],
			[3, 'Production Painter', 'Harmony_Avery2571@famism.biz', 'Harmony Avery', 80000],
			[4, 'Operator', 'Rhea_Kelly9401@bauros.biz', 'Rhea Kelly', 65000],
			[5, 'Machine Operator', 'Adalind_Vaughn488@deons.tech', 'Adalind Vaughn', 50000]
		]
	}
];

console.log(formatTable(header, align, data));
