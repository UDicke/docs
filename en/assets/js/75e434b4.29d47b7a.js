"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8229],{1810:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));t(8209);const i={sidebar_position:3},s="Plugins",l={unversionedId:"reference/plugins",id:"reference/plugins",title:"Plugins",description:"Plugins k\xf6nnen verwendet werden, um verschiedene Ger\xe4te und externe Datenquellen in evcc zu integrieren. Diese k\xf6nnen \xfcber den Wert custom des Parameters type in meter (Strommessger\xe4te), charger (Wallboxen) oder vehicle (Fahrzeuge) verwendet werden.",source:"@site/docs/reference/plugins.md",sourceDirName:"reference",slug:"/reference/plugins",permalink:"/en/docs/reference/plugins",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/plugins.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"modbusproxy",permalink:"/en/docs/reference/configuration/modbusproxy"},next:{title:"Modbus",permalink:"/en/docs/reference/modbus"}},o={},u=[{value:"Modbus (lesen/schreiben)",id:"modbus-lesenschreiben",level:2},{value:"MQTT (lesen/schreiben)",id:"mqtt-lesenschreiben",level:2},{value:"HTTP (lesen/schreiben)",id:"http-lesenschreiben",level:2},{value:"Websocket (nur lesen)",id:"websocket-nur-lesen",level:2},{value:"SMA/Speedwire (nur lesen)",id:"smaspeedwire-nur-lesen",level:2},{value:"Javascript (lesen/schreiben)",id:"javascript-lesenschreiben",level:2},{value:"Shell Script (lesen/schreiben)",id:"shell-script-lesenschreiben",level:2},{value:"Const (nur lesen)",id:"const-nur-lesen",level:2},{value:"Calc (nur lesen)",id:"calc-nur-lesen",level:2},{value:"Kombinierter Status (nur lesen)",id:"kombinierter-status-nur-lesen",level:2}],p={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Plugins k\xf6nnen verwendet werden, um verschiedene Ger\xe4te und externe Datenquellen in evcc zu integrieren. Diese k\xf6nnen \xfcber den Wert ",(0,a.kt)("inlineCode",{parentName:"p"},"custom")," des Parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," in ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/meters#custom"},(0,a.kt)("inlineCode",{parentName:"a"},"meter"))," (Strommessger\xe4te), ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/chargers#type"},(0,a.kt)("inlineCode",{parentName:"a"},"charger"))," (Wallboxen) oder ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/configuration/vehicles#custom"},(0,a.kt)("inlineCode",{parentName:"a"},"vehicle"))," (Fahrzeuge) verwendet werden."),(0,a.kt)("p",null,"Plugins erlauben sowohl ",(0,a.kt)("em",{parentName:"p"},"Schreibenzugriff")," also auch ",(0,a.kt)("em",{parentName:"p"},"Lesezugriff"),". Wenn das Plugin zum ",(0,a.kt)("em",{parentName:"p"},"Schreiben")," verwendet wird, werden die Daten in Form von ",(0,a.kt)("inlineCode",{parentName:"p"},"${var[:format]}")," zur Verf\xfcgung gestellt. Wenn ",(0,a.kt)("inlineCode",{parentName:"p"},"format")," nicht angegeben wird, werden die Daten im Standard ",(0,a.kt)("inlineCode",{parentName:"p"},"%v")," ",(0,a.kt)("a",{parentName:"p",href:"https://golang.org/pkg/fmt/"},"Go Format")," bereitgestellt. Die Variablen werden mit dem entsprechenden Wert ersetzt, bevor das Plugin ausgef\xfchrt wird."),(0,a.kt)("h2",{id:"modbus-lesenschreiben"},"Modbus (lesen/schreiben)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"modbus")," Plugin kann Daten von jedem ModBus f\xe4higen Ger\xe4t oder SunSpec-kompatiblen Wechselrichter lesen. Viele Strommessger\xe4te sind bereits vorkonfiguriert (siehe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd#supported-devices"},"MBMD Supported Devices"),"). Es ist ebenfalls m\xf6glich Modbus Register zu Schreiben um weitere Wallboxen zu integrieren."),(0,a.kt)("p",null,"F\xfcr weitere Details siehe die ",(0,a.kt)("a",{parentName:"p",href:"modbus"},"Modbus Dokumentation")),(0,a.kt)("h2",{id:"mqtt-lesenschreiben"},"MQTT (lesen/schreiben)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt")," Plugin erlaubt das Lesen von Werten \xfcber MQTT Topics. Das ist insbesondere f\xfcr Strommessger\xe4te n\xfctzlich, z.b. wenn diese ihre Daten bereits \xfcber MQTT bereitstellen.\nSiehe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/volkszaehler/mbmd"},"MBMD")," f\xfcr ein Beispiel wie man Modbus Messdaten in MQTT bekommt. Das Plugin bietet auch die F\xe4higkeit JSON Datenstrukturen \xfcber jq-\xe4hnliche Abfragen zu lesen oder zu parsen (Siehe ",(0,a.kt)("a",{parentName:"p",href:"#http-readwrite"},"HTTP plugin"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/sdm1-1/Power\ntimeout: 30s # don't accept values older than timeout\nscale: 0.001 # floating point factor applied to result, e.g. for Wh to kWh conversion\n")),(0,a.kt)("p",null,"F\xfcr den Schreibzugriff werden die Daten mit dem Attribut ",(0,a.kt)("inlineCode",{parentName:"p"},"payload")," bereitgestellt. Falls dieser Paramter in der Konfiguration fehlt, wird der Wert im Standardformat geschrieben."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: mqtt\ntopic: mbmd/charger/maxcurrent\npayload: ${var:%d}\n")),(0,a.kt)("h2",{id:"http-lesenschreiben"},"HTTP (lesen/schreiben)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," Plugin f\xfchrt HTTP Aufrufe durch um Daten zu lesen oder zu aktualisieren. Es beinhaltet auch die F\xe4higkeit JSON-Datenstrukturen \xfcber jq-Abfragen (z. B. f\xfcr REST-APIs) zu lesen oder zu parsen."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"XML-Dokumente werden intern automatisch in JSON-Form \xfcberf\xfchrt, welche dann mit jq wie eine native JSON-Antwort weiter gefiltert werden kann. Attribute bekommen das prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"attr"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"F\xfcr den Test von jq-Abfragen bietet sich z. B. das Online-Tool ",(0,a.kt)("a",{parentName:"p",href:"https://www.jsonquerytool.com/"},"https://www.jsonquerytool.com/")," und f\xfcr Regex-Tests z. B. das Online-Tool ",(0,a.kt)("a",{parentName:"p",href:"https://regex101.com/"},"https://regex101.com/")," an.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: http\nuri: https://volkszaehler/api/data/<uuid>.json?from=now\nmethod: GET # default HTTP method\nheaders:\n  - content-type: application/json\nauth: # basic authorization\n  type: basic\n  user: foo\n  password: bar\ninsecure: false # set to true to trust self-signed certificates\njq: .data.tuples[0][1] # parse response json\nscale: 0.001 # floating point factor applied to result, e.g. for kW to W conversion\ntimeout: 10s # timeout in golang duration format, see https://golang.org/pkg/time/#ParseDuration\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"body: %v # only applicable for PUT or POST requests\n")),(0,a.kt)("h2",{id:"websocket-nur-lesen"},"Websocket (nur lesen)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"websocket")," Plugin bietet einen Websocket Listener. Es beinhaltet auch die F\xe4higkeit JSON Datenstrukturen \xfcber jq-\xe4hnliche Abfragen zu lesen oder zu parsen. Dies kann z.B. verwendet werden um Daten von Volksz\xe4hlers Push Server zu empfangen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'source: http\nuri: ws://<volkszaehler host:port>/socket\njq: .data | select(.uuid=="<uuid>") .tuples[0][1] # parse message json\nscale: 0.001 # floating point factor applied to result, e.g. for Wh to kWh conversion\ntimeout: 30s # error if no update received in 30 seconds\n')),(0,a.kt)("h2",{id:"smaspeedwire-nur-lesen"},"SMA/Speedwire (nur lesen)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"sma")," Plugin bietet eine Schnittstelle zu SMA Ger\xe4ten welche das Speedwire Protokoll beherrschen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'source: sma\nuri: 192.168.4.51 # alternative to serial\nserial: 123456 # alternative to uri\nvalue: ActivePowerPlus # ID of value to read\npassword: "0000" # optional (default: 0000)\ninterface: eth0 # optional\nscale: 1 # optional scale factor for value\n')),(0,a.kt)("p",null,"Unterst\xfctzte Wert f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," k\xf6nnen in der Diagnoseausgabe \xfcber das Kommando ",(0,a.kt)("inlineCode",{parentName:"p"},"evcc meter")," (mit konfigurierten SMA ",(0,a.kt)("inlineCode",{parentName:"p"},"meter")," Ger\xe4ten) gefunden werden."),(0,a.kt)("p",null,"Alle m\xf6glichen Werte k\xf6nnen als Konstanten ",(0,a.kt)("a",{parentName:"p",href:"https://gitlab.com/bboehmke/sunny/-/blob/master/values.go#L24"},"hier")," gefunden werden (verwende den Namen der Konstante f\xfcr ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),")."),(0,a.kt)("h2",{id:"javascript-lesenschreiben"},"Javascript (lesen/schreiben)"),(0,a.kt)("p",null,"evcc integriert einen Javascript Interpreter mit der ",(0,a.kt)("a",{parentName:"p",href:"https://underscorejs.org"},"Underscore.js")," Bibliothek, welche direkt \xfcber ",(0,a.kt)("inlineCode",{parentName:"p"},"_.")," zugreifbar ist, z.B. ",(0,a.kt)("inlineCode",{parentName:"p"},"_.random(0,5)"),". Das ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," Plugin kann Javascript code \xfcber den ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," Parameter ausf\xfchren. Sehr hilfreich f\xfcr das schnelle Erstellen von Prototypen:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: js\nscript: |\n  var res = 500;\n  2 * res; // returns 1000\n")),(0,a.kt)("p",null,"Wenn das ",(0,a.kt)("inlineCode",{parentName:"p"},"js")," Plugin zum schreiben verwendet wird, wird der zu schreibende Wert dem Script als Variable \xfcbergeben:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"charger:\n  - type: custom\n    maxcurrent:\n      source: js\n      script: |\n        console.log(maxcurrent);\n")),(0,a.kt)("h2",{id:"shell-script-lesenschreiben"},"Shell Script (lesen/schreiben)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"script")," Plugin f\xfchrt externe Skripte zum Lesen oder Aktualisieren von Daten aus. Das Plugin ist hilfreich um jede Art von externer Funktionalit\xe4t einzubinden."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'source: script\ncmd: /bin/bash -c "cat /dev/urandom"\ntimeout: 5s\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Schreiben"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: script\ncmd: /home/user/my-script.sh ${enable:%b} # format boolean enable as 0/1\ntimeout: 5s\n")),(0,a.kt)("h2",{id:"const-nur-lesen"},"Const (nur lesen)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," Plugin gibt einen konstanten Wert zur\xfcck. Es eignet sich z. B. um in Verbindung mit dem ",(0,a.kt)("inlineCode",{parentName:"p"},"calc")," Plugin feste Korrekturwerte (Offset) auf einen variablen Wert anzuwenden oder auch zur Simulation von Mess- und Statuswerten zu Testzwecken."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: const\nvalue: -16247\n")),(0,a.kt)("h2",{id:"calc-nur-lesen"},"Calc (nur lesen)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"calc")," Plugin erlaubt es mehrere Einzelwerte mathematisch weiterzuverarbeiten:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: calc\nadd:\n- source: ...\n  ...\n- source: ...\n  ...\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: calc\nmul:\n- source: calc\n  sign:\n    source: ... (power)\n  ...\n- source: ... (current)\n  ...\n")),(0,a.kt)("p",null,"Als Operanden werden dabei die Grundrechenarten Addition (add) und Multiplikation (mul) unterst\xfctzt."),(0,a.kt)("p",null,"Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"scale: -1")," bei einem der Werte kann eine einfache Subtraktion durchgef\xfchrt werden, mit ",(0,a.kt)("inlineCode",{parentName:"p"},"scale: 0.001")," eine Division z. B. zur Konvertierung von kWh in Wh."),(0,a.kt)("p",null,"Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"sign:")," (jede positive Zahl wird zu +1, jede negative Zahl wird zu -1, 0 bleibt 0) k\xf6nnen (in Verbindung mit ",(0,a.kt)("inlineCode",{parentName:"p"},"mul"),") Vorzeichen auf andere Werte \xfcbertragen werden. Z.B. um bei Z\xe4hlern die \u201eRichtung\u201c der Leistung (Einspeisung oder Bezug) auf die gemessenen Str\xf6me zu \xfcbertragen."),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"calc")," Plugin ist hilfreich um z.B."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leistungswerte von einzelnen PV-Strings zu summieren (addieren)"),(0,a.kt)("li",{parentName:"ul"},"Die Scheinleistung aus Spannung und Strom zu berechnen (multiplizieren)"),(0,a.kt)("li",{parentName:"ul"},"Getrennte Leistungswerte f\xfcr Import und Export zu einem vorzeichenbehafteten Einzelwert zu kombinieren (subtrahieren)."),(0,a.kt)("li",{parentName:"ul"},"Prozentuale F\xfcllst\xe4nde zu berechnen (dividieren)"),(0,a.kt)("li",{parentName:"ul"},"Die richtige Richtung des Stromflusses festlegen (sign)"),(0,a.kt)("li",{parentName:"ul"},"Bekannte Offsets zu eliminieren (addieren mit ",(0,a.kt)("inlineCode",{parentName:"li"},"const")," Plugin)")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Konstante Hilfswerte (z. B. f\xfcr Offsets) lassen sich mit Hilfe des ",(0,a.kt)("inlineCode",{parentName:"p"},"const")," Plugins als Operand erzeugen.")),(0,a.kt)("h2",{id:"kombinierter-status-nur-lesen"},"Kombinierter Status (nur lesen)"),(0,a.kt)("p",null,"Das ",(0,a.kt)("inlineCode",{parentName:"p"},"combined")," Status Plugin wird verwendet um gemischte Boolean Status Werte von ",(0,a.kt)("inlineCode",{parentName:"p"},"Plugged")," (angeschlossen) / ",(0,a.kt)("inlineCode",{parentName:"p"},"Charging")," (Laden) in einen evcc-kompatiblen Ladestatus von A..F zu konvertieren. Es wird z.b. zusammen mit einer OpenWB MQTT Integration verwendet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel Lesen"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"source: combined\nplugged:\n  source: mqtt\n  topic: openWB/lp/1/boolPlugStat\ncharging:\n  source: mqtt\n  topic: openWB/lp/1/boolChargeStat\n")))}c.isMDXComponent=!0}}]);