import * as THREE from "../../lib/three/build/three.module.js";
import {MyAmmoBase} from "./MyAmmoBase.js";

export class MyPhysicsBox extends MyAmmoBase
{
	constructor(ammoPhysicsWorld)
	{
		super();
		this.ammoPhysicsWorld = ammoPhysicsWorld;
		this.rigidBodyWallRight = undefined;
		this.rigidBodyWallLeft = undefined;
		this.rigidBodyWallTop = undefined;
		this.rigidBodyWallBottom = undefined;
		this.rigidBodyWallBallSupport = undefined;
		this.rigidBodyWallAngledTop = undefined;
		this.rigidBodyWallAngledTop2 = undefined;
		this.rigidBodyWallObstacle1 = undefined;
		this.rigidBodyWallObstacle2 = undefined;
		this.rigidBodyWallObstacle3 = undefined;
		this.rigidBodyWallObstacle4 = undefined;


		this.meshWallRight = undefined;
		this.meshWallLeft = undefined;
		this.meshWallTop = undefined;
		this.meshWallBottom = undefined;
		this.meshWallBallSupport = undefined;
		this.meshWallAngledTop = undefined;
		this.meshWallAngledTop2 = undefined;
		this.meshWallObstacle1 = undefined;
		this.meshWallObstacle2 = undefined;
		this.meshWallObstacle3 = undefined;
		this.meshWallObstacle4 = undefined;

	}

