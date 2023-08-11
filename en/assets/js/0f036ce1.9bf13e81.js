"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[9114],{3653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=t(7462),r=(t(7294),t(3905)),a=t(8209);const s={sidebar_position:1},l="evcc.yaml",d={unversionedId:"reference/configuration/index",id:"reference/configuration/index",title:"evcc.yaml",description:"evcc ben\xf6tigt eine Konfigurationsdatei in der die Installation beschrieben wird. Ohne diese Datei kann evcc nicht genutzt werden. Die Datei selbst ist im YAML Format geschrieben. Dieses Format definiert eine Syntax wodurch eine strukturierte Datenstruktur in Textform erstellt werden kann.",source:"@site/docs/reference/configuration/index.md",sourceDirName:"reference/configuration",slug:"/reference/configuration/",permalink:"/en/docs/reference/configuration/",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/reference/configuration/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Referenz",permalink:"/en/docs/reference/"},next:{title:"site",permalink:"/en/docs/reference/configuration/site"}},o={},c=[{value:"Struktur",id:"struktur",level:3},{value:"Wie funktioniert evcc? (Ein Blick ins Innere)",id:"wie-funktioniert-evcc-ein-blick-ins-innere",level:3},{value:"Manipulationsm\xf6glichkeiten",id:"manipulationsm\xf6glichkeiten",level:4},{value:"Site",id:"site",level:3},{value:"Loadpoints",id:"loadpoints",level:3},{value:"Chargers",id:"chargers",level:3},{value:"Meters",id:"meters",level:3},{value:"Vehicles",id:"vehicles",level:3},{value:"HEMS",id:"hems",level:3},{value:"Messaging",id:"messaging",level:3}],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"evccyaml"},"evcc.yaml"),(0,r.kt)("p",null,"evcc ben\xf6tigt eine Konfigurationsdatei in der die Installation beschrieben wird. Ohne diese Datei kann evcc nicht genutzt werden. Die Datei selbst ist im ",(0,r.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/YAML"},"YAML")," Format geschrieben. Dieses Format definiert eine Syntax wodurch eine strukturierte Datenstruktur in Textform erstellt werden kann."),(0,r.kt)("p",null,"Zur Bearbeitung bzw. Erstellung der Konfigurationsdatei empfehlen wir einen Texteditor zu verwenden, welcher die YAML Synthax beherrscht und damit Fehler aufzeigen kann, z.B. ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com"},"VS Code")," mit der ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"},"YAML Erweiterung"),"."),(0,r.kt)("p",null,"Die Konfigurationsdatei hat standardm\xe4\xdfig den Namen ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," und ist entweder im gleichen Verzeichnis wie das Programm selbst abzulegen, oder bei Linux-Systemen unter ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/evcc.yaml"),"."),(0,r.kt)("p",null,"Wenn die Konfigurationsdatei nicht gefunden wird, kann diese \xfcber einen Parameter beim Aufruf evcc \xfcbergeben werden: z.B. ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc -c /home/evcc.yaml")),(0,r.kt)("h3",{id:"struktur"},"Struktur"),(0,r.kt)("p",null,"Die Konfigurationsdatei von evcc besteht aus mehreren Bereichen. Um von einem Bereich auf Elemente eines anderen Bereichs zu verweisen, haben einzelne Ger\xe4te einen ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," Parameter, den man frei mit einem Text vergeben kann. Der vergebene Text dient der Identifikation und Referenzierung."),(0,r.kt)("p",null,"Eine Beispieldatei mit vielen Parametern findet man hier: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/blob/master/evcc.dist.yaml"},"https://github.com/evcc-io/evcc/blob/master/evcc.dist.yaml")),(0,r.kt)("p",null,"Hier ein \xdcberblick \xfcber die Beziehungen der wichtigsten Bestandteile der Konfiguration:"),(0,r.kt)(a.G,{chart:'graph TD;\n    site("site (Zuhause)")\n    subgraph loadpoints\n      loadpointA("Carport (charger: KEBA)")\n      loadpointB("Garage (charger: Wallbe)")\n    end\n    subgraph meters\n      meterGrid("Discovergy")\n      meterPV("SMA Tripower")\n      meterBattery("LG RESU")\n    end\n    subgraph vehicles\n      vehicleA("VW ID.4")\n      vehicleB("Renault Zoe")\n      vehicleC("Tesla Model Y")\n    end\n\n    loadpointA -- loadpoint.1 --\x3e site\n    loadpointB -- loadpoint.2 --\x3e site\n\n    vehicleA --\x3e loadpointA\n    vehicleB --\x3e loadpointA\n    vehicleB --\x3e loadpointB\n    vehicleC --\x3e loadpointB\n\n    meterGrid -- meters.grid --\x3e site\n    meterPV -- meters.pvs --\x3e site\n    meterBattery -- meters.batterys --\x3e site\n',mdxType:"Mermaid"}),(0,r.kt)("h3",{id:"wie-funktioniert-evcc-ein-blick-ins-innere"},"Wie funktioniert evcc? (Ein Blick ins Innere)"),(0,r.kt)("p",null,"Wichtig f\xfcr die Funktionalit\xe4t ist ein Netzanschlussz\xe4hler (grid-meter). Dieser ermittelt die aktuelle \xdcberschussleistung.\nDie Messung der Erzeugungsleistung hat in diesem Fall keinen funktionalen Einfluss.\nAusnahme: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.evcc.io/docs/guides/meters#ich-habe-eine-pv-anlage-aber-keinen-netzanschluss-z%C3%A4hler-kann-ich-evcc-trotzdem-nutzen"},"https://docs.evcc.io/docs/guides/meters#ich-habe-eine-pv-anlage-aber-keinen-netzanschluss-z%C3%A4hler-kann-ich-evcc-trotzdem-nutzen")),(0,r.kt)("p",null,"Die \xdcberschussleistung wird mit der Mindestladeleistung verglichen. Ist diese erreicht, startet die Ladung."),(0,r.kt)("p",null,"Die Mindestladeleistung ergibt sich aus den im Loadpoint definierten Werten ",(0,r.kt)("inlineCode",{parentName:"p"},"minCurrent")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"phases")," (",(0,r.kt)("a",{parentName:"p",href:"https://docs.evcc.io/docs/reference/configuration/loadpoints"},"https://docs.evcc.io/docs/reference/configuration/loadpoints")),(0,r.kt)("p",null,"Beispiel: ",(0,r.kt)("inlineCode",{parentName:"p"},"phases: 1")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"minCurrent: 8")),(0,r.kt)("p",null,"1 (phases) x 8A (minCurrent) x 230V (Netzspannung) = 1840W (Mindestladeleistung)"),(0,r.kt)("h4",{id:"manipulationsm\xf6glichkeiten"},"Manipulationsm\xf6glichkeiten"),(0,r.kt)("p",null,"Normalerweise entspricht die \xdcberschussleistung der verf\xfcgbaren Ladeleistung. Die verf\xfcgbare Ladeleistung kann jedoch individuell durch mehrere Parameter ver\xe4ndert werden. Diese sind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Site: ",(0,r.kt)("inlineCode",{parentName:"li"},"residualpower")),(0,r.kt)("li",{parentName:"ul"},"Site: ",(0,r.kt)("inlineCode",{parentName:"li"},"prioritySoc")),(0,r.kt)("li",{parentName:"ul"},"Site: ",(0,r.kt)("inlineCode",{parentName:"li"},"bufferSoc")),(0,r.kt)("li",{parentName:"ul"},"Site: ",(0,r.kt)("inlineCode",{parentName:"li"},"aux")),(0,r.kt)("li",{parentName:"ul"},"Loadpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"enable: threshold")),(0,r.kt)("li",{parentName:"ul"},"Loadpoint: ",(0,r.kt)("inlineCode",{parentName:"li"},"disable: threshold"))),(0,r.kt)("p",null,"Die Einstellm\xf6glichkeiten bitte der Beschreibung der jeweiligen Parameter entnehmen."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.evcc.io/docs/reference/configuration/site"},"https://docs.evcc.io/docs/reference/configuration/site")," und ",(0,r.kt)("a",{parentName:"p",href:"https://docs.evcc.io/docs/reference/configuration/loadpoints"},"https://docs.evcc.io/docs/reference/configuration/loadpoints")),(0,r.kt)("h3",{id:"site"},"Site"),(0,r.kt)("p",null,"Eine ",(0,r.kt)("em",{parentName:"p"},"Site")," beschreibt den Standort mit den vorhandenen und ben\xf6tigten Ger\xe4ten der Hausinstallation und ist f\xfcr das Regeln der verf\xfcgbaren Leistung zust\xe4ndig."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"site"},"Weiterlesen...")),(0,r.kt)("h3",{id:"loadpoints"},"Loadpoints"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Loadpoints")," (Ladepunkte) beschreiben die Ladeinfrastruktur und kombinieren vorhandene ",(0,r.kt)("em",{parentName:"p"},"Charger")," (Wallboxen), ",(0,r.kt)("em",{parentName:"p"},"Vehicle")," (Fahrzeuge) und alles weitere was ein Ladepunkt ben\xf6tigt."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"loadpoints"},"Weiterlesen...")),(0,r.kt)("h3",{id:"chargers"},"Chargers"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Chargers")," (Wallboxen) beinhaltet eine Liste von Wallboxen und deren Eigenschaften, z.B. wie sie angesprochen werden."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"chargers"},"Weiterlesen...")),(0,r.kt)("h3",{id:"meters"},"Meters"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Meters")," (Hausinstallation) ist eine Liste von Ger\xe4ten welche verschiedene Stromfl\xfcsse messen. Dazu geh\xf6ren:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eingekaufter, Verkaufter Strom"),(0,r.kt)("li",{parentName:"ul"},"PV erzeugte Str\xf6me"),(0,r.kt)("li",{parentName:"ul"},"Ladestrom des EV (falls die Wallbox dies nicht direkt unterst\xfctzt)"),(0,r.kt)("li",{parentName:"ul"},"Str\xf6me der Hausbatterie(n)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"meters"},"Weiterlesen...")),(0,r.kt)("h3",{id:"vehicles"},"Vehicles"),(0,r.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (Soc) in EVs zu begrenzen, k\xf6nnen hier die vorhandenen Fahrzeuge und Online Zugangsdaten angegeben werden."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"vehicles"},"Weiterlesen...")),(0,r.kt)("h3",{id:"hems"},"HEMS"),(0,r.kt)("p",null,"evcc kann die Ladepunkte und deren Ladestr\xf6me an ein anderes Home Energy Management System (HEMS) weitergeben, damit dieses die Informationen z.b. zur Steuerung der Hausbatterie nutzen kann."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"hems"},"Weiterlesen...")),(0,r.kt)("h3",{id:"messaging"},"Messaging"),(0,r.kt)("p",null,"In diesem Bereich k\xf6nnen Ereignisse definiert werden, bei welchen man informiert werden will. Zur Informations\xfcbermittlung werden eine Reihe von unterschiedlichen Systemen unterst\xfctzt."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"messaging"},"Weiterlesen...")))}m.isMDXComponent=!0}}]);