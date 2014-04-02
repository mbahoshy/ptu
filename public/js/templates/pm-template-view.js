pm.templates.gasPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Pressure Switches: </div>\
		<div>Fan Relay: </div>\
		<div>Clean Flame Sensor: </div>\
		<div>Hot Surface Ignitor (cold ohms): <%= hsi %> ohms</div>\
		<div>Inspect Blower Motor: </div>\
		<div>Blower Amps: </div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %></p>\
			<p>Actual: <%= capact1 %></p>\
		</div>\
		<div>Inspect Heat Exchanger: </div>\
		<div>Gas Pressures:\
			<p>High: <%= highgas %><p>\
			<p>Low: <%= lowgas %></p>\
		</div>\
	</div>\
";


pm.templates.electricPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Blower Amps: <%= bloweramps %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %></p>\
			<p>Actual: <%= capact1 %></p>\
		</div>\
		<div>Strips Heat:\
			<p>#1: <%= sh1 %> </p>\
			<p>#2: <%= sh2 %> </p>\
			<p>#3: <%= sh3 %> </p>\
			<p>#4: <%= sh4 %> </p>\
		</div>\
	</div>\
";

pm.templates.acPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Clean Indoor Coil: </div>\
		<div>Clean Outdoor Coil: </div>\
		<div>Compressor amp draw: <%= compamp %></div>\
		<div>Fan amp draw: <%= fanamp %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %> / <%= caprated2 %></p>\
			<p>Actual: <%= capact1 %> / <%= capact2 %></p>\
		</div>\
		<div>Refrigerant :\
		</div>\
		<div>Pressures:\
			<p>Liquid (discharge): <%= liquid %></p>\
			<p>Vapor (suction): <%= vapor %></p>\
		</div>\
		<div>Condensor Temp Rise: <%= contd %></div>\
		<div>Indoor delta T: <%= deltat %></div>\
	</div>\
";

pm.templates.heatpumpPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Clean Indoor Coil: </div>\
		<div>Clean Outdoor Coil: </div>\
		<div>Compressor amp draw: <%= compamp %></div>\
		<div>Fan amp draw: <%= fanamp %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %> / <%= caprated2 %></p>\
			<p>Actual: <%= capact1 %> / <%= capact2 %></p>\
		</div>\
		<div>Refrigerant : \
		</div>\
		<div>Pressures:\
			<p>Liquid (discharge): <%= liquid %></p>\
			<p>Vapor (suction): <%= vapor %></p>\
		</div>\
		<div>Condensor Temp Drop: <%= contd %></div>\
		<div>Indoor delta T: <%= deltat %></div>\
	</div>\
";

pm.templates.airhandlerPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Blower Amps: <%= bloweramps %></div>\
		<div>Capacitor:\
			<p>Rated: <%= caprated1 %></p>\
			<p>Actual: <%= capact1 %></p>\
		</div>\
	</div>\
";

pm.templates.splitPMView = "\
	<div id='pmview'>\
		<div>Make: <%= make %></div>\
		<div>Model: <%= model %></div>\
		<div>Serial: <%= serial %></div>\
		<div>Inspect Blower Motor: </div>\
		<div>Strips Heat:\
			<p>#1: <%= sh1 %> </p>\
			<p>#2: <%= sh2 %> </p>\
			<p>#3: <%= sh3 %> </p>\
			<p>#4: <%= sh4 %> </p>\
		</div>\
	</div>\
";