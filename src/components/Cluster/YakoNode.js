import {Node} from 'butterfly-dag';
import {mdiContentSave, mdiExpansionCard, mdiMemory} from "@mdi/js";

class YakoNode extends Node {

    /**
     * callback after node mount
     */
    mounted() {
        console.log("YakoNode rendered successfully")
    }

    /**
     * node draw function
     * @param {obj} data - node data
     * @return {dom} - node dom
     */
    draw(obj) {
        let node = document.createElement('div');
        node.classList.add('absolute', 'w-auto', 'h-auto', 'bg-[#3c3a3a]', 'rounded-lg', 'text-slate-200', 'fill-slate-300');

        // YakoNode header
        let header = document.createElement('div');
        header.classList.add('flex', 'w-full', 'h-full', 'border-b', 'font-bold', 'p-2', 'justify-center');
        header.innerText = 'Node #';

        // YakoNode body
        let body = document.createElement('div');
        body.classList.add('flex', 'flex-col', 'p-2')

        // CPU
        let cpu = genSVGItem(mdiMemory, 'eXtreme CPU');

        // GPU
        let gpu = genSVGItem(mdiExpansionCard, 'NVIDIA RTX 5000');

        // Memory
        let memory = genSVGItem(mdiContentSave, '16GB');

        body.appendChild(cpu);
        body.appendChild(gpu);
        body.appendChild(memory);

        // Add all elements to the node
        node.appendChild(header);
        node.appendChild(body);

        return node;
    }
}

/**
 * Generates an SVG icon DOM item
 * @param svg_icon SVG path from mdicons lib
 * @return {SVGSVGElement}
 */
function genSVGIcon(svg_icon) {
    let icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute("height", "24px");
    icon.setAttribute("width", "24px");

    const icon_path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );
    // Set the SVG icon path
    icon_path.setAttribute('d', svg_icon);

    icon.appendChild(icon_path);
    return icon;
}

/**
 * Generates and item with a SVG icon & text
 * @param svg_icon SVG path from mdicons lib
 * @param text text to display
 * @return {HTMLDivElement}
 */
function genSVGItem(svg_icon, text) {
    let item = document.createElement('div');
    item.classList.add('flex', 'w-full', 'h-fit', 'space-x-2');

    let svg_item = document.createElement('div');
    svg_item.appendChild(genSVGIcon(svg_icon));

    let item_text = document.createElement('div');
    item_text.innerText = text;

    item.appendChild(svg_item);
    item.appendChild(item_text);

    return item;
}

export default YakoNode;