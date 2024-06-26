﻿
  // NOTE: We pull these in from packaged sources in our header,
    // but here are the associated NPM packages that can be used instead

    // Packages
    // import Hammer from 'hammerjs';
    // import dicomParser from 'dicom-parser';
    // import * as cornerstone from 'cornerstone-core';
    // import * as cornerstoneMath from 'cornerstone-math';
    // import * as cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
    // import * as cornerstoneTools from '@cornerstonejs/tools';

    const baseUrl =
    window.ENVIRONMENT === 'development'
    ? 'http://localhost:4000/'
    : 'https://tools.cornerstonejs.org/examples/';

    _initCornerstone();
    _initInterface();

    const topgramElement = document.getElementById('topgram_element');
    const chestElement = document.getElementById('chest_element');
    const elements = [topgramElement, chestElement];

    // Init CornerstoneTools
    cornerstoneTools.init({
        globalToolSyncEnabled: true,
  });
  // image enable the dicomImage element and add canvas to it
  elements.forEach(element => {
        cornerstone.enable(element);
  });
    const toolName = 'ReferenceLines';

    const topgramImageIds = [
    `wadouri:${baseUrl}assets/dicom/bellona/topogram/IM-0001-0001.dcm`,
    ];

    const chestImageIds = new Array();
    // up to now it is hard coded 37 chest images
    for (let i = 1; i < 37; i++) {
        chestImageIds.push(
            `wadouri:${baseUrl}assets/dicom/bellona/chest_lung/${i}.dcm`
        );
  }

    const chestStack = {
        currentImageIdIndex: 0,
    imageIds: chestImageIds,
  };

    const topgramStack = {
        currentImageIdIndex: 0,
    imageIds: topgramImageIds,
  };

    // Add Default tools; set them active
    cornerstoneTools.addTool(cornerstoneTools.StackScrollTool);
    cornerstoneTools.addTool(cornerstoneTools.StackScrollMouseWheelTool);
    cornerstoneTools.setToolActive('StackScroll', {mouseButtonMask: 1 });
    cornerstoneTools.setToolActive('StackScrollMouseWheel', { });

    loadSeries(cornerstone, chestImageIds, chestElement, chestStack);
    loadSeries(cornerstone, topgramImageIds, topgramElement, topgramStack);

    function loadSeries(cornerstone, imageIds, element, stack) {
        // Cache all images and metadata
        imageIds.forEach(imageId => cornerstone.loadAndCacheImage(imageId));

    // Load and display first image in stack
    return cornerstone.loadImage(imageIds[0]).then(image => {
        // display this image
        cornerstone.displayImage(element, image);

    // set the stack as tool state
    cornerstoneTools.addStackStateManager(element, ['stack', toolName]);
    cornerstoneTools.addToolState(element, 'stack', stack);
    });
  }

    /***************************************************************************
     * UI & Boilerplate setup code
     **************************************************************************/

    /***
     *
     *
     */
    function _initCornerstone() {
        // Externals
        cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.Hammer = Hammer;

    // Image Loader
    const config = {
        webWorkerPath: `${baseUrl}assets/image-loader/cornerstoneWADOImageLoaderWebWorker.js`,
    taskConfiguration: {
        decodeTask: {
        codecsPath: `${baseUrl}assets/image-loader/cornerstoneWADOImageLoaderCodecs.js`,
        },
      },
    };
    cornerstoneWADOImageLoader.webWorkerManager.initialize(config);
  }

    /***
     *
     *
     */
    function _initInterface() {
    const handleClick = function(evt) {
      const action = this.dataset.action;
    const options = {
        mouseButtonMask:
    evt.buttons || convertMouseEventWhichToButtons(evt.which),
      };

    cornerstoneTools[`setTool${action}`](toolName, options);

    // Remove active style from all buttons
    const buttons = document.querySelectorAll('.set-tool-mode');
      buttons.forEach(btn => {
        btn.classList.remove('is-primary');
      });

    // Add active style to this button
    this.classList.add('is-primary');

    evt.preventDefault();
    evt.stopPropagation();
    evt.stopImmediatePropagation();
    return false;
    };

    const buttons = document.querySelectorAll('.set-tool-mode');

    buttons.forEach(btn => {
        btn.addEventListener('contextmenu', handleClick);
    btn.addEventListener('auxclick', handleClick);
    btn.addEventListener('click', handleClick);
    });
  }

  const convertMouseEventWhichToButtons = which => {
    switch (which) {
      // no button
      case 0:
    return 0;
    // left
    case 1:
    return 1;
    // middle
    case 2:
    return 4;
    // right
    case 3:
    return 2;
    }
    return 0;
  };
