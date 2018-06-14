import AFRAME from '@ajwest/aframe';
import IO3D from '3dio';
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