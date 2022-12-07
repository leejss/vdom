export type VElementNode = {
  tag: string;
  props?: VProps;
  children?: VNode | VNode[];
};
export type VTextNode = string;
export type VNode = VElementNode | VTextNode;
export type VProps = Record<string, string>;

export const createElement = (
  tag: string,
  props?: VProps,
  children?: VNode | VNode[],
): VElementNode => {
  return {
    tag,
    props,
    children,
  };
};

// Element node and Text node

/**
 * Virtaul DOM to Real DOM */
export const renderElementNode = (node: VElementNode) => {
  // create element from node
  const elem = document.createElement(node.tag);
  let props = node.props ?? null;
  let children = node.children ?? null;

  if (props) {
    for (const [k, v] of Object.entries(props)) {
      elem.setAttribute(k, v);
    }
  }

  if (children) {
    if (Array.isArray(children)) {
      for (const child of children) {
        if (typeof child === "string") {
          elem.appendChild(renderTextNode(child));
        } else {
          elem.appendChild(renderElementNode(child));
        }
      }
    } else {
      if (typeof children === "string") {
        elem.appendChild(renderTextNode(children));
      } else {
        elem.appendChild(renderElementNode(children));
      }
    }
  }

  return elem;
};

export const renderTextNode = (text: string) => {
  return document.createTextNode(text);
};

export const render = (node: VNode) => {
  if (typeof node === "string") return renderTextNode(node);
  return renderElementNode(node);
};
