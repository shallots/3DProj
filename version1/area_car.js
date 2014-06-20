   ////////////////////////////////////ground05///////////////////////////////////
function createAreaCar(){
   /*//汽车module_car1，铲车，太大
    var loader_module_car1 = new THREE.JSONLoader(true);
    var module_car1;
    loader_module_car1.load("module_car1.js", function ( geometry,materials) {
        module_car1 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car1.position.set(300,0,700);
        module_car1.rotation.y = - 0.5 * Math.PI;
        module_car1.scale.set(2,2,2);
        scene.add(module_car1);
        //scene.add(module_car1);
    });

    //汽车module_car2，没轮胎
    var loader_module_car2 = new THREE.JSONLoader(true);
    var module_car2;
    loader_module_car2.load("module_car2.js", function ( geometry,materials) {
        module_car2 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car2.position.set(300,0,1100);
        module_car2.rotation.y = - 0.5 * Math.PI;
        module_car2.scale.set(2,2,2);
        scene.add(module_car2);
        //scene.add(module_car2);
    });

    //汽车module_car3，有错误
    var loader_module_car3 = new THREE.JSONLoader(true);
    var module_car3;
    loader_module_car3.load("module_car3.js", function ( geometry,materials) {
        module_car3 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car3.position.set(385,0,950);
        //module_car3.rotation.y = - 0.5 * Math.PI;
        module_car3.scale.set(2,2,2);
        scene.add(module_car3);
        //scene.add(module_car3);
    });
*/
    //汽车module_car4，很好，可用来控制
    var loader_module_car4 = new THREE.JSONLoader(true);
    var module_car4;
    loader_module_car4.load("module_car4.js", function ( geometry,materials) {
        module_car4 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car4.position.set(385,0,1050);
        //module_car4.rotation.y = - 0.5 * Math.PI;
        module_car4.scale.set(0.1,0.1,0.1);
        scene.add(module_car4);
        //scene.add(module_car4);
    });

    //汽车module_car5，单一颜色
    var loader_module_car5 = new THREE.JSONLoader(true);
    var module_car5;
    loader_module_car5.load("module_car5.js", function ( geometry,materials) {
        module_car5 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car5.position.set(200,0,950);
        //module_car5.rotation.y = - 0.5 * Math.PI;
        module_car5.scale.set(0.2,0.2,0.2);
        scene.add(module_car5);
        //scene.add(module_car5);
    });


    //汽车module_car7_1,可用来控制
    var loader_module_car7_1 = new THREE.JSONLoader(true);
    var module_car7_1;
    loader_module_car7_1.load("module_car7_1.js", function ( geometry,materials) {
        module_car7_1 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car7_1.position.set(200,0,850);
        module_car7_1.rotation.y = - 0.5 * Math.PI;
        module_car7_1.scale.set(0.15,0.15,0.15);
        scene.add(module_car7_1);
        //scene.add(module_car7_1);
    });

    //汽车module_car8,可用来控制
    var loader_module_car8 = new THREE.JSONLoader(true);
    var module_car8;
    loader_module_car8.load("module_car8.js", function ( geometry,materials) {
        module_car8 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car8.position.set(300,0,800);
        //module_car8.rotation.y = - 0.5 * Math.PI;
        module_car8.scale.set(0.2,0.2,0.2);
        scene.add(module_car8);
        //scene.add(module_car8);
    });

    //汽车module_car11_1,大卡车
    var loader_module_car11_1 = new THREE.JSONLoader(true);
    var module_car11_1;
    loader_module_car11_1.load("module_car11_1.js", function ( geometry,materials) {
        module_car11_1 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car11_1.position.set(550,0,1000);
        module_car11_1.rotation.y = - 0.5 * Math.PI;
        module_car11_1.scale.set(0.2,0.2,0.2);
        scene.add(module_car11_1);
        //scene.add(module_car11_1);
    });

    //汽车module_car12，面包车
    var loader_module_car12 = new THREE.JSONLoader(true);
    var module_car12;
    loader_module_car12.load("module_car12.js", function ( geometry,materials) {
        module_car12 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car12.position.set(500,0,750);
        //module_car12.rotation.y = - 0.5 * Math.PI;
        module_car12.scale.set(1,1,1);
        scene.add(module_car12);
        //scene.add(module_car12);
    });

    //汽车module_car13，公交车
    var loader_module_car13 = new THREE.JSONLoader(true);
    var module_car13;
    loader_module_car13.load("module_car13.js", function ( geometry,materials) {
        module_car13 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car13.position.set(100,0,750);
        //module_car13.rotation.y = - 0.5 * Math.PI;
        module_car13.scale.set(0.5,0.5,0.5);
        scene.add(module_car13);
        //scene.add(module_car13);
    });

    //汽车module_car14_1，吊车
    var loader_module_car14_1 = new THREE.JSONLoader(true);
    var module_car14_1;
    loader_module_car14_1.load("module_car14_1.js", function ( geometry,materials) {
        module_car14_1 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car14_1.position.set(100,0,1000);
        //module_car14_1.rotation.y = - 0.5 * Math.PI;
        module_car14_1.scale.set(0.01,0.01,0.01);
        scene.add(module_car14_1);
        //scene.add(module_car14_1);
    });

    //汽车module_car15，跑车
    var loader_module_car15 = new THREE.JSONLoader(true);
    var module_car15;
    loader_module_car15.load("module_car15.js", function ( geometry,materials) {
        module_car15 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car15.position.set(300,0,950);
        module_car15.rotation.y =  Math.PI;
        module_car15.scale.set(1.5,1.5,1.5);
        scene.add(module_car15);
        //scene.add(module_car15);
    });

    //汽车module_car16，跑车
    var loader_module_car16 = new THREE.JSONLoader(true);
    var module_car16;
    loader_module_car16.load("module_car16.js", function ( geometry,materials) {
        module_car16 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car16.position.set(600,0,700);
        module_car16.rotation.y =  Math.PI;
        module_car16.scale.set(2,2,2);
        scene.add(module_car16);
        //scene.add(module_car16);
    });

    //汽车module_car17，越野摩托车
    var loader_module_car17 = new THREE.JSONLoader(true);
    var module_car17;
    loader_module_car17.load("module_car17.js", function ( geometry,materials) {
        module_car17 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car17.position.set(250,0,1000);
        module_car17.rotation.y =  Math.PI;
        module_car17.scale.set(1,1,1);
        scene.add(module_car17);
        //scene.add(module_car17);
    });

    //汽车module_car20，跑车
    var loader_module_car20 = new THREE.JSONLoader(true);
    var module_car20;
    loader_module_car20.load("module_car20.js", function ( geometry,materials) {
        module_car20 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car20.position.set(600,0,900);
        module_car20.rotation.y =  Math.PI;
        module_car20.scale.set(1,1,1);
        scene.add(module_car20);
        //scene.add(module_car20);
    });


    /*//汽车module_car10,有错误
    var loader_module_car10 = new THREE.JSONLoader(true);
    var module_car10;
    loader_module_car10.load("module_car10_2.js", function ( geometry,materials) {
        module_car10 = new Physijs.Mesh(geometry, new THREE.MeshFaceMaterial(materials),9500);
        module_car10.position.set(100,0,850);
        module_car10.rotation.y = - 0.5 * Math.PI;
        module_car10.scale.set(0.05,0.05,0.05);
        scene.add(module_car10);
        //scene.add(module_car10);
    });*/
