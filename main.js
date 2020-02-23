'use strict';


const utils = require('@iobroker/adapter-core'); // Get common adapter utils

const adapter = utils.Adapter('vis-inventwo');


adapter.on('ready', function () {
    main();
});



function main() {

    if(adapter.config.Button == "" || !adapter.config.Button){
        adapter.config.Button="#333333";
    }
    if(adapter.config.Active == "" || !adapter.config.Active){
        adapter.config.Active="#455618";
    }
    if(adapter.config.Text == "" || !adapter.config.Text){
        adapter.config.Text="#C7C7C7";
    }
    if(adapter.config.Radius == "" || !adapter.config.Radius){
        adapter.config.Radius=10;
    }
    if(adapter.config.Stripes == "" || !adapter.config.Stripes){
        adapter.config.Stripes="#393939";
    }
    if(adapter.config.Background == "" || !adapter.config.Background){
        adapter.config.Background='#989898';
    }

    adapter.setObjectNotExists('CSS', {
                                type: 'channel',
                                common: {
                                    role:  "inventwo",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });

    adapter.setObjectNotExists('CSS.Button', {
                                type: 'state',
                                common: {
                                    name:  "Button-Color",
                                    type:  "string",
                                    role:  "inventwo.color",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Button', {val: adapter.config.Button, ack: true});

    adapter.setObjectNotExists('CSS.Active', {
                                type: 'state',
                                common: {
                                    name:  "Button-Active-Color",
                                    type:  "string",
                                    role:  "inventwo.color",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Active', {val: adapter.config.Active, ack: true});
   
    adapter.setObjectNotExists('CSS.Text', {
                                type: 'state',
                                common: {
                                    name:  "Button-Text-Color",
                                    type:  "string",
                                    role:  "inventwo.color",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Text', {val: adapter.config.Text, ack: true});
   
     adapter.setObjectNotExists('CSS.Radius', {
                                type: 'state',
                                common: {
                                    name:  "Button-Radius",
                                    type:  "string",
                                    role:  "inventwo.design",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Radius', {val: adapter.config.Radius, ack: true});       

    adapter.setObjectNotExists('CSS.Stripes', {
                                type: 'state',
                                common: {
                                    name:  "Stripes-Active-Color",
                                    type:  "string",
                                    role:  "inventwo.color",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Stripes', {val: adapter.config.Stripes, ack: true});    

    adapter.setObjectNotExists('CSS.Background', {
                                type: 'state',
                                common: {
                                    name:  "Background-Color",
                                    type:  "string",
                                    role:  "inventwo.color",
                                    read:  true,
                                    write: true
                                },
                                native: {}
                            });
        adapter.setState('CSS.Background', {val: adapter.config.Background, ack: true});

}