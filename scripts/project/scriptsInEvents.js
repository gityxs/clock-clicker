


const scriptsInEvents = {

	async глобальныефункции_Event63_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(0,"3"," ", ",")));
	},

	async глобальныефункции_Event79_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(1,"3"," ", ",")));
	},

	async глобальныефункции_Event81_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatMoney(0,"3"," ", ",")));
	},

	async глобальныефункции_Event82_Act1(runtime, localVars)
	{
		runtime.setReturnValue(String(localVars.number.formatTimer(Number)));
	},

	async настойкипрестижстатистика_Event47_Act3(runtime, localVars)
	{
		await crazysdk.displayAd('rewarded');
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

