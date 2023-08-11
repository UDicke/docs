"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6017],{2061:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));t(8209);const i={sidebar_position:11},l="tariffs",o={unversionedId:"reference/configuration/tariffs",id:"reference/configuration/tariffs",title:"tariffs",description:"Hier kannst du deinen Energietarif und ggf. deine Einspeiseverg\xfctung angeben. Evcc verwendet diese Werte f\xfcr eine grobe Einsparungsberechnung, die in der Web-UI angezeigt wird.",source:"@site/docs/reference/configuration/tariffs.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/tariffs",permalink:"/en/docs/reference/configuration/tariffs",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/tariffs.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"log, levels",permalink:"/en/docs/reference/configuration/log"},next:{title:"messaging",permalink:"/en/docs/reference/configuration/messaging"}},p={},d=[{value:"<code>currency</code>",id:"currency",level:2},{value:"<code>grid</code>",id:"grid",level:2},{value:"<code>type:</code> <strong><code>fixed</code></strong>",id:"type-fixed",level:3},{value:"<code>price</code>",id:"price",level:4},{value:"<code>type:</code> <strong><code>awattar</code></strong>",id:"type-awattar",level:3},{value:"<code>region</code>",id:"region",level:4},{value:"<code>type:</code> <strong><code>tibber</code></strong>",id:"type-tibber",level:3},{value:"<code>token</code>",id:"token",level:4},{value:"<code>homeid</code>",id:"homeid",level:4},{value:"<code>type:</code> <strong><code>octopusenergy</code></strong>",id:"type-octopusenergy",level:3},{value:"<code>tariff</code>",id:"tariff",level:4},{value:"<code>region</code>",id:"region-1",level:4},{value:"<code>type:</code> <strong><code>elering</code></strong>",id:"type-elering",level:3},{value:"<code>type:</code> <strong><code>energinet</code></strong>",id:"type-energinet",level:3},{value:"<code>feedin</code>",id:"feedin",level:2},{value:"<code>type:</code> <strong><code>fixed</code></strong>",id:"type-fixed-1",level:3},{value:"<code>price</code>",id:"price-1",level:4},{value:"<code>type:</code> <strong><code>octopusenergy</code></strong>",id:"type-octopusenergy-1",level:3},{value:"<code>tariff</code>",id:"tariff-1",level:4},{value:"<code>region</code>",id:"region-2",level:4},{value:"<code>co2</code>",id:"co2",level:2},{value:"<code>type:</code> <strong><code>gr\xfcnstromindex</code></strong>",id:"type-gr\xfcnstromindex",level:3},{value:"<code>type:</code> <strong><code>electricitymaps</code></strong>",id:"type-electricitymaps",level:3}],s={toc:d},g="wrapper";function k(e){let{components:n,...t}=e;return(0,a.kt)(g,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tariffs"},(0,a.kt)("inlineCode",{parentName:"h1"},"tariffs")),(0,a.kt)("p",null,"Hier kannst du deinen Energietarif und ggf. deine Einspeiseverg\xfctung angeben. Evcc verwendet diese Werte f\xfcr eine grobe ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/setup#ersparnisberechnung"},"Einsparungsberechnung"),", die in der Web-UI angezeigt wird."),(0,a.kt)("p",null,'Desweiteren nutzt der Planner diese Einstellungen f\xfcr Preis- bzw. CO2-optimiertes Zielladen. Dabei werden die Einstellungen in der folgenden Reihenfolge ber\xfccksichtigt: "flexibler Grid-Tarif" vor "CO2 Tarif" vor "konstantem Grid-Tarif".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Struktur")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  grid:\n    type: ...\n  feedin:\n    type: ...\n  co2:\n    type: ...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel: Konstanter Energiepreis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    # static grid price\n    type: fixed\n    price: 0.294 # [currency]/kWh\n\n  feedin:\n    # rate for feeding excess (pv) energy to the grid\n    type: fixed\n    price: 0.08 # [currency]/kWh\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel: Konstanter Energiepreis mit zeitabh\xe4ngigen Tarifen")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  currency: EUR # (default EUR)\n  grid:\n    # static grid price with price zones)\n    type: fixed\n    price: 0.294 # EUR/kWh\n    zones:\n      - days: Mo-Fr\n        hours: 2-5\n        price: 0.2 # EUR/kWh\n      - days: Sa,So\n        price: 0.15 # EUR/kWh\n")),(0,a.kt)("p",null,"evcc unterst\xfctzt die Verwendung von flexiblen Stromtarifen von ",(0,a.kt)("a",{parentName:"p",href:"https://www.awattar.de"},"Awattar"),", ",(0,a.kt)("a",{parentName:"p",href:"https://tibber.com"},"Tibber"),", oder ",(0,a.kt)("a",{parentName:"p",href:"https://octopus.energy"},"Octopus Energy"),'. Die Konfiguration erlaubt es "g\xfcnstige" Preise zu definieren (siehe ',(0,a.kt)("inlineCode",{parentName:"p"},"smartCostLimit")," in site), bei welchen das Laden vom Netz mit der maximal m\xf6glichen Leistung aktiviert wird, selbst wenn nicht genug PV Leistung zur Verf\xfcgung steht."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel: Flexibler Energiepreis")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'tariffs:\n  grid:\n    # either\n    type: tibber\n    token: "476c477d8a039529478ebd690d35ddd80e3308ffc49b59c65b142321aee963a4" # access token\n    homeid: "cc83e83e-8cbf-4595-9bf7-c3cf192f7d9c" # optional if multiple homes associated to account\n\n    # or\n    type: awattar\n    region: de # optional, choose at for Austria\n    charges: 0 # optional, additional charges per kWh\n    tax: 0 # optional, additional tax (0.1 for 10%)\n')),(0,a.kt)("p",null,"Im Folgenden werden nun alle m\xf6glichen Parameter erkl\xe4rt."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"currency"},(0,a.kt)("inlineCode",{parentName:"h2"},"currency")),(0,a.kt)("p",null,"W\xe4hrung in der Energiepreise dargestellt und berechnet werden."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"EUR")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"EUR|CHF|USD|NOK|GBP|...")," W\xe4hrungsk\xfcrzel nach ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ISO_4217"},"ISO 4217")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"grid"},(0,a.kt)("inlineCode",{parentName:"h2"},"grid")),(0,a.kt)("p",null,"Folgende Tariftypen (",(0,a.kt)("inlineCode",{parentName:"p"},"type"),") werden unterst\xfctzt:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte")," ",(0,a.kt)("inlineCode",{parentName:"p"},"fixed|awattar|tibber|octopusenergy")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-fixed"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"fixed"))),(0,a.kt)("p",null,"Fester Energiepreis f\xfcr Netzbezug."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: fixed\nprice: 0.297 # 0,297 [currency]/kWh\n")),(0,a.kt)("h4",{id:"price"},(0,a.kt)("inlineCode",{parentName:"h4"},"price")),(0,a.kt)("p",null,"Den Preis in ","[currency]","/kWh den du an deinen Stromversorger zahlst. Wird f\xfcr die Ersparnisberechnung verwendet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0.30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-awattar"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"awattar"))),(0,a.kt)("p",null,"Der Stromanbieter ",(0,a.kt)("a",{parentName:"p",href:"https://www.awattar.de"},"Awattar")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: awattar\nregion: de # optional\ncharges: 0 # optional, additional charges per kWh\ntax: 0 # optional, additional tax (0.1 for 10%)\n")),(0,a.kt)("h4",{id:"region"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")),(0,a.kt)("p",null,"Die Region in der man sich befindet"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"de")),": Deutschland"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"at")),": \xd6sterreich")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-tibber"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"tibber"))),(0,a.kt)("p",null,"Der Stromanbieter ",(0,a.kt)("a",{parentName:"p",href:"https://www.tibber.com"},"Tibber")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'type: tibber\ntoken: "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"\nhomeid: "12345678-90ab-cdef-1234-567890abcdef" # optional\n')),(0,a.kt)("h4",{id:"token"},(0,a.kt)("inlineCode",{parentName:"h4"},"token")),(0,a.kt)("p",null,"Das Zugangstoken des Anbieters"),(0,a.kt)("h4",{id:"homeid"},(0,a.kt)("inlineCode",{parentName:"h4"},"homeid")),(0,a.kt)("p",null,"Die ID des Standortes, falls es unter dem Account mehrere gibt"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-octopusenergy"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"octopusenergy"))),(0,a.kt)("p",null,"Der Stromanbieter ",(0,a.kt)("a",{parentName:"p",href:"https://octopus.energy"},"Octopus Energy")," im Vereinigten K\xf6nigreich."),(0,a.kt)("admonition",{title:"Tarif- und Regionalcodes",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Das Ermitteln des Tarif- und Regionalcodes ist nicht Gegenstand dieser Dokumentation.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: octopusenergy\ntariff: AGILE-FLEX-22-11-25 # Tariff code\nregion: A # optional\n")),(0,a.kt)("h4",{id:"tariff"},(0,a.kt)("inlineCode",{parentName:"h4"},"tariff")),(0,a.kt)("p",null,"Der Tarifcode f\xfcr deinen Energievertrag."),(0,a.kt)("h4",{id:"region-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")),(0,a.kt)("p",null,"Die DNO Region in der du dich befindest: ",(0,a.kt)("a",{parentName:"p",href:"https://www.energy-stats.uk/dno-region-codes-explained/"},"Weitere Informationen")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"A")),": Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"B")),": East Midlands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"C")),": London"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"D")),": Merseyside and Northern Wales"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"E")),": West Midlands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"F")),": North Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"G")),": North Western England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"H")),": Southern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"J")),": South Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"K")),": Southern Wales"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"L")),": South Western England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"M")),": Yorkshire"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"N")),": Southern Scotland"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"P")),": Northern Scotland")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-elering"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"elering"))),(0,a.kt)("p",null,"Der Stromanbieter ",(0,a.kt)("a",{parentName:"p",href:"https://elering.ee"},"Nordpool Estonia")," in Estland."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: elering # Nordpool\nregion: ee # or lt, lv, fi\ncharges: # optional, additional charges per kWh\ntax: # optional, additional tax (0.1 for 10%)\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-energinet"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"energinet"))),(0,a.kt)("p",null,"Der Stromanbieter  ",(0,a.kt)("a",{parentName:"p",href:"https://energinat.dk"},"Energinet")," in D\xe4nemark."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: energinet # Energinet using the price in DKK\nregion: dk1 # or dk2\ncharges: # optional, additional charges per kWh\ntax: # optional, additional tax (0.1 for 10%)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"feedin"},(0,a.kt)("inlineCode",{parentName:"h2"},"feedin")),(0,a.kt)("p",null,"Verg\xfctung f\xfcr eingespeisten Strom. Bei Alt-Anlagen (vor 1.4.2012) ist hier die Differenz zwischen der Einspeise- und der Selbstverbrauchsverg\xfctung einzutragen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte")," ",(0,a.kt)("inlineCode",{parentName:"p"},"fixed|octopusenergy")),(0,a.kt)("h3",{id:"type-fixed-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"fixed"))),(0,a.kt)("p",null,"Feste Einspeiseverg\xfctung"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: fixed\nprice: 0.12 # 0,12 [currency]/kWh\n")),(0,a.kt)("h4",{id:"price-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"price")),(0,a.kt)("p",null,"Den Preis in ","[currency]","/kWh den du vom Netzbetreiber bekommst. Wird f\xfcr die Ersparnisberechnung verwendet."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Standardwert:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"0.08")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type-octopusenergy-1"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"octopusenergy"))),(0,a.kt)("p",null,"Der Stromanbieter ",(0,a.kt)("a",{parentName:"p",href:"https://octopus.energy"},"Octopus Energy")," im Vereinigten K\xf6nigreich."),(0,a.kt)("admonition",{title:"Tarif- und Regionalcodes",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Das Ermitteln des Tarif- und Regionalcodes ist nicht Gegenstand dieser Dokumentation.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"type: octopusenergy\ntariff: AGILE-FLEX-22-11-25 # Tariff code\nregion: A # optional\n")),(0,a.kt)("h4",{id:"tariff-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"tariff")),(0,a.kt)("p",null,"Der Tarifcode f\xfcr Ihren Energievertrag. Stelle sicher, dass dies auf Ihren ",(0,a.kt)("strong",{parentName:"p"},"Importtarifcode")," eingestellt ist."),(0,a.kt)("h4",{id:"region-2"},(0,a.kt)("inlineCode",{parentName:"h4"},"region")),(0,a.kt)("p",null,"Die DNO Region in der man sich befindet: ",(0,a.kt)("a",{parentName:"p",href:"https://www.energy-stats.uk/dno-region-codes-explained/"},"Weitere Informationen")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M\xf6gliche Werte"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"A")),": Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"B")),": East Midlands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"C")),": London"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"D")),": Merseyside and Northern Wales"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"E")),": West Midlands"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"F")),": North Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"G")),": North Western England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"H")),": Southern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"J")),": South Eastern England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"K")),": Southern Wales"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"L")),": South Western England"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"M")),": Yorkshire"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"N")),": Southern Scotland"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"P")),": Northern Scotland")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"co2"},(0,a.kt)("inlineCode",{parentName:"h2"},"co2")),(0,a.kt)("p",null,"Neben der Optimierung der Ladeplanung nach Kosten kann diese auch nach anderen Kriterien erfolgen, z.B. nach CO2-Intensit\xe4t. Damit ist CO2-optimales Laden auch m\xf6glich, wenn kein variabler Tarif verwendet wird. Die Optimierung kann mittels Gr\xfcnstromindex oder ElectricityMaps erfolgen."),(0,a.kt)("h3",{id:"type-gr\xfcnstromindex"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"gr\xfcnstromindex"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'co2:\n  type: gr\xfcnstromindex\n  zip: meine PLZ # PLZ mit f\xfchrender Null mit in "" setzen\n')),(0,a.kt)("h3",{id:"type-electricitymaps"},(0,a.kt)("inlineCode",{parentName:"h3"},"type:")," ",(0,a.kt)("strong",{parentName:"h3"},(0,a.kt)("inlineCode",{parentName:"strong"},"electricitymaps"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Beispiel"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"co2:\n  type: electricitymaps\n  uri: <uri>\n  token: <token>\n  zone: DE\n")))}k.isMDXComponent=!0}}]);