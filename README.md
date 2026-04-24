![Logo](admin/inventwo.png)
# ioBroker.vis-inventwo

![Number of Installations (latest)](http://iobroker.live/badges/vis-inventwo-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/vis-inventwo-stable.svg)
[![NPM Version](https://nodei.co/npm/iobroker.vis-inventwo.svg?style=shields&data=v,u,d&color=orange)](https://www.npmjs.com/package/iobroker.vis-inventwo)<br>
[![Downloads](https://img.shields.io/npm/dm/iobroker.vis-inventwo.svg)](https://www.npmjs.com/package/iobroker.vis-inventwo)
[![Known Vulnerabilities](https://snyk.io/test/github/inventwo/iobroker.vis-inventwo/badge.svg)](https://github.com/inventwo/ioBroker.vis-inventwo/tree/master?tab=security-ov-file)
[![Build status](https://ci.appveyor.com/api/projects/status/2hvs4fvfms7xhmnw?svg=true)](https://ci.appveyor.com/project/inventwo/iobroker-vis-inventwo)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/inventwo/ioBroker.vis-inventwo?tab=License-1-ov-file)

[![Paypal Donation](https://img.shields.io/badge/paypal-donate%20%7C%20spenden-green.svg)](https://www.paypal.com/donate?hosted_button_id=7W6M3TFZ4W9LW)


## Widgets für den ioBroker.vis Adapter

Schalter, Slider, Tabellen, Regler, Checkboxen, Radiobuttons und mehr...<br>
Mit unserem Widgets-Set hast du die freie Wahl individuelle Visualisierungen ganz einfach für dein Smart-Home zu erstellen. 


### <span style="color:red">Wichtiger Hinweis für Vis 2</span>
Der Adapter ist für VIS 1 entwickelt und getestet. In Vis 2 können Fehler auftreten die die Nutzung deiner Visualisierung nicht ermöglichen. 
Eine nahtlose Kompatibilität wird nicht möglich sein. Ein neuer Adapter für Vis 2 findest du hier: https://github.com/inventwo/ioBroker.vis-2-widgets-inventwo

## Inhalt des Adapters

Verschiedene Widgets zum schalten, navigieren und mehr.

![Vorschau Universal- & Multi-Widget](img/preview_universal_widget.png)

Analog Uhren [Weitere Informationen](https://github.com/inventwo/ioBroker.vis-inventwo/wiki/Universal-%26-Multi-Widget-Inhaltstypen)

![Vorschau Analog Uhren](img/preview_clocks.png)

Digital Uhren [Weitere Informationen](https://github.com/inventwo/ioBroker.vis-inventwo/wiki/Universal-%26-Multi-Widget-Inhaltstypen)

![Vorschau Digital Uhren](img/preview_clock_digital.png)

Colorpicker [Weitere Informationen](https://github.com/inventwo/ioBroker.vis-inventwo/wiki/Colorpicker)

![Vorschau Colorpicker](img/Preview_Colorpicker.png)

Für mehr Infos schaue dich im [Wiki](https://github.com/inventwo/ioBroker.vis-inventwo/wiki) um.

###### Alle Widgets ab Version 2.0.0

<table>
   <tr>
        <td><center><b>Universal<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Universal.gif"></td>
        <td><center><b>Multi<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Multi.gif"></td>
        <td><center><b>Image<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Image.png"></td>
         <td><center><b>Table<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Table.png"></td>
    </tr>
<tr><td colspan=4></td></tr>   
    <tr>
        <td><center><b>List<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/List.png"></td>
        <td><center><b>Marquee<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Marquee.gif"></td>
        <td><center><b>Radio Button<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Radio.gif"></td>
        <td><center><b>Slider<br>vertical</b><br><img src="widgets/vis-inventwo/img/Slider2.gif"></td>
    </tr>
<tr><td colspan=4></td></tr>   
      <tr>
        <td><center><b>Slider<br>horizontal</b><br><img src="widgets/vis-inventwo/img/Slider1.gif"></td>
        <td><center><b>Colorslider<br>horizontal</b><br><img src="widgets/vis-inventwo/img/ColorSliderHor.png"></td>
        <td><center><b>Colorslider<br>horizontal</b><br><img src="widgets/vis-inventwo/img/ColorSliderVert.png"></td>
        <td><center><b>Toggle Switch<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Toggle.gif"></td>
    </tr>
<tr><td colspan=4></td></tr>   
      <tr>
        <td><center><b>Basic Switch<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Switch.gif"></td>
        <td><center><b>Checkbox/<br>Radiobutton</b><br><img src="widgets/vis-inventwo/img/Check.gif"></td>
        <td><center><b>Colorpicker<br>&nbsp;</b><br><img src="widgets/vis-inventwo/img/Colorpicker.png"></td>
    </tr>
</table>




Mit Hilfe unserer Widgets lassen sich folgende Projekte verwirklichen. Zur Zeit befinden sich in unserem Adapter NUR die reinen Schaltflächen (siehe oben). Uhr und Wetter stammen aus anderen Adaptern und müssen ggf. zusätzlich installiert werden.

![Beispiel](img/Preview.png)

![Beispiel](img/Preview2.png)
---

## Unterstützung

Falls Dir unsere Arbeit gefällt und Du uns unterstützen möchtest, wir freuen uns über jede Spende.

(Dieser Link führt zu unserem PayPal-Konto und steht in keiner Verbindung zum ioBroker)

[![Spende](img/spende.png)](https://www.paypal.com/donate?hosted_button_id=7W6M3TFZ4W9LW)

---

## Changelog

### **WORK IN PROGRESS**
- (iobroker-bot) Adapter requires node.js >= 20 now.

<!--
  Placeholder for the next version (at the beginning of the line):
  ### **WORK IN PROGRESS**
-->

### 3.3.5
- Fixed: [#688](https://github.com/inventwo/ioBroker.vis-inventwo/issues/688) Radiobutton kann kein boolean schreiben
- Fixed: [#736](https://github.com/inventwo/ioBroker.vis-inventwo/issues/736) Fehler vom Adapter Checker in package.json und io-package.json behoben
- Fixed: [#678](https://github.com/inventwo/ioBroker.vis-inventwo/issues/678) mode in io-package von daemon auf once umgestellt

### 3.3.4
- Fixed: [#455](https://github.com/inventwo/ioBroker.vis-inventwo/issues/455) Color-Picker-Widget "verschwindet" bei Auswahl von CIE
- Fixed: [#369](https://github.com/inventwo/ioBroker.vis-inventwo/issues/369) Simple Slider Farbe der Schritte nicht änderbar
- Fixed: [#361](https://github.com/inventwo/ioBroker.vis-inventwo/issues/361) Image Widget zeigt immer das Image für true
- Fixed: [#564](https://github.com/inventwo/ioBroker.vis-inventwo/issues/564) Radiobutton - Bildfarbe true wird von false übernommen
- Fixed: [#461](https://github.com/inventwo/ioBroker.vis-inventwo/issues/461) Doppelauslösung Taster/state und "slider lässt sich nicht "sliden bei Windows Touch
- Fixed: [#474](https://github.com/inventwo/ioBroker.vis-inventwo/issues/474) json Tabelle mit "Binding"
- Fixed: [#580](https://github.com/inventwo/ioBroker.vis-inventwo/issues/580) JSON Table Widget: Farbänderung der Werte via Schwellwert ist nur im Editor, nicht in Runtime sichtbar.
- Fixed: [#622](https://github.com/inventwo/ioBroker.vis-inventwo/issues/622) Think about to fix the issues found by adapter checker

### 3.3.3
- Problem mit Umrandungsfarbe beim Multi-Widget View in PopUp behoben

### 3.3.2
- Bugfix

### 3.3.1
- Bugfix

---

## License

MIT License (nur in englisch / englisch only)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

Icons from Icons8 https://icons8.com/

Copyright (c) 2025-2026 [jkvarel](https://github.com/jkvarel) und [skvarel](https://github.com/skvarel) von [inventwo](https://github.com/inventwo)


