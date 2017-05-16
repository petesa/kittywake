var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, resp = false;
function init(anim) {
	canvas = document.getElementById("animation");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete(anim);
}
function handleComplete(anim) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	//exportRoot = new lib.loading();
	if(typeof exportRoot != "undefined")
		stage.removeChild(exportRoot);
	exportRoot = new lib[anim]();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.

	makeResponsive(false,'both',false,1);
	fnStartAnimation();
}

function makeResponsive(isResp, respDim, isScale, scaleType) {
	var lastW, lastH, lastS=1;
	window.addEventListener('resize', resizeCanvas);
	resizeCanvas();
	function resizeCanvas() {
		var w = lib.properties.width, h = lib.properties.height;
		var iw = window.innerWidth, ih=window.innerHeight;
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
		if(isResp) {
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
				sRatio = lastS;
			}
			else if(!isScale) {
				if(iw<w || ih<h)
					sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==1) {
				sRatio = Math.min(xRatio, yRatio);
			}
			else if(scaleType==2) {
				sRatio = Math.max(xRatio, yRatio);
			}
		}
		canvas.width = w*pRatio*sRatio;
		canvas.height = h*pRatio*sRatio;
		canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
		canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
		stage.scaleX = pRatio*sRatio;
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;
	}
}
