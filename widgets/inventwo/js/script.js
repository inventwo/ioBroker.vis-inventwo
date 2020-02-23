"use strict";

if (vis.editMode) {
        // Add words for basic widgets
        $.extend(true, systemDictionary, {
            "text_true":        {"en": "Label for true",             "de": "Text für TRUE",      "ru": "Текст для 1"},
            "text_false":       {"en": "Label for false",            "de": "Text für FALSE",     "ru": "Текст для 0"},
            "width":            {"en": "Width",                      "de": "Breite",             "ru": "Ширина"},
            "auto":             {"en": "auto",                       "de": "auto",               "ru": "автоматически"},
            "true":             {"en": "true",                       "de": "true",               "ru": "да"},
            "false":            {"en": "false",                      "de": "false",              "ru": "нет"},
            "labelOn":          {"en": "Label for 'ON'",             "de": "Text für AN",        "ru": "Подпись для 'истина/1'"},
            "labelOff":         {"en": "Label for 'OFF'",            "de": "Text für AUS",       "ru": "Подпись для 'ложь/0'"},
            "resizeHandle":     {"en": "resizeHandle",               "de": "Hebelgröße",         "ru": "Изменить размер клавиши"},
            "resizeContainer":  {"en": "resizeContainer",            "de": "Konteinergröße",     "ru": "Изменить размер виджета"},
            "enableDrag":       {"en": "Enable drag",                "de": "Ziehen erlaubt",     "ru": "Можно тащить мышкой"},
            "enableFx":         {"en": "Animation",                  "de": "Animation",          "ru": "Анимация"},
            "duration":         {"en": "Effect duration(ms)",        "de": "Umschaltdauer(ms)",  "ru": "Длительность анимации"},
            "highlight_switch": {"en": "Highlight switch",           "de": "Highlight Schalter", "ru": "Подсветить выключатель"},
            "invert":           {"en": "Invert state",               "de": "Zustand invertieren", "ru": "Инвертировать состояние"},
            "test":             {"en": "Test",                       "de": "Testen",             "ru": "Тест"},
            "valFalse":         {"en": "False value",                "de": "Falsch-Wert",        "ru": "False-значение"},
            "valTrue":          {"en": "True value",                 "de": "Wahr-Wert",          "ru": "True-значение"},
            "lightStyle":       {"en": "Light style",                "de": "Hellstil",           "ru": "Светлый стиль"},
            "autoOff":          {"en": "Auto OFF in (ms)",           "de": "Auto AUS(ms)",       "ru": "Авто Выкл.(мс)"},
            "autoOff_tooltip":  {
                "en": "Chnage to previous state after given interval automatically",
                "de": "Ändert Zustand auf vorheriger nach eingegebenem Intervall",
                "ru": "Меняет состояние на обратное по истечении указанного времени"
            }
        });
    }

vis.binds.inventwo = {
    version: "0.0.1",
	showVersion: function () {
		if (vis.binds.inventwo.version) {
			console.log('Version vis-inventwo:' + vis.binds.inventwo.version);
            vis.binds.inventwo.version = null;
            vis.states.bind(adapter.config.Button,1);
		}
    },

    toggle: function (el, oid) {
        var $this = $(el);
        oid = $this.data('oid');
        var valFalse = false;
        var valTrue = true;

        var val = vis.states[oid + '.val'];

        if(val){
            var shadow = $(el).children().css('box-shadow');
            $(el).children().css('box-shadow',shadow + ', inset 0 0 0 1px green');
        }
        else{
            $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
        }
            
        if (oid && !vis.editMode) {
            var moved = false;
            $this.on('click touchend', function () {
                // Protect against two events
                if (vis.detectBounce(this)) return;
                if (moved) return;

                var val = vis.states[oid + '.val'];
                if(val == valFalse){
                    var shadow = $(el).children().css('box-shadow');
                    $(el).children().css('box-shadow',shadow + ', inset 0 0 0 1px green');
                    vis.setValue(oid,valTrue);
                }
                else if(val == valTrue){
                    vis.setValue(oid,valFalse);
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111');

                }
                else{
                    $(el).children().css('box-shadow','2px 2px 2px 1px #111111');
                    vis.setValue(oid,valFalse);
                }
                
            }).on('touchmove', function () {
                moved = true;
            }).on('touchstart', function () {
                moved = false;
            }).data('destroy', function (id, $widget) {
                $widget.off('click touchend').off('touchmove').off('touchstart');
            });
        }
    }
}