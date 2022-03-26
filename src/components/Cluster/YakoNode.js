import {Node} from 'butterfly-dag';
import {mdiContentSave, mdiCrown, mdiExpansionCard, mdiMemory} from "@mdi/js";
import formatBytes from "@/services/utils/utils";
/*eslint-disable*/
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
        let yakonode_info = obj.options.data;
        let node = document.createElement('div');

        // Add styles to the node
        node.style.top = obj.top + 'px'
        node.style.left = obj.left + 'px'
        node.id = obj.id

        node.classList.add('absolute', 'w-auto', 'h-auto', 'bg-[#3c3a3a]', 'rounded-lg', 'text-slate-200', 'fill-slate-300');

        // YakoNode header
        let header;
        if (obj.id[0] === 'm') {
            header = genYakoMasterHeader(obj.id);
        } else {
            header = document.createElement('div');
            header.classList.add('flex', 'w-full', 'h-full', 'border-b', 'font-bold', 'px-5', 'py-2', 'justify-center');
            header.innerText = `Node #${obj.id}`;
        }

        // YakoNode body
        let body = document.createElement('div');
        body.classList.add('flex', 'flex-col', 'px-5', 'py-2')

        // CPU
        let cpu = genSVGItem(mdiMemory, yakonode_info.cpu_list[0].cpuName);

        // GPU
        let gpu = genSVGItem(mdiExpansionCard, yakonode_info.gpu_list[0].gpuName);

        // Memory
        let memory = genSVGItem(mdiContentSave, `${yakonode_info.memory.total} (${formatBytes(yakonode_info.memory.total*1000, 2)})`);

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
 * Generates a header for a yakomaster node
 * with a crown icon
 * @param nodeID yakonode id
 */
function genYakoMasterHeader(nodeID) {
    let header = document.createElement('div');
    header.classList.add('flex', 'w-full', 'h-full', 'border-b', 'font-bold', 'px-5', 'py-2', 'justify-center');
    header.innerText = `Node #${nodeID}`;
    let crown = genSVGIcon(mdiCrown);
    crown.classList.add('bg-slate-900', 'rounded-md', 'absolute', 'right-2')
    header.appendChild(crown);

    return header;
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