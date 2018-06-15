import aframe from '@ajwest/aframe';

AFRAME.registerComponent('face-notifications', {
  schema: {},
  init: function() {
    this.notifications = [];
  },
  update: function() {
    
  },
  tick: function(time, timeDelta) {
    
  },
  addNotification: function(notification) {
    this.notifications = this.notificiations.concat(notification);
  }
});