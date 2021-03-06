import React from "react";
import Node from "../../nodes/Node";
import Graph from "./Graph";
import "./GraphNode.css";
import GraphNodeOutput from "./GraphNodeOutput";

interface IGraphNodeProperties {
	graph: Graph;
	node: Node;
}

const NODE_HEADER_HEIGHT: number = 21;

/*
READ THIS:
WE NEVER WANT TO UPDATE OR CREATE A STATE FOR THIS COMPONENT
BECAUSE IF WE EVER DID THE CHANGES MADE BY THE USER WOULD BE LOST
EVERYTIME THE STATE UPDATES, IF NOT THIS IS UNDEFINED REACT
BEHAVIOR ANYWAY. /!\ SO NEVER ADD A STATE TO THIS COMPONENT /!\.
*/
export default class GraphNode extends React.Component<IGraphNodeProperties> {
	private DOMElementRef: React.RefObject<HTMLDivElement>;
	private offsetX: number;
	private offsetY: number;
	private offsetZoom: number;
	private highlighted: boolean;

	constructor(props: any) {
		super(props);

		this.DOMElementRef = React.createRef();
		this.offsetX = 0;
		this.offsetY = 0;
		this.offsetZoom = 0;
		this.highlighted = false;
	}

	private onMouseDown(event: React.MouseEvent): void {
		const x = this.props.node.x, y = this.props.node.y
		const screenPos = this.props.graph.graphToPageCoordinates(x, y);
		const zoom = this.props.graph.currentZoom;
		this.offsetX = event.pageX - screenPos.x;
		this.offsetY = event.pageY - screenPos.y;
		this.offsetZoom = zoom;

		this.props.graph.selectionState.draggedGraphNode = this;
		this.props.graph.selectionState.isGraphMoveable = false;
	}

	private onMouseUp(): void {
		if (this.props.graph.selectionState.draggedGraphNode !== this) return;

		this.props.graph.selectionState.draggedGraphNode = null;
		this.props.graph.selectionState.isGraphMoveable = true;
	}

	private onMouseMove(event: MouseEvent): void {
		if (event.ctrlKey) {
			if (this.props.graph.selectionState.isGraphNodeSelected(this)) {
				this.updatePosition(event);
				return;
			}
		}

		if (this.props.graph.selectionState.draggedGraphNode !== this) return;
		this.updatePosition(event);
	}

	private onClick(event: React.MouseEvent): void {
		if (!event.ctrlKey) return;
		if (this.props.graph.selectionState.isGraphNodeSelected(this)) {
			this.props.graph.selectionState.selectGraphNode(this);
		} else {
			this.props.graph.selectionState.unselectGraphNode(this);
		}
	}

	private onClose(): void {
		this.props.graph.removeNode(this.props.node.id);
	}

	public updatePosition(event: MouseEvent): void {
		const zoom = 1 + (this.props.graph.currentZoom - this.offsetZoom) / this.offsetZoom;
		const graphPos = this.props.graph.pageToGraphCoordinates(event.pageX - this.offsetX * zoom, event.pageY - this.offsetY * zoom);

		this.props.node.setCoordinates(graphPos.x, graphPos.y);
		this.props.graph.updateNodes();
	}

	public toggleHighlight(): void {
		if (!this.DOMElementRef.current) return;
		this.highlighted = !this.highlighted;
		this.DOMElementRef.current.style.border = this.highlighted ? "1px dashed orange" : "none";
	}

	public componentDidMount(): void {
		this.props.graph.DOMElement?.addEventListener("mousemove", this.onMouseMove.bind(this));
	}

	public componentWillUnmount(): void {
		this.props.graph.DOMElement?.removeEventListener("mousemove", this.onMouseMove);
	}

	private renderProperties(): Array<JSX.Element> {
		const elements: Array<JSX.Element> = [];
		for (const [propertyName, property] of this.props.node.properties) {
			const elementId: string = `${this.props.node.id}_${propertyName}`;
			elements.push(this.props.graph.editor.factory.createGraphNodeProperty(
				elementId, this.props.node, property, this.props.graph));
		}

		return elements;
	}

	private renderOutputs(): Array<JSX.Element> {
		const elements: Array<JSX.Element> = [];
		for (const [outputName, output] of this.props.node.outputs) {
			const elementId: string = `${this.props.node.id}_${outputName}`;
			elements.push(<GraphNodeOutput key={elementId} name={outputName} output={output} graph={this.props.graph}/>);
		}

		return elements;
	}

	public render(): JSX.Element {
		return (<div className="graph-node" style={{
					position: "absolute",
					left: this.props.node.x,
					top: this.props.node.y,
					width: this.props.node.width}} ref={this.DOMElementRef}>
				<div style={{
						backgroundImage: `linear-gradient(to right, ${this.props.node.color}, #111)`,
						height: NODE_HEADER_HEIGHT,
						cursor: "move"
					}}
					onClick={this.onClick.bind(this)}
					onMouseDown={this.onMouseDown.bind(this)}
					onMouseUp={this.onMouseUp.bind(this)}
					className="header">
					<div>{this.props.node.name}</div>
					<button onClick={this.onClose.bind(this)}>x</button>
				</div>
			<div className="content">
				{this.renderProperties()}
				{this.props.node.outputs.size > 0 ? <hr /> : <div />}
				{this.renderOutputs()}
			</div>
		</div>);
	}
}