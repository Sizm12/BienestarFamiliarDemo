odoo.define('pos_action_button.ActionButton', function (require){
    "use strict";
    
    //Require POS Screen
    var pos_screens = require('point_of_sale.screens');
    
    //create a new Button by Extending the base ActionButtonWidget
    var DashboardButton = pos_screens.ActionButtonWidget.extend({
        template: 'DashboardButton',
        button_click: function(){
            alert('Dashboard Button Clicked');
        }
    });
    
    //Define the Dashboard Button
    pos_screen.define_action_button({
        'name': 'Dashboard',
        'widget': DashboardButton,
        'condition': function(){return this.pos},
    });
});