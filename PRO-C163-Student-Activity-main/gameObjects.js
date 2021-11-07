AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);

    }
  },
});

//boxes
//Add the component code here
AFRAME.registerComponent('boxes',{
  schema:{
    height:{type:'number',default:3},
    width:{type:'number',default:3},
    depth:{type:'number',default:3},
  },
  init:function(){
    for(var i = 0;i<20;i++){
      var box = document.createElement('a-entity')
      box.setAttribute('id','box'+i)
      posX = Math.random()*200 -100
      posY = 1.5
      posZ = Math.random()*200 -100
      position = {x:posX,y:posY,z:posZ}
      box.setAttribute('position',position)
      box.setAttribute('geometry',{
        primitive:'box',
        height:this.data.height,
        width:this.data.width,
        depth:this.data.depth,
      });
      box.setAttribute('material',{src:'./images/boxtexture1.jpg',repeat:'1 1 1'});
      box.setAttribute('static-body',{});
      var sceneEl = document.querySelector('#scene')
      sceneEl.appendChild(box)
    }
  }
});