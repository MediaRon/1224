const TwelveHour = [
	{ label: '3:40 pm', match: '1540' },
	{ label: '3:05 pm', match: '1505' },
	{ label: '2:10 am', match: '0210' },
	{ label: '3:05 am', match: '0305' },
	{ label: '1:30 am', match: '0130' },
	{ label: '3:00 am', match: '0300' },
	{ label: '6:35 am', match: '0635' },
	{ label: '2:45 pm', match: '1445' },
	{ label: '2:00 pm', match: '1400' },
	{ label: '1:20 pm', match: '1320' },
	{ label: '1:10 pm', match: '1310' },
	{ label: '4:15 am', match: '0415' },
	{ label: '4:10 am', match: '0410' },
	{ label: '8:00 pm', match: '2000' },
	{ label: '10:50 am', match: '1050' },
	{ label: '3:00 pm', match: '1500' },
	{ label: '4:45 pm', match: '1645' },
	{ label: '9:15 pm', match: '2115' },
	{ label: '3:55 am', match: '0355' },
	{ label: '5:00 am', match: '0500' },
	{ label: '2:20 am', match: '0220' },
	{ label: '6:15 am', match: '0615' },
	{ label: '9:05 am', match: '0905' },
	{ label: '12:55 am', match: '0055' },
	{ label: '2:15 am', match: '0215' },
	{ label: '5:45 am', match: '0545' },
	{ label: '6:55 am', match: '0655' },
	{ label: '7:05 pm', match: '1905' },
	{ label: '8:30 am', match: '0830' },
	{ label: '8:15 am', match: '0815' },
	{ label: '6:35 pm', match: '1835' },
	{ label: '6:25 am', match: '0625' },
	{ label: '10:20 pm', match: '2220' },
	{ label: '4:40 am', match: '0440' },
	{ label: '10:55 am', match: '1055' },
	{ label: '4:00 pm', match: '1600' },
	{ label: '2:00 am', match: '0200' },
	{ label: '2:40 am', match: '0240' },
	{ label: '2:55 am', match: '0255' },
	{ label: '4:30 pm', match: '1630' },
	{ label: '11:00 am', match: '1100' },
	{ label: '10:15 pm', match: '2215' },
	{ label: '12:00 am', match: '0000' },
	{ label: '6:40 am', match: '0640' },
	{ label: '11:25 pm', match: '2325' },
	{ label: '10:45 pm', match: '2245' },
	{ label: '1:45 am', match: '0145' },
	{ label: '12:50 am', match: '0050' },
	{ label: '11:05 pm', match: '2305' },
	{ label: '6:30 am', match: '0630' },
	{ label: '7:00 am', match: '0700' },
	{ label: '1:10 am', match: '0110' },
	{ label: '10:55 pm', match: '2255' },
	{ label: '8:30 pm', match: '2030' },
	{ label: '6:20 pm', match: '1820' },
	{ label: '11:55 pm', match: '2355' },
	{ label: '1:25 am', match: '0125' },
	{ label: '7:20 pm', match: '1920' },
	{ label: '7:25 pm', match: '1925' },
	{ label: '11:35 pm', match: '2335' },
	{ label: '5:00 pm', match: '1700' },
	{ label: '6:50 am', match: '0650' },
	{ label: '8:00 am', match: '0800' },
	{ label: '1:55 pm', match: '1355' },
	{ label: '12:40 pm', match: '1240' },
	{ label: '12:45 am', match: '0045' },
	{ label: '3:15 pm', match: '1515' },
	{ label: '8:45 am', match: '0845' },
	{ label: '10:10 am', match: '1010' },
	{ label: '8:35 am', match: '0835' },
	{ label: '11:15 pm', match: '2315' },
	{ label: '11:50 am', match: '1150' },
	{ label: '10:30 pm', match: '2230' },
	{ label: '10:30 am', match: '1030' },
	{ label: '3:35 pm', match: '1535' },
	{ label: '4:05 pm', match: '1605' },
	{ label: '8:10 am', match: '0810' },
	{ label: '12:30 pm', match: '1230' },
	{ label: '10:15 am', match: '1015' },
	{ label: '12:25 am', match: '0025' },
	{ label: '7:15 pm', match: '1915' },
	{ label: '8:45 pm', match: '2045' },
	{ label: '11:30 am', match: '1130' },
	{ label: '11:35 am', match: '1135' },
	{ label: '1:00 am', match: '0100' },
	{ label: '2:05 am', match: '0205' },
	{ label: '12:45 pm', match: '1245' },
	{ label: '8:35 pm', match: '2035' },
	{ label: '10:20 am', match: '1020' },
	{ label: '6:00 am', match: '0600' },
	{ label: '12:35 pm', match: '1235' },
	{ label: '12:35 am', match: '0035' },
	{ label: '5:25 pm', match: '1725' },
	{ label: '5:35 am', match: '0535' },
	{ label: '2:30 am', match: '0230' },
	{ label: '7:50 am', match: '0750' },
	{ label: '3:25 am', match: '0325' },
	{ label: '2:50 am', match: '0250' },
	{ label: '9:55 pm', match: '2155' },
	{ label: '9:45 pm', match: '2145' },
	{ label: '8:25 pm', match: '2025' },
	{ label: '5:40 pm', match: '1740' },
	{ label: '1:00 pm', match: '1300' },
	{ label: '4:00 am', match: '0400' },
	{ label: '10:50 pm', match: '2250' },
	{ label: '8:40 pm', match: '2040' },
	{ label: '12:30 am', match: '0030' },
	{ label: '9:40 am', match: '0940' },
	{ label: '3:20 pm', match: '1520' },
	{ label: '1:35 pm', match: '1335' },
	{ label: '4:50 am', match: '0450' },
	{ label: '1:45 pm', match: '1345' },
	{ label: '6:10 am', match: '0610' },
	{ label: '5:55 am', match: '0555' },
	{ label: '2:05 pm', match: '1405' },
	{ label: '5:25 am', match: '0525' },
	{ label: '2:35 pm', match: '1435' },
	{ label: '4:20 am', match: '0420' },
	{ label: '9:20 pm', match: '2120' },
	{ label: '2:40 pm', match: '1440' },
	{ label: '5:05 pm', match: '1705' },
	{ label: '5:10 pm', match: '1710' },
	{ label: '9:55 am', match: '0955' },
	{ label: '7:40 pm', match: '1940' },
	{ label: '10:25 pm', match: '2225' },
	{ label: '8:10 pm', match: '2010' },
	{ label: '7:20 am', match: '0720' },
	{ label: '1:40 am', match: '0140' },
	{ label: '7:55 am', match: '0755' },
	{ label: '11:55 am', match: '1155' },
	{ label: '8:55 pm', match: '2055' },
	{ label: '6:10 pm', match: '1810' },
	{ label: '2:10 pm', match: '1410' },
	{ label: '9:35 am', match: '0935' },
	{ label: '6:30 pm', match: '1830' },
	{ label: '12:20 pm', match: '1220' },
	{ label: '1:40 pm', match: '1340' },
	{ label: '5:30 pm', match: '1730' },
	{ label: '1:05 pm', match: '1305' },
	{ label: '3:50 am', match: '0350' },
	{ label: '8:50 pm', match: '2050' },
	{ label: '7:35 am', match: '0735' },
	{ label: '12:15 am', match: '0015' },
	{ label: '1:50 pm', match: '1350' },
	{ label: '5:30 am', match: '0530' },
	{ label: '6:05 pm', match: '1805' },
	{ label: '11:15 am', match: '1115' },
	{ label: '4:05 am', match: '0405' },
	{ label: '8:25 am', match: '0825' },
	{ label: '9:45 am', match: '0945' },
	{ label: '2:30 pm', match: '1430' },
	{ label: '9:00 pm', match: '2100' },
	{ label: '1:15 pm', match: '1315' },
	{ label: '7:05 am', match: '0705' },
	{ label: '11:25 am', match: '1125' },
	{ label: '3:35 am', match: '0335' },
	{ label: '8:05 am', match: '0805' },
	{ label: '7:10 pm', match: '1910' },
	{ label: '5:35 pm', match: '1735' },
	{ label: '3:10 pm', match: '1510' },
	{ label: '12:05 am', match: '0005' },
	{ label: '8:20 am', match: '0820' },
	{ label: '11:00 pm', match: '2300' },
	{ label: '3:30 pm', match: '1530' },
	{ label: '5:40 am', match: '0540' },
	{ label: '4:40 pm', match: '1640' },
	{ label: '8:20 pm', match: '2020' },
	{ label: '3:20 am', match: '0320' },
	{ label: '6:45 pm', match: '1845' },
	{ label: '11:10 pm', match: '2310' },
	{ label: '2:50 pm', match: '1450' },
	{ label: '2:55 pm', match: '1455' },
	{ label: '2:45 am', match: '0245' },
	{ label: '6:15 pm', match: '1815' },
	{ label: '1:35 am', match: '0135' },
	{ label: '11:45 am', match: '1145' },
	{ label: '6:20 am', match: '0620' },
	{ label: '3:10 am', match: '0310' },
	{ label: '5:55 pm', match: '1755' },
	{ label: '7:45 am', match: '0745' },
	{ label: '10:45 am', match: '1045' },
	{ label: '10:35 am', match: '1035' },
	{ label: '5:20 am', match: '0520' },
	{ label: '11:05 am', match: '1105' },
	{ label: '5:15 pm', match: '1715' },
	{ label: '9:20 am', match: '0920' },
	{ label: '4:15 pm', match: '1615' },
	{ label: '9:15 am', match: '0915' },
	{ label: '3:15 am', match: '0315' },
	{ label: '9:25 pm', match: '2125' },
	{ label: '7:30 am', match: '0730' },
	{ label: '5:20 pm', match: '1720' },
	{ label: '4:50 pm', match: '1650' },
	{ label: '10:10 pm', match: '2210' },
	{ label: '9:30 pm', match: '2130' },
	{ label: '3:45 am', match: '0345' },
	{ label: '11:40 am', match: '1140' },
	{ label: '12:15 pm', match: '1215' },
	{ label: '7:50 pm', match: '1950' },
	{ label: '11:40 pm', match: '2340' },
	{ label: '2:20 pm', match: '1420' },
	{ label: '9:40 pm', match: '2140' },
	{ label: '10:40 pm', match: '2240' },
	{ label: '6:55 pm', match: '1855' },
	{ label: '5:15 am', match: '0515' },
	{ label: '4:30 am', match: '0430' },
	{ label: '7:40 am', match: '0740' },
	{ label: '5:50 pm', match: '1750' },
	{ label: '9:25 am', match: '0925' },
	{ label: '9:10 am', match: '0910' },
	{ label: '11:50 pm', match: '2350' },
	{ label: '1:55 am', match: '0155' },
	{ label: '3:50 pm', match: '1550' },
	{ label: '4:25 am', match: '0425' },
	{ label: '9:00 am', match: '0900' },
	{ label: '12:00 pm', match: '1200' },
	{ label: '5:10 am', match: '0510' },
	{ label: '11:10 am', match: '1110' },
	{ label: '10:00 am', match: '1000' },
	{ label: '10:35 pm', match: '2235' },
	{ label: '7:15 am', match: '0715' },
	{ label: '4:25 pm', match: '1625' },
	{ label: '1:15 am', match: '0115' },
	{ label: '2:15 pm', match: '1415' },
	{ label: '12:05 pm', match: '1205' },
	{ label: '10:25 am', match: '1025' },
	{ label: '11:20 pm', match: '2320' },
	{ label: '9:30 am', match: '0930' },
	{ label: '1:05 am', match: '0105' },
	{ label: '5:50 am', match: '0550' },
	{ label: '6:00 pm', match: '1800' },
	{ label: '3:25 pm', match: '1525' },
	{ label: '4:45 am', match: '0445' },
	{ label: '11:45 pm', match: '2345' },
	{ label: '3:40 am', match: '0340' },
	{ label: '6:05 am', match: '0605' },
	{ label: '6:25 pm', match: '1825' },
	{ label: '1:30 pm', match: '1330' },
	{ label: '9:05 pm', match: '2105' },
	{ label: '9:10 pm', match: '2110' },
	{ label: '1:20 am', match: '0120' },
	{ label: '5:45 pm', match: '1745' },
	{ label: '8:50 am', match: '0850' },
	{ label: '12:20 am', match: '0020' },
	{ label: '11:20 am', match: '1120' },
	{ label: '7:45 pm', match: '1945' },
	{ label: '4:55 am', match: '0455' },
	{ label: '8:05 pm', match: '2005' },
	{ label: '10:40 am', match: '1040' },
	{ label: '7:25 am', match: '0725' },
	{ label: '4:20 pm', match: '1620' },
	{ label: '7:35 pm', match: '1935' },
	{ label: '12:50 pm', match: '1250' },
	{ label: '12:10 pm', match: '1210' },
	{ label: '12:40 am', match: '0040' },
	{ label: '4:10 pm', match: '1610' },
	{ label: '2:25 am', match: '0225' },
	{ label: '8:55 am', match: '0855' },
	{ label: '1:25 pm', match: '1325' },
	{ label: '6:45 am', match: '0645' },
	{ label: '8:15 pm', match: '2015' },
	{ label: '4:35 am', match: '0435' },
	{ label: '11:30 pm', match: '2330' },
	{ label: '7:10 am', match: '0710' },
	{ label: '9:50 am', match: '0950' },
	{ label: '6:40 pm', match: '1840' },
	{ label: '12:25 pm', match: '1225' },
	{ label: '3:30 am', match: '0330' },
	{ label: '10:05 am', match: '1005' },
	{ label: '7:00 pm', match: '1900' },
	{ label: '6:50 pm', match: '1850' },
	{ label: '2:35 am', match: '0235' },
	{ label: '2:25 pm', match: '1425' },
	{ label: '9:35 pm', match: '2135' },
	{ label: '9:50 pm', match: '2150' },
	{ label: '7:30 pm', match: '1930' },
	{ label: '4:55 pm', match: '1655' },
	{ label: '7:55 pm', match: '1955' },
	{ label: '12:10 am', match: '0010' },
	{ label: '10:05 pm', match: '2205' },
	{ label: '3:45 pm', match: '1545' },
	{ label: '8:40 am', match: '0840' },
	{ label: '1:50 am', match: '0150' },
	{ label: '4:35 pm', match: '1635' },
	{ label: '10:00 pm', match: '2200' },
	{ label: '5:05 am', match: '0505' },
	{ label: '3:55 pm', match: '1555' },
	{ label: '12:55 pm', match: '1255' },
];

export default TwelveHour;
