# Inference Tester

Inference Tester is a web application that can test the inference of several DL pre-trained models. This app is a proof-of-concept developed to test the inferences on our models from [beeopicture](https://github.com/Ghaust/beeopicture). We used Adobe XD to design the app and React/Express for the development.

![](https://media.discordapp.net/attachments/486616090202603530/797837456576741396/Screenshot_2021-01-10_at_15.40.35.png)
## How does it works 

It takes in input one or more images of pollens analyzed in the laboratory (x100), allows to choose between SSD, YOLOv5, EfficientDet and Faster-RCNN.

## Configuration

For the React client, you need to go to the client folder to install the required packages. You have to do the same for the Express server.

```bash
npm install
```

After that, go to deepnet/YOLOv5 and unzip the zip file. Go inside the newly created folder (yolov5) and install the requirements.txt.

```bash
pip -r install requirements.txt
```

You have to make a few adjustements in the code to make it work. First in yolov5/detect.py, you need to replace the path by yours to the inferenceTester folder at the line 148.

Same in server/config/lib.js. Put your path at the line 7 and then whether you are using a conda env or not change the python command at line 21.

## Usage

When the configuration is done, you just need to start the client with npm start and you can start the server with nodemon or node.