	create()
	{
		//***********vegg nummer en (Høyre)***************
		// THREE:
		let geometryWallRight = new THREE.BoxGeometry( 1, 3, 35);
		this.meshWallRight = new THREE.Mesh(geometryWallRight, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallRight.position.set(10, 1, 0);
		this.meshWallRight.castShadow = true;
		this.meshWallRight.userData.name = 'rightWall';
		// AMMO:
		let boxShapeWallRight = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 35/2) );  //NB! Delt på 2!!
		this.rigidBodyWallRight = this.createAmmoRigidBody(boxShapeWallRight, this.meshWallRight, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallRight, this.meshWallRight, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer to (Venstre)***************
		// THREE:
		let geometryWallLeft = new THREE.BoxGeometry( 1, 3, 35);
		this.meshWallLeft = new THREE.Mesh(geometryWallLeft, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallLeft.position.set(-12.5, 1, 0);
		this.meshWallLeft.castShadow = true;
		this.meshWallLeft.userData.name = 'leftWall';
		// AMMO:
		let boxShapeWallLeft = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 35/2) );
		this.rigidBodyWallLeft = this.createAmmoRigidBody(boxShapeWallLeft, this.meshWallLeft, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallLeft, this.meshWallLeft, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer tre (Topp)***************
		// THREE:
		let geometryWallTop = new THREE.BoxGeometry( 30, 3, 1);
		this.meshWallTop = new THREE.Mesh(geometryWallTop, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallTop.position.set(0, 1, -16);
		this.meshWallTop.castShadow = true;
		this.meshWallTop.userData.name = 'topWall';
		// AMMO:
		let boxShapeWallTop = new Ammo.btBoxShape( new Ammo.btVector3( 30/2, 3/2, 1/2) );
		this.rigidBodyWallTop = this.createAmmoRigidBody(boxShapeWallTop, this.meshWallTop, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallTop, this.meshWallTop, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer tre (Topp)***************
		// THREE:
		let geometryWallBottom = new THREE.BoxGeometry( 30, 3, 1);
		this.meshWallBottom = new THREE.Mesh(geometryWallBottom, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallBottom.position.set(0, 1, 16);
		this.meshWallBottom.castShadow = true;
		this.meshWallBottom.userData.name = 'bottomWall';
		// AMMO:
		let boxShapeWallBottom = new Ammo.btBoxShape( new Ammo.btVector3( 30/2, 3/2, 1/2) );
		this.rigidBodyWallBottom = this.createAmmoRigidBody(boxShapeWallBottom, this.meshWallBottom, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallBottom, this.meshWallBottom, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer fire (Støtte vegg for ballen)***************
		// THREE:
		let geometryWallBallSupport = new THREE.BoxGeometry( 1, 3, 25);
		this.meshWallBallSupport = new THREE.Mesh(geometryWallBallSupport, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallBallSupport.position.set(5, 1, 5);
		this.meshWallBallSupport.castShadow = true;
		this.meshWallBallSupport.userData.name = 'ballSupportWall';
		// AMMO:
		let boxShapeWallBallSupport = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 25/2) );
		this.rigidBodyWallBallSupport = this.createAmmoRigidBody(boxShapeWallBallSupport, this.meshWallBallSupport, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallBallSupport, this.meshWallBallSupport, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer fem (Skråvegg topp høyre)***************
		// THREE:
		let geometryWallAngledTop = new THREE.BoxGeometry( 0.5, 3, 9);
		this.meshWallAngledTop = new THREE.Mesh(geometryWallAngledTop, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallAngledTop.position.set(6, 1, -14);
		this.meshWallAngledTop.rotateY(-15)
		this.meshWallAngledTop.castShadow = true;
		this.meshWallAngledTop.userData.name = 'angledWallTopRight';
		// AMMO:
		let boxShapeWallAngledTop = new Ammo.btBoxShape( new Ammo.btVector3( 0.5/2, 3/2, 9/2) );
		this.rigidBodyWallAngledTop = this.createAmmoRigidBody(boxShapeWallAngledTop, this.meshWallAngledTop, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallAngledTop, this.meshWallAngledTop, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer seks (Skråvegg topp venstre)***************
		// THREE:
		let geometryWallAngledTop2 = new THREE.BoxGeometry( 0.5, 3, 9);
		this.meshWallAngledTop2 = new THREE.Mesh(geometryWallAngledTop2, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallAngledTop2.position.set(-8.5, 1, -14);
		this.meshWallAngledTop2.rotateY(15)
		this.meshWallAngledTop2.castShadow = true;
		this.meshWallAngledTop2.userData.name = 'angledWallTopLeft';
		// AMMO:
		let boxShapeWallAngledTop2 = new Ammo.btBoxShape( new Ammo.btVector3(0.5/2, 3/2, 9/2));
		this.rigidBodyWallAngledTop2 = this.createAmmoRigidBody(boxShapeWallAngledTop2, this.meshWallAngledTop2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallAngledTop2, this.meshWallAngledTop2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer sju (Første hinder)***************
		// THREE:
		let geometryWallObstacle1 = new THREE.BoxGeometry( 1, 3, 5);
		this.meshWallObstacle1 = new THREE.Mesh(geometryWallObstacle1, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallObstacle1.position.set(-4, 1, -4);
		this.meshWallObstacle1.castShadow = true;
		this.meshWallObstacle1.userData.name = 'obstacleWall1';
		// AMMO:
		let boxShapeWallObstacle1 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 5/2) );
		this.rigidBodyWallObstacle1 = this.createAmmoRigidBody(boxShapeWallObstacle1, this.meshWallObstacle1, 0.7, 0.5, 500)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallObstacle1, this.meshWallObstacle1, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer åtte (Andre hinder)***************
		// THREE:
		let geometryWallObstacle2 = new THREE.BoxGeometry( 1, 3, 5);
		this.meshWallObstacle2 = new THREE.Mesh(geometryWallObstacle2, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallObstacle2.position.set(2, 1, -4);
		this.meshWallObstacle2.castShadow = true;
		this.meshWallObstacle2.userData.name = 'obstacleWall2';
		// AMMO:
		let boxShapeWallObstacle2 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 5/2) );
		this.rigidBodyWallObstacle2 = this.createAmmoRigidBody(boxShapeWallObstacle2, this.meshWallObstacle2, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallObstacle2, this.meshWallObstacle2, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer ni (Treddje hinder)***************
		// THREE:
		let geometryWallObstacle3 = new THREE.BoxGeometry( 1, 3, 5);
		this.meshWallObstacle3 = new THREE.Mesh(geometryWallObstacle3, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallObstacle3.position.set(-1, 1, 0);
		this.meshWallObstacle3.castShadow = true;
		this.meshWallObstacle3.userData.name = 'obstacleWall3';
		// AMMO:
		let boxShapeWallObstacle3 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 5/2) );
		this.rigidBodyWallObstacle3 = this.createAmmoRigidBody(boxShapeWallObstacle3, this.meshWallObstacle3, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallObstacle3, this.meshWallObstacle3, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

		//***********vegg nummer ti (Fjerde hinder)***************
		// THREE:
		let geometryWallObstacle4 = new THREE.BoxGeometry( 1, 3, 5);
		this.meshWallObstacle4 = new THREE.Mesh(geometryWallObstacle4, new THREE.MeshPhongMaterial({color: 'red'}));
		this.meshWallObstacle4.position.set(-7, 1, 0);
		this.meshWallObstacle4.castShadow = true;
		this.meshWallObstacle4.userData.name = 'obstacleWall4';
		// AMMO:
		let boxShapeWallObstacle4 = new Ammo.btBoxShape( new Ammo.btVector3( 1/2, 3/2, 5/2) );
		this.rigidBodyWallObstacle4 = this.createAmmoRigidBody(boxShapeWallObstacle4, this.meshWallObstacle4, 0.7, 0.5, 0)
		this.ammoPhysicsWorld.addPhysicsObject(this.rigidBodyWallObstacle4, this.meshWallObstacle4, true, this.ammoPhysicsWorld.COLLISION_GROUP_BOX, this.ammoPhysicsWorld.COLLISION_GROUP_SPHERE | this.ammoPhysicsWorld.COLLISION_GROUP_PLANE | this.ammoPhysicsWorld.COLLISION_GROUP_BOX | this.ammoPhysicsWorld.COLLISION_GROUP_HINGE_SPHERE);

	}


	keyCheck(deltaTime, currentlyPressedKeys) {}
}
