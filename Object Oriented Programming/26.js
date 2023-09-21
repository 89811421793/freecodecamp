let isCuteMixin = function(obj) {
    obj.isCute = function() {
      return true;
    };
  };
  let singMixin = function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
    };
  };
  
  let funModule = (function () {
    return {
      isCuteMixin: function(obj) {
        isCute = function() {
      return true;
    };
      },
      singMixin: function(obj) {
        obj.sing = () => 
      console.log("Singing to an awesome tune");
      }
    }
  })();
  
  /*IIFE is often used to group related functionality into a single object or module and to group several mixins into a bundle/module/chunk, for instance here it retuns an obj motionModule:
  let motionModule = (function () {
    return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log("Gliding on the water");
        };
      },
      flyMixin: function(obj) {
        obj.fly = function() {
          console.log("Flying, wooosh!");
        };
      }
    }
  })();
  
  motionModule.glideMixin(duck);
  duck.glide();
  */