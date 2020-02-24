
"use strict";
vis.binds.materialdesign.viseditor = {
    imagesAndMaterialDesignIcons: function (widAttr) {
        try {
            var that = vis;

            let line = {
                // autocomplete for material icons
                input: '<input type="text" id="inspect_' + widAttr + '" class="vis-edit-textbox"/>'
            };

            if ($.fm) {
                // button for image dialog
                line.button = {
                    icon: 'ui-icon-note',
                    text: false,
                    title: _('Select image'),
                    click: function (/*event*/) {
                        var wdata = $(this).data('wdata');
                        var defPath = ('/' + (that.conn.namespace ? that.conn.namespace + '/' : '') + that.projectPrefix + 'img/');

                        var current = that.widgets[wdata.widgets[0]].data[wdata.attr];
                        //workaround, that some widgets calling direct the img/picure.png without /vis/
                        if (current && current.substring(0, 4) === 'img/') {
                            current = '/vis/' + current;
                        }

                        $.fm({
                            lang: that.language,
                            defaultPath: defPath,
                            path: current || defPath,
                            uploadDir: '/' + (that.conn.namespace ? that.conn.namespace + '/' : ''),
                            fileFilter: '',
                            folderFilter: false,
                            mode: 'open',
                            view: 'prev',
                            userArg: wdata,
                            conn: that.conn,
                            zindex: 1001
                        }, function (_data, userData) {
                            var src = _data.path + _data.file;
                            $('#inspect_' + wdata.attr).val(src).trigger('change');
                        });
                    }
                };
            }
            return line;

        } catch (ex) {
            console.error(`imagesAndMaterialDesignIcons: error: ${ex.message}, stack: ${ex.stack}`);
        }
    }
};