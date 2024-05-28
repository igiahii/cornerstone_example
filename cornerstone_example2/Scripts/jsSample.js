
// Doing some dark magic here to make sure we don't add our
// synchronizer/tool until all canvases have rendered an image.
let canvasesReady = false;
let numImagesLoaded = 0;
const firstElement = document.getElementById('topgram_element');
const secondElement = document.getElementById('chest_element');

function addReferenceLinesTool() {
    const synchronizer = new cornerstoneTools.Synchronizer(
        'cornerstonenewimage',
        cornerstoneTools.updateImageSynchronizer
    );

    // These have to be added to our synchronizer before we pass it to our tool
    synchronizer.add(firstElement);
    synchronizer.add(secondElement);

    cornerstoneTools.addTool(cornerstoneTools.ReferenceLinesTool);
    cornerstoneTools.setToolEnabled('ReferenceLines', {
        synchronizationContext: synchronizer,
    });
}

const handleImageRendered = (evt) => {
    evt.detail.element.removeEventListener('cornerstoneimagerendered', handleImageRendered)

    numImagesLoaded++;
    if (numImagesLoaded === 2) {
        addReferenceLinesTool();
    }
}
firstElement.addEventListener('cornerstoneimagerendered', handleImageRendered)
secondElement.addEventListener('cornerstoneimagerendered', handleImageRendered)

