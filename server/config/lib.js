const { spawn } = require('child_process');

module.exports = {

    inference: function(algo){
        var env = 'computer-vision';
            deepnet = '/Users/golfdivine/Desktop/CS/ESIEA/2020-2021/PFE/inferenceTester/server/deepnet/';
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
                path = deepnet + "YOLOv5/yolov5/detect.py";
                cmd = `conda run -n ${env} python ${path}`;
                child = spawn(`bash -lc "${cmd}"`, {shell: true});
                child.stdout.on('data', (data) => {
                    console.log("\n" + data.toString());
                });
                child.on('close', (code) => {
                    console.log(`child process close all stdio with code ${code}`);
                });
                return "Inference tested successfully on YOLOv5";
                break;
            default:
                console.error("Non-existent algorithm");
        }

        //move res into folders for front
    }

}