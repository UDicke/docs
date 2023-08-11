"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[4081],{4084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));t(8209);const a={sidebar_position:4},d="Fahrzeuge",l={unversionedId:"guides/vehicles",id:"guides/vehicles",title:"Fahrzeuge",description:"Wozu muss ich mein Auto eintragen?",source:"@site/docs/guides/vehicles.mdx",sourceDirName:"guides",slug:"/guides/vehicles",permalink:"/en/docs/guides/vehicles",draft:!1,editUrl:"https://github.com/evcc-io/docs/tree/main/docs/guides/vehicles.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Laden",permalink:"/en/docs/guides/charging"},next:{title:"Hausinstallation",permalink:"/en/docs/guides/meters"}},s={},u=[{value:"Wozu muss ich mein Auto eintragen?",id:"wozu-muss-ich-mein-auto-eintragen",level:3},{value:"Wird mein Auto unterst\xfctzt?",id:"wird-mein-auto-unterst\xfctzt",level:3},{value:"Wie wird Klimatisierung unterst\xfctzt?",id:"wie-wird-klimatisierung-unterst\xfctzt",level:3},{value:"Erkennung des Fahrzeugs an der Wallbox",id:"erkennung-des-fahrzeugs-an-der-wallbox",level:2},{value:"Erkennung \xfcber das Ladekabel",id:"erkennung-\xfcber-das-ladekabel",level:3},{value:"Erkennung \xfcber RFID-Karten (und andere Token)",id:"erkennung-\xfcber-rfid-karten-und-andere-token",level:3},{value:"Erkennung \xfcber den Ladestatus",id:"erkennung-\xfcber-den-ladestatus",level:3},{value:"Hersteller-spezifische Besonderheiten",id:"hersteller-spezifische-besonderheiten",level:2},{value:"PSA: Bei meinem Peugeot/Opel wird der Ladezustand nur aktualisiert wenn ich die Hersteller-App benutze",id:"psa-bei-meinem-peugeotopel-wird-der-ladezustand-nur-aktualisiert-wenn-ich-die-hersteller-app-benutze",level:3},{value:"Mercedes: Anleitung zur Erstellung von <code>clientId</code> und <code>clientSecret</code>",id:"mercedes-anleitung-zur-erstellung-von-clientid-und-clientsecret",level:3}],o={toc:u},c="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fahrzeuge"},"Fahrzeuge"),(0,r.kt)("h3",{id:"wozu-muss-ich-mein-auto-eintragen"},"Wozu muss ich mein Auto eintragen?"),(0,r.kt)("p",null,"evcc kann das Laden auf einen selbst gew\xe4hlten Batterieladestand (SoC) begrenzen, dazu muss es aber den aktuellen Ladestand kennen. Leider k\xf6nnen die meisten Autos und Wallboxen diese Information noch nicht direkt austauschen. Viele Fahrzeughersteller bieten jedoch eine App an, welche diese Information dem Benutzer bereitstellt. evcc kann bei vielen Fahrzeugen den gleichen Weg nutzen und die ben\xf6tigten Daten regelm\xe4\xdfig dar\xfcber abrufen."),(0,r.kt)("p",null,"Dazu muss man meist den Benutzernamen und das Passwort f\xfcr die Hersteller-App in die evcc Konfiguration eintragen. Damit kann evcc dann u.a. den Ladezustand \xfcber die Online-Verbindung das Fahrzeugs auslesen."),(0,r.kt)("h3",{id:"wird-mein-auto-unterst\xfctzt"},"Wird mein Auto unterst\xfctzt?"),(0,r.kt)("p",null,"Vielleicht. Schau einfach mal unter ",(0,r.kt)("a",{parentName:"p",href:"/docs/devices/vehicles"},"Ger\xe4te - Fahrzeuge")," nach ob du dein Fahrzeug findest. Wenn nicht, versuche es mal mit einer Konfiguration von einem anderen des gleichen Herstellers."),(0,r.kt)("h3",{id:"wie-wird-klimatisierung-unterst\xfctzt"},"Wie wird Klimatisierung unterst\xfctzt?"),(0,r.kt)("p",null,"Bei manchen Fahrzeugen kann evcc \xfcber die Online-Verbindung ebenfalls erkennen, ob das Fahrzeug gerade ein Vorklimatisierung durchf\xfchrt.\nIn diesem Fall wird die technisch an der Wallbox niedrigste m\xf6gliche Leistung freigegeben, damit das Fahrzeug mit dem Strom \xfcber die Wallbox klimatisieren kann."),(0,r.kt)("p",null,"In diesem Fall kann es vorkommen, dass die Klimatisierung im Fahrzeug weniger Leistung als die freigegebene Leistung ben\xf6tigt.\nUnd damit kann es sein, dass das Fahrzeug die restliche verf\xfcgbare Leistung verwendet um die Batterie weiter zu laden, auch wenn eine festgelegte Begrenzung des Ladezustandes bereits erreicht wurde."),(0,r.kt)("p",null,"Sobald die Klimatisierung als beendet erkannt wird, wird die Wallbox wieder gesperrt, so dass das Fahrzeug keinen weiteren Strom \xfcber die Wallbox beziehen kann falls nicht ohnehin gerade geladen wird."),(0,r.kt)("admonition",{title:"Anmerkung",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Dies gilt nur f\xfcr die Kombination von Fahrzeugen und Wallbox, wo diese beiden \xfcber den Standard IEC61851 kommunizieren. Dies ist heute die Regel."),(0,r.kt)("p",{parentName:"admonition"},"Bei Fahrzeugen und Wallboxen die \xfcber ISO15118 kommunizieren, bekommt das Fahrzeug genau die Energiemenge welche es direkt an der Wallbox anfr\xe4gt.")),(0,r.kt)("h2",{id:"erkennung-des-fahrzeugs-an-der-wallbox"},"Erkennung des Fahrzeugs an der Wallbox"),(0,r.kt)("p",null,"Wenn ein oder mehrere Fahrzeuge konfiguriert sind, muss evcc diese unterscheiden k\xf6nnen und wissen welches der Fahrzeuge an welcher Wallbox angeschlossen ist. Nur damit ist es m\xf6glich die Live-Daten des Fahrzeugs richtig zuzuordnen und anzuzeigen und damit z. B. das Laden auf einen bestimmten Ladestand (SoC) zu begrenzen."),(0,r.kt)("p",null,"Hierf\xfcr gibt es verschiedene Methoden:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Es ist ein Fahrzeug konfiguriert und einem Ladepunkt fest als Standardfahrzeug zugewiesen, dann findet keine automatische Erkennung statt. evcc geht dann immer zun\xe4chst davon aus dass dieses Fahrzeug dort angeschlossen ist."),(0,r.kt)("li",{parentName:"ol"},"Es sind ein oder mehrere Fahrzeuge konfiguriert die keinem festem Ladepunkt zugewiesenen sind",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Erkennung \xfcber das Ladekabel (Plug & Charge)"),(0,r.kt)("li",{parentName:"ol"},"Erkennung \xfcber RFID-Karten (und andere Token)"),(0,r.kt)("li",{parentName:"ol"},"Erkennung \xfcber den Ladestatus")))),(0,r.kt)("p",null,"Die einzelnen Methoden werden nachfolgend n\xe4her beschrieben."),(0,r.kt)("p",null,"Ist keine dieser Varianten verf\xfcgbar oder sinnvoll anwendbar erfolgt die Zuordnung eines Fahrzeugs zu einem Ladepunkt manuell \xfcber die evcc-Benutzeroberfl\xe4che (oder via API). Dort lassen sich auch bei Bedarf Korrekturen vornehmen."),(0,r.kt)("p",null,'Fahrzeuge die nicht erkannt wurden werden als "Gastfahrzeug" behandelt.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Wallbox muss bereits in evcc eingerichtet und konfiguriert sein")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In einfachen F\xe4llen ist es empfehlenswert eine direkte Zuordnung von Ladepunkt zu einem Standardfahrzeug vorzunehmen.\n(siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/loadpoints/#vehicles"},"vehicle"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"F\xfcr jedes Fahrzeug k\xf6nnen individuelle Standardeinstellungen wie z. B. Lademodus, Ladestrombeschr\xe4nkungen, Ziel-SoC usw. in der evcc-Konfiguration hinterlegt werden (siehe ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/configuration/vehicles/#onidentify"},"onIdentify"),"). Diese werden jeweils automatisch angewendet wenn das Fahrzeug an einem Ladepunkt erkannt bzw. zugeordnet wird.")),(0,r.kt)("h3",{id:"erkennung-\xfcber-das-ladekabel"},"Erkennung \xfcber das Ladekabel"),(0,r.kt)("p",null,"Voraussetzung: Die Wallbox und das Fahrzeug m\xfcssen den Ladestandard ISO15118 unterst\xfctzen. In der Praxis ist dies nur mit sehr wenigen Wallbox- und Fahrzeugkombinationen \xfcberhaupt m\xf6glich."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},'In der Konfiguration der Wallbox, nicht in evcc, muss die sogenannte "PLC-Verbindung zum Fahrzeug" aktiviert sein.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vorgehen"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Das Auto an die Wallbox anschlie\xdfen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"evcc beenden (falls noch nicht geschehen)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Auf der Kommandozeile ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc charger")," aufrufen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Die Ausgabe enth\xe4lt den Text ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifier:")," und einen Wert, dieser Wert muss kopiert werden")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nun die ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," Datei in einem Texteditor \xf6ffnen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bei der Konfiguration des entsprechenden Fahrzeugs die folgende Zeilen hinzuf\xfcgen (identifiers ist eine Liste, mehrere Eintr\xe4ge sind m\xf6glich):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"identifiers:\n  - <kopierter Wert>\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Wenn das Fahrzeug und die Wallbox kein Plug & Charge unterst\xfctzen, dann liefern die Fahrzeuge eine eigentlich eindeutige Hardware-Adresse (MAC-Adresse) zur\xfcck.\nManche Hersteller wie VW und Audi \xe4ndern diese aber jeden Tag auf einen anderen Zufallswert!"),(0,r.kt)("p",{parentName:"admonition"},"F\xfcr diesen Fall kann man eine Wildcard verwenden und nur den sich nicht \xe4ndernden Teil angeben:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: Auto\n    ...\n    identifiers:\n      - 01:23:45:*\n")),(0,r.kt)("p",{parentName:"admonition"},"Dies funktioniert nat\xfcrlich nur, wenn dies nicht bei mehreren vorhandenen Fahrzeugen auftritt und sich der angegebene Anfangsteil des Wertes jeweils unterscheidet."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"evcc kann nun wieder gestartet werden und erkennt das Fahrzeug"))),(0,r.kt)("h3",{id:"erkennung-\xfcber-rfid-karten-und-andere-token"},"Erkennung \xfcber RFID-Karten (und andere Token)"),(0,r.kt)("p",null,"Voraussetzung: Die Wallbox verf\xfcgt \xfcber einen RFID-Kartenleser."),(0,r.kt)("p",null,"Hierbei ordnet man eine (oder mehrere) RFID-Karten einem bestimmten Fahrzeug zu. D.h. jedes Mal wenn das Fahrzeug wieder an die Wallbox angeschlossen wird, muss der Ladevorgang zun\xe4chst mit der entsprechenden RFID-Karte an der Wallbox freigeschaltet werden."),(0,r.kt)("p",null,"Die Wallbox teilt evcc dann die zur Freischaltung verwendete Kartenkennung mit.\nOft wird dabei allerdings nicht direkt die Kartennummer selbst von der Wallbox an evcc \xfcbermittelt sondern z. B. ein vom Benutzer in der Konfiguration der Wallbox hinterlegter Aliasname oder auch nur eine Zeilennummer der Tabelle der zugelassenen Karten.\nDies funktioniert leider bei jedem Wallboxtyp im Detail ein bisschen anders. Hier f\xfchrt daher oft nur Ausprobieren zum Ziel."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die erlaubten RFID-Karten m\xfcssen in der Regel zus\xe4tzlich in der Wallbox registriert sein. Dies wird entweder \xfcber eine Konfigurations-App der Wallbox oder deren Benutzeroberl\xe4che gemacht.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vorgehen"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Die (ggf. bereits registrierte) RFID-Karte an die Wallbox halten bis die Wallbox meldet dass diese erkannt wurde")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"evcc beenden (falls noch nicht geschehen)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Auf der Kommandozeile ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc charger")," aufrufen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Die Ausgabe enth\xe4lt u. a. den Text ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifier:")," und einen Wert, dieser Wert muss kopiert werden")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Nun die ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," Datei in einem Texteditor \xf6ffnen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bei der Konfiguration des entsprechenden Fahrzeugs die folgenden Zeilen hinzuf\xfcgen (identifiers ist eine Liste, mehrere Eintr\xe4ge sind m\xf6glich):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: Auto\n    ...\n    identifiers:\n      - <kopierter Wert>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"evcc kann nun wieder gestartet werden und erkennt das Fahrzeug"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Der grunds\xe4tzliche Aufbau der tats\xe4chlich von einer Wallbox \xfcbermittelten Identifier kann oft schon beim ersten Durchgang erkannt und dann f\xfcr weitere Karten abgeleitet werden ohne dass diese vollst\xe4ndige Prozedur f\xfcr jede Karte erforderlich ist. Im Zweifelsfall ist es aber sinnvoll die mittels ",(0,r.kt)("inlineCode",{parentName:"p"},"evcc charger")," tats\xe4chlich \xfcbermittelten Identifier zu verifizieren.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Eine RFID-Karte kann an unterschiedlichen Wallboxen u.U. unterschiedliche Identifier haben!")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Mit mehreren Token pro Fahrzeug lassen sich z. B. auch verschiedene Fahrer differenzieren oder unterschiedliche Ladestrategien mit vordefinierten Standardwerten aufrufen. Ein Fahrzeug kann dazu mit unterschiedlichen Namen auch mehrfach in der evcc-Konfiguration angelegt werden.")),(0,r.kt)("h3",{id:"erkennung-\xfcber-den-ladestatus"},"Erkennung \xfcber den Ladestatus"),(0,r.kt)("p",null,"Hierbei ruft evcc den Ladestatus aller eingebundenen Fahrzeuge \xfcber die Online-Schnittstelle ab. Sofern der Hersteller dies anbietet und das Fahrzeug es \xfcbermittelt, erh\xe4lt evcc automatisch den (hoffentlich) aktuellen Ladestatus der Fahrzeuge, also ob ein Fahrzeug an eine Lades\xe4ule angeschlossen ist und ob es derzeit l\xe4dt.\n\xdcber den Abgleich dieses Zustands mit dem Zustand der Ladepunkte und bereits zugeordneten Fahrzeugen versucht evcc herauszufinden welches Fahrzeug neu angeschlossen wurde.\nDies ist ein heuristisches Verfahren und es besteht daher keine hunderprozentige Sicherheit eine automatische Zuordnung immer zu gew\xe4hrleisten.\nDie Geschwindigkeit und Zuverl\xe4ssigkeit dieses Verfahrens ist stark von der Geschwindigkeit und Zuverl\xe4ssigkeit der Live-Datenschnittstellen der jeweiligen Fahrzeughersteller und dem Mobilfunkempfang der Fahrzeuge an den Ladepunkten abh\xe4ngig."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Die Erkennung \xfcber die Online-Schnittstelle kann aus mehrern Gr\xfcnden fehlschlagen:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'das Fahrzeug ist tempor\xe4r nicht erreichbar ("Funkloch")'),(0,r.kt)("li",{parentName:"ul"},"der Server des Fahrzeugherstellers ist tempor\xe4r nicht erreichbar"),(0,r.kt)("li",{parentName:"ul"},"neue AGB m\xfcssen best\xe4tigt werden (auf der Webseite und/oder in der App und/oder im Fahrzeug) "),(0,r.kt)("li",{parentName:"ul"},"es gab von Seiten des Herstellers \xc4nderungen an der Schnittstelle"))),(0,r.kt)("h2",{id:"hersteller-spezifische-besonderheiten"},"Hersteller-spezifische Besonderheiten"),(0,r.kt)("h3",{id:"psa-bei-meinem-peugeotopel-wird-der-ladezustand-nur-aktualisiert-wenn-ich-die-hersteller-app-benutze"},"PSA: Bei meinem Peugeot/Opel wird der Ladezustand nur aktualisiert wenn ich die Hersteller-App benutze"),(0,r.kt)("p",null,"Das ist leider eine Einschr\xe4nkung der Herstellerschnittstelle. PSA liefert veraltete Werte aus solange diese nicht \xfcber die App erneuert werden. Leider ist bislang noch keine Schnittstelle bekannt, um diese Erneuerung programmatisch anzusto\xdfen."),(0,r.kt)("h3",{id:"mercedes-anleitung-zur-erstellung-von-clientid-und-clientsecret"},"Mercedes: Anleitung zur Erstellung von ",(0,r.kt)("inlineCode",{parentName:"h3"},"clientId")," und ",(0,r.kt)("inlineCode",{parentName:"h3"},"clientSecret")),(0,r.kt)("p",null,"F\xfcr die Nutzung eines Mercedes Fahrzeuges m\xfcssen bei Mercedes zwei Id\xb4s erzeugt und in der Konfigdatei (evcc.yaml) hinterlegt werden."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erstelle einen Mercedes Developer Account"),(0,r.kt)("li",{parentName:"ol"},"Einloggen und Create a New project klicken"),(0,r.kt)("li",{parentName:"ol"},"klicke Add Product"),(0,r.kt)("li",{parentName:"ol"},"Electric Vehicle Status ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ol"},"Purchase model -> Get For Free -> Package BYOCAR -> Confirm -> Subscribe"),(0,r.kt)("li",{parentName:"ol"},"Go to Project Page -> Generate Credentials"),(0,r.kt)("li",{parentName:"ol"},"WICHTIG !!! Client ID und Client Secret per copy&paste in einer txt-Datei sichern."),(0,r.kt)("li",{parentName:"ol"},"In Project credentials, die entsprechende Redirect URLs hinterlegen.\nDas ist http://EVCC_IP:7070/oauth/vehicles/1/callback Die IP nutzen, unter der evcc l\xe4uft!\nDas gilt, wenn evcc im lokalen LAN Netzwerk betrieben wird.\nBei Zugriff \xfcber das Internet muss eine Portweiterleitung f\xfcr Port: 7070 erfolgen. Dazu braucht es eine feste IP oder Dynamic DNS.\nAchtung: evcc nutzt keine Authentifizierung, somit hat jeder Zugriff auf evcc."),(0,r.kt)("li",{parentName:"ol"},"In der Konfigdatei (evcc.yaml) die entsprechenden ID\xb4s hinterlegen")),(0,r.kt)("p",null,"Beispiel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- name: merc\n  type: mercedes\n  title: EQC #your Mercedes type, for the interface\n  capacity: 80 # battery capacity kWh\n  clientId: xxx\n  clientSecret: xxx\n  vin: xxxxx # vin numer\n")))}h.isMDXComponent=!0}}]);