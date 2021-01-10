# Inference Tester

Inference Tester is a web application that can test the inference of several DL pre-trained models. 

## How does it works 

It takes in input one or more images of pollens analyzed in the laboratory (x100), allows to choose between SSD, YOLOv5, EfficientDet and Faster-RCNN.

## Installation

For the React client, you need to go to the client folder to install the required packages. You have to do the same for the Express server.

```bash
npm install
```

After that, go to deepnet/YOLOv5 and unzip the zip file. Go inside the newly created folder (yolov5) and install the requirements.txt.

```bash
pip -r install requirements.txt
```
## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
