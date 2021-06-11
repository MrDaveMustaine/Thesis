import {
	CanvasTexture,
	CircleBufferGeometry,
	Color,
	DoubleSide,
	Group,
	IcosahedronBufferGeometry,
	Mesh,
	MeshBasicMaterial,
	Shape,
	ShapeBufferGeometry
} from "../../../build/three.module.js";
import { ViveController } from "../vr/ViveController.js";

var CustomViveController = function (id) {
	ViveController.call( this, id );

	var PI2 = Math.PI * 2;

	function onAxisChanged( event ) {

		if ( this.getButtonState( 'thumbpad' ) === false ) return;

			




	}

this.addEventListener( 'axischanged', onAxisChanged );

}



CustomViveController.prototype = Object.create( ViveController.prototype );
CustomViveController.prototype.constructor = CustomViveController;

export { CustomViveController };
