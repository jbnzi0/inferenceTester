const { spawn } = require('child_process');
const fs = require('fs');

module.exports = {

    inference: function(algo){
        var env = 'computer-vision';
            originalpath = '/Users/golfdivine/Desktop/CS/ESIEA/2020-2021/PFE/inferenceTester';
            
        switch(algo) {
            case 'efficientdet':
                console.log('EfficientDet');
                break;
            case 'frcnn':
                console.log('Faster-RCNN');
                break;
            case 'ssd':
                console.log('SSD');
                break;
            case 'yolo':
                console.log('YOLOv5');
                path = originalpath + "/server/deepnet/YOLOv5/yolov5/detect.py";
                cmd = `conda run -n ${env} python ${path}`;
                child = spawn(`bash -lc "${cmd}"`, {shell: true});
                child.stdout.on('data', (data) => {
                    console.log("\n" + data.toString());
                });

                fs.writeFileSync(originalpath + '/client/src/InferenceResults/itworks.txt', 'w')

                return "Inference tested successfully on YOLOv5";
                break;
            default:
                console.error("Non-existent algorithm");
        }

        //move res into folders for front
    }

}