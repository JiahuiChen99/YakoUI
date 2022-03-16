import {Edge} from 'butterfly-dag';

class YakoNodeEdge extends Edge {
    draw(obj) {
        let path = super.draw(obj);

        return path;
    }
    drawLabel(texts) {
        console.log(texts)
    }
}

export default YakoNodeEdge;
