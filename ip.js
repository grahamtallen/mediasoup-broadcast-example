const publicIp = require('public-ip');


(async () => {
	process.env.RTC_IPV4 = await publicIp.v4();

	process.env.RTC_IPV6 = await publicIp.v6();
	console.log("RTC_IPV4 = ", process.env.RTC_IPV4)
	console.log("RTC_IPV6 = ", process.env.RTC_IPV6)
	process.exit();
})();